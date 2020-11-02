// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import mimeTypes from 'mime-types';
import mediaTyper from 'media-typer';
import pathToRegexp from 'path-to-regexp';
import joiToJsonSchema from 'joi-to-json-schema';

import { inject } from "inversify";

import type { RouterInterface } from '@leansdk/leanes-restful-addon/src';
import type { SwaggerGatewayInterface } from '../interfaces/SwaggerGatewayInterface';

export default (Module) => {
  const {
    APPLICATION_ROUTER, SWAGGER_GATEWAY,
    Resource,
    initialize, partOf, nameBy, meta, property, method, action, chains,
    Utils: { _, joi, statuses },
  } = Module.NS;


  const DEFAULT_ERROR_SCHEMA = joi.object().keys({
    error: joi.allow(true).required(),
    errorNum: joi.number().integer().optional(),
    errorMessage: joi.string().optional(),
    code: joi.number().integer().optional()
  });

  const MIME_JSON = 'application/json; charset=utf-8';

  const PARSED_JSON_MIME = ((mime) => {
    const mimeType = mimeTypes.contentType(mime);
    const contentType = mimeType != null ? mimeType : mime;
    const parsed = mediaTyper.parse(contentType);
    return mediaTyper.format(_.pick(parsed, ['type', 'subtype', 'suffix']));
  })(MIME_JSON);

  @initialize
  @chains(['index', 'spec', 'static'], function () { return; })
  @partOf(Module)
  class SwaggerResource extends Resource {
    @nameBy static __filename = __filename;
    @meta static object = {};
    // @property entityName = 'TestEntity';
    @method static specification: ?object = null;
    @method static specEtag: string = null;

    @property _appRouter: RouterInterface = null;
    @property _swaggerGateway: SwaggerGatewayInterface = null;

    @action async index() {
      this.context.redirect('swagger/index.html')
    }

    @action async 'static'() {
      const urlPart = this.context.url.split('swagger/');
      const [filename] = urlPart.slice(-1);
      const filePath = path.join(__dirname, '..', '..', 'swagger', filename);
      this.context.status = 200;
      this.context.respond = false;
      this.context.type = mimeTypes.lookup(filename);
      const file = fs.createReadStream(filePath);
      file.pipe(this.context.res);
    }

    @action async spec() {
      const {name, description, license, version} = this.configs;
      if (this.constructor.specification == null) {
        this.constructor.specification = {
          swagger: '2.0',
          basePath: '',
          // schemes: ['http', 'https']
          info: {
            title: name,
            description,
            version,
            license: {
              name: license
            }
          },
          // definitions: swagger.definitions
          paths: this.buildSwaggerPaths()
        };
        this.constructor.specEtag = crypto.createHash('sha1').update(JSON.stringify(this.constructor.specification)).digest('hex');
      }
      this.context.etag = this.constructor.specEtag;
      this.context.status = 200;
      if (this.context.fresh) {
        this.context.status = 304;
        return;
      }
      return this.constructor.specification;
    }

    @method swaggerifyPath(path) {
      return path
        .replace(/(?::)([^\/]*)/g, '{$1}')
        .replace(/([*])/g, '{$1}')
        .replace(/[\+]/g, '');
    }

    @method buildSwaggerPaths() {
      const paths = {};
      this._appRouter.routes.forEach(({
        method,
        path,
        resource,
        action,
        tag: resourceTag,
        options,
        keyName,
        entityName,
        recordName
      }) => {
        if (this._swaggerGateway == null) {
          throw new Error(`${SWAGGER_GATEWAY} is absent in code`);
        }
        const endpoint = this._swaggerGateway.swaggerDefinitionFor(resource, action, {keyName, entityName, recordName});
        if (endpoint == null) {
          throw new Error(`Endpoint for ${resource}#${action} is absent in code`);
        }
        const keys = [];
        const re = pathToRegexp(path, keys);
        for (const key of keys) {
          endpoint.pathParam(key.name === 0 ? '*' : key.name);
        }
        if (resourceTag != null) {
          endpoint.tag(resourceTag);
        }
        path = this.swaggerifyPath(path);
        if (!paths[path]) {
          paths[path] = {};
        }
        const pathItem = paths[path];
        const operation = this.buildOperation(endpoint);
        method = method.toLowerCase();
        if (!pathItem[method]) {
          pathItem[method] = operation;
        }
      });
      return paths;
    }

    @method buildOperation(endpoint) {
      const operation = {
        produces: [],
        parameters: []
      };
      if (endpoint.isDeprecated != null) {
        operation.deprecated = endpoint.isDeprecated;
      }
      if (endpoint.synopsis != null) {
        operation.description = endpoint.synopsis;
      }
      if (endpoint.title != null) {
        operation.summary = endpoint.title;
      }
      if (endpoint.tags != null) {
        operation.tags = Array.from(endpoint.tags != null ? endpoint.tags : []);
      }
      if (endpoint.payload != null) {
        let {schema, mimes, description} = endpoint.payload;
        if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes) && _.isString(description)) {

        //{ schema, mimes, description } = { schema, mimes, description }
        } else if (!_.isArray(schema) && _.isObject(schema) && _.isString(mimes)) {
          description = mimes;
          mimes = [PARSED_JSON_MIME];
        } else if (_.isArray(schema) && _.isString(mimes)) {
          description = mimes;
          mimes = schema;
          schema = null;
        } else if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes)) {
          description = null;
        } else if (!_.isArray(schema) && _.isObject(schema)) {
          description = null;
          mimes = [PARSED_JSON_MIME];
        } else if (_.isArray(schema)) {
          mimes = schema;
          schema = null;
          description = null;
        } else if (_.isString(schema)) {
          description = schema;
          schema = null;
          mimes = [];
        }
        operation.consumes = mimes.slice();
        schema = schema != null ? schema.isJoi ? schema : schema.schema : null;
        const parameter = schema != null ? this.swaggerifyBody(schema, false) : {
          schema: {
            type: 'string'
          }
        };
        parameter.name = 'body';
        parameter.in = 'body';
        if (description != null) {
          parameter.description = description;
        }
        operation.parameters.push(parameter);
      }
      operation.responses = {
        500: {
          description: 'Default error response.',
          schema: this.joi2schema(DEFAULT_ERROR_SCHEMA)
        }
      };
      const endpointResponses = endpoint.responses != null ? endpoint.responses : [];
      for (let {status, schema, mimes, description} of endpointResponses) {
        if ((_.isNumber(status) || _.isString(status)) && (!_.isArray(schema) && _.isObject(schema)) && _.isArray(mimes) && _.isString(description)) {

        // { status, schema, mimes, description } = { status, schema, mimes, description }
        } else if ((_.isNumber(status) || _.isString(status)) && (!_.isArray(schema) && _.isObject(schema)) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = [PARSED_JSON_MIME];
        } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(schema) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = schema;
          schema = null;
        } else if ((_.isNumber(status) || _.isString(status)) && (!_.isArray(schema) && _.isObject(schema)) && _.isArray(mimes) && _.isNil(description)) {
          description = null;
        } else if ((!_.isArray(status) && _.isObject(status)) && _.isArray(schema) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = schema;
          schema = status;
          status = 200;
        } else if ((_.isNumber(status) || _.isString(status)) && (!_.isArray(schema) && _.isObject(schema)) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = [PARSED_JSON_MIME];
        } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = schema;
          schema = null;
        } else if ((_.isNumber(status) || _.isString(status)) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          mimes = [];
          schema = null;
        } else if ((!_.isArray(status) && _.isObject(status)) && _.isArray(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = schema;
          schema = status;
          status = 200;
        } else if ((!_.isArray(status) && _.isObject(status)) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          schema = status;
          status = 200;
          mimes = [PARSED_JSON_MIME];
        } else if (_.isArray(status) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          mimes = status;
          schema = null;
          status = 200;
        } else if ((!_.isArray(status) && _.isObject(status)) && _.isNil(schema) && _.isNil(mimes) && _.isNil(description)) {
          schema = status;
          status = 200;
          description = null;
          mimes = [PARSED_JSON_MIME];
        } else if (_.isArray(status) && _.isNil(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = status;
          status = 200;
          schema = null;
        } else if (_.isString(status) && _.isNil(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = status;
          status = 200;
          mimes = [];
          schema = null;
        }
        if (status === null && (schema == null)) {
          status = 204;
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [];
          }
        } else if (status === null && (schema != null)) {
          status = 200;
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [PARSED_JSON_MIME];
          }
        } else if ((status != null) && (schema == null)) {
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [];
          }
        } else if ((status != null) && (schema != null)) {
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [PARSED_JSON_MIME];
          }
        }
        for (const contentType of mimes) {
          if (!operation.produces.includes(contentType)) {
            operation.produces.push(contentType);
          }
        }
        schema = schema != null ? schema.isJoi ? schema : schema.schema : null;
        const response = {};
        if (mimes.length != null) {
          response.schema = schema != null ? this.joi2schema(schema, false) : {
            type: 'string'
          };
        }
        if ((schema != null ? schema._description : void 0) != null) {
          response.description = schema._description;
          delete response.schema.description;
        }
        if (description != null) {
          response.description = description;
        }
        if (response.description == null) {
          const message = statuses[status];
          response.description = message != null ? `HTTP ${status} ${message}.` : response.schema != null ? `Nondescript ${status} response.` : `Nondescript ${status} response without body.`;
        }
        operation.responses[status] = response;
      }
      const endpointErrors = endpoint.errors != null ? endpoint.errors : [];
      for (const {status, description} of endpointErrors) {
        const response = {
          schema: this.joi2schema(DEFAULT_ERROR_SCHEMA, false)
        };
        if (description != null) {
          response.description = description;
        }
        if (response.description == null) {
          const message = statuses[status];
          response.description = message != null ? `HTTP ${status} ${message}.` : response.schema != null ? `Nondescript ${status} response.` : `Nondescript ${status} response without body.`;
        }
        operation.responses[status] = response;
      }
      if (endpointErrors > 0){
        if (!operation.produces.includes(PARSED_JSON_MIME)) {
          operation.produces.push(PARSED_JSON_MIME);
        }
      }
      if (!operation.produces.includes('application/json')) {
        operation.produces.push('application/json');
      }
      const endpointPathParams = endpoint.pathParams != null ? endpoint.pathParams : [];
      for (let {name, schema, description} of endpointPathParams) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }
        if (_.some(operation.parameters, {name})) {
          continue;
        }
        const parameter = schema != null ? this.swaggerifyParam(schema.isJoi ? schema : joi.object(schema)) : {
          type: 'string'
        };
        parameter.name = name;
        parameter.in = 'path';
        parameter.required = true;
        if (description != null) {
          parameter.description = description;
        }
        operation.parameters.push(parameter);
      }
      const endpointQueryParams = endpoint.queryParams != null ? endpoint.queryParams : [];
      for (let {name, schema, description} of endpointQueryParams) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }
        if (_.some(operation.parameters, {name})) {
          continue;
        }
        const parameter = schema != null ? this.swaggerifyParam(schema.isJoi ? schema : joi.object(schema)) : {
          type: 'string'
        };
        parameter.name = name;
        parameter.in = 'query';
        if (description != null) {
          parameter.description = description;
        }
        operation.parameters.push(parameter);
      }
      const endpointHeaders = endpoint.headers != null ? endpoint.headers : [];
      for (let {name, schema, description} of endpointHeaders) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }
        if (_.some(operation.parameters, {name})) {
          continue;
        }
        const parameter = schema != null ? this.swaggerifyParam(schema.isJoi ? schema : joi.object(schema)) : {
          type: 'string'
        };
        parameter.name = name;
        parameter.in = 'header';
        if (description != null) {
          parameter.description = description;
        }
        operation.parameters.push(parameter);
      }
      return operation;
    }

    @method swaggerifyType(schema) {
      switch (schema._type) {
        case 'binary':
          return ['string', 'binary'];
        case 'boolean':
          return ['boolean'];
        case 'date':
          return ['string', 'date-time'];
        case 'func':
          return ['string'];
        case 'number':
          if (schema._tests.some(function(test) {
            return test.name === 'integer';
          })) {
            return ['integer'];
          } else {
            return ['number'];
          }
          break;
        case 'array':
          return ['array'];
        case 'object':
          return ['object'];
        case 'string':
          if (schema._meta.some(function(meta) {
            return meta.secret;
          })) {
            return ['string', 'password'];
          } else {
            return ['string'];
          }
          break;
        default:
          return ['string'];
      }
    }

    @method swaggerifyParam(schema) {
      const description = schema._description;
      const param = {
        required: schema._presence === 'required',
        description: description != null ? description : void 0
      };
      let item = param;
      if (schema._meta.some(function(meta) {
        return meta.allowMultiple;
      })) {
        param.type = 'array';
        param.collectionFormat = 'multi';
        param.items = {};
        item = param.items;
      }
      const type = this.swaggerifyType(schema);
      item.type = type[0];
      if (type.length > 1) {
        item.format = type[1];
      }
      if (schema._valids._set && schema._valids._set.length) {
        item.enum = schema._valids._set;
      }
      if ('default' in schema._flags) {
        item.default = schema._flags.default;
      }
      return param;
    }

    @method swaggerifyBody(schema, multiple) {
      const description = schema._description;
      return {
        required: schema._presence === 'required',
        description: description != null ? description : void 0,
        schema: this.joi2schema(schema, multiple)
      };
    }

    @method joi2schema(schema, multiple) {
      if (multiple) {
        return joiToJsonSchema(joi.array().items(schema));
      } else {
        return joiToJsonSchema(schema);
      }
    }

    constructor({
      @inject(`Factory<${APPLICATION_ROUTER}>`) appRouterFactory: () => RouterInterface,
      @inject(`Factory<${SWAGGER_GATEWAY}>`) swaggerGatewayFactory: () => SwaggerGatewayInterface,
    }) {
      super(... arguments)
      this._appRouter = appRouterFactory()
      this._swaggerGateway = swaggerGatewayFactory()
    }
  }
}
