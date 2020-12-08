"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _crypto = _interopRequireDefault(require("crypto"));

var _mimeTypes = _interopRequireDefault(require("mime-types"));

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _jsonJoiConverter = require("json-joi-converter");

var _RouterInterface2 = require("../interfaces/RouterInterface");

var _SwaggerGatewayInterface2 = require("../interfaces/SwaggerGatewayInterface");

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
const SwaggerGatewayInterface = _flowRuntime.default.tdz(() => _SwaggerGatewayInterface2.SwaggerGatewayInterface);

const RouterInterface = _flowRuntime.default.tdz(() => _RouterInterface2.RouterInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _init2, _init3, _init4, _descriptor, _descriptor2, _class3, _temp;

  const {
    APPLICATION_ROUTER,
    SWAGGER_GATEWAY,
    Resource,
    ConfigurableMixin,
    initialize,
    partOf,
    nameBy,
    meta,
    property,
    method,
    action,
    chains,
    inject,
    mixin,
    Utils: {
      _,
      joi,
      statuses
    }
  } = Module.NS;
  const MOVED = statuses('Moved Permanently');
  const DEFAULT_ERROR_SCHEMA = joi.object().keys({
    error: joi.allow(true).required(),
    errorNum: joi.number().integer().optional(),
    errorMessage: joi.string().optional(),
    code: joi.number().integer().optional()
  });
  const MIME_JSON = 'application/json';
  let SwaggerResource = (_dec = chains(['index', 'spec', 'static'], function () {
    return;
  }), _dec2 = partOf(Module), _dec3 = mixin(ConfigurableMixin), _dec4 = inject(`Factory<${APPLICATION_ROUTER}>`), _dec5 = inject(`Factory<${SWAGGER_GATEWAY}>`), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class SwaggerResource extends Resource {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_appRouterFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_swaggerGatewayFactory", _descriptor2, this);
    }

    get _appRouter() {
      return this._appRouterFactory();
    }

    get _swaggerGateway() {
      return this._swaggerGatewayFactory();
    }

    async index() {
      this.context.status = MOVED;
      this.context.redirect('/swagger/index.html');
    }

    async 'static'() {
      const urlPart = this.context.url.split('swagger/');
      const [filename] = urlPart.slice(-1);

      const filePath = _path.default.join(__dirname, '..', '..', 'swagger', filename);

      this.context.status = 200;
      this.context.respond = false;
      this.context.type = _mimeTypes.default.lookup(filename);

      const file = _fs.default.createReadStream(filePath);

      file.pipe(this.context.res);
    }

    async spec() {
      console.log('JJJ8');
      const {
        name,
        description,
        license,
        version
      } = this.configs;

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
        console.log('sdfsdf', this.constructor.specification);
        this.constructor.specEtag = _crypto.default.createHash('sha1').update(JSON.stringify(this.constructor.specification)).digest('hex');
      }

      this.context.etag = this.constructor.specEtag;
      this.context.status = 200;

      if (this.context.fresh) {
        this.context.status = 304;
        return;
      }

      return this.constructor.specification;
    }

    swaggerifyPath(path) {
      return path.replace(/(?::)([^\/]*)/g, '{$1}').replace(/([*])/g, '{$1}').replace(/[\+]/g, '');
    }

    buildSwaggerPaths() {
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

        const endpoint = this._swaggerGateway.swaggerDefinitionFor(resource, action, {
          keyName,
          entityName,
          recordName
        });

        if (endpoint == null) {
          throw new Error(`Endpoint for ${resource}#${action} is absent in code`);
        }

        const keys = [];
        const re = (0, _pathToRegexp.default)(path, keys);

        for (const key of keys) {
          endpoint.pathParam(key.name === 0 ? '*' : key.name, joi.string());
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

    buildOperation(endpoint) {
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
        let {
          schema,
          mimes,
          description
        } = endpoint.payload;

        if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes) && _.isString(description)) {} else if (!_.isArray(schema) && _.isObject(schema) && _.isString(mimes)) {
          description = mimes;
          mimes = [MIME_JSON];
        } else if (_.isArray(schema) && _.isString(mimes)) {
          description = mimes;
          mimes = schema;
          schema = null;
        } else if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes)) {
          description = null;
        } else if (!_.isArray(schema) && _.isObject(schema)) {
          description = null;
          mimes = [MIME_JSON];
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
        schema = schema != null ? joi.isSchema(schema) ? schema : schema.schema : null;
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

      for (let {
        status,
        schema,
        mimes,
        description
      } of endpointResponses) {
        if ((_.isNumber(status) || _.isString(status)) && !_.isArray(schema) && _.isObject(schema) && _.isArray(mimes) && _.isString(description)) {} else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(schema) && _.isObject(schema) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = [MIME_JSON];
        } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(schema) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = schema;
          schema = null;
        } else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(schema) && _.isObject(schema) && _.isArray(mimes) && _.isNil(description)) {
          description = null;
        } else if (!_.isArray(status) && _.isObject(status) && _.isArray(schema) && _.isString(mimes) && _.isNil(description)) {
          description = mimes;
          mimes = schema;
          schema = status;
          status = 200;
        } else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(schema) && _.isObject(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = [MIME_JSON];
        } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = schema;
          schema = null;
        } else if ((_.isNumber(status) || _.isString(status)) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          mimes = [];
          schema = null;
        } else if (!_.isArray(status) && _.isObject(status) && _.isArray(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = null;
          mimes = schema;
          schema = status;
          status = 200;
        } else if (!_.isArray(status) && _.isObject(status) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          schema = status;
          status = 200;
          mimes = [MIME_JSON];
        } else if (_.isArray(status) && _.isString(schema) && _.isNil(mimes) && _.isNil(description)) {
          description = schema;
          mimes = status;
          schema = null;
          status = 200;
        } else if (!_.isArray(status) && _.isObject(status) && _.isNil(schema) && _.isNil(mimes) && _.isNil(description)) {
          schema = status;
          status = 200;
          description = null;
          mimes = [MIME_JSON];
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

        if (status === null && schema == null) {
          status = 204;

          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [];
          }
        } else if (status === null && schema != null) {
          status = 200;

          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [MIME_JSON];
          }
        } else if (status != null && schema == null) {
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [];
          }
        } else if (status != null && schema != null) {
          if (!_.isArray(mimes)) {
            description = mimes;
            mimes = [MIME_JSON];
          }
        }

        for (const contentType of mimes) {
          if (!operation.produces.includes(contentType)) {
            operation.produces.push(contentType);
          }
        }

        schema = schema != null ? joi.isSchema(schema) ? schema : schema.schema : null;
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

      for (const {
        status,
        description
      } of endpointErrors) {
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

      if (endpointErrors > 0) {
        if (!operation.produces.includes(MIME_JSON)) {
          operation.produces.push(MIME_JSON);
        }
      }

      if (!operation.produces.includes(MIME_JSON)) {
        operation.produces.push(MIME_JSON);
      }

      const endpointPathParams = endpoint.pathParams != null ? endpoint.pathParams : [];

      for (let {
        name,
        schema,
        description
      } of endpointPathParams) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }

        if (_.some(operation.parameters, {
          name
        })) {
          continue;
        }

        const parameter = schema != null ? this.swaggerifyParam(joi.isSchema(schema) ? schema : joi.object(schema)) : {
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

      for (let {
        name,
        schema,
        description
      } of endpointQueryParams) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }

        if (_.some(operation.parameters, {
          name
        })) {
          continue;
        }

        const parameter = schema != null ? this.swaggerifyParam(joi.isSchema(schema) ? schema : joi.object(schema)) : {
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

      for (let {
        name,
        schema,
        description
      } of endpointHeaders) {
        if (_.isString(schema)) {
          description = schema;
          schema = null;
        }

        if (_.some(operation.parameters, {
          name
        })) {
          continue;
        }

        const parameter = schema != null ? this.swaggerifyParam(joi.isSchema(schema) ? schema : joi.object(schema)) : {
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

    swaggerifyType(schema) {
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
          if (schema._tests.some(function (test) {
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
          // if (schema._meta.some(function(meta) {
          //   return meta.secret;
          // })) {
          //   return ['string', 'password'];
          // } else {
          return ['string']; // }

          break;

        default:
          return ['string'];
      }
    }

    swaggerifyParam(schema) {
      const description = schema._description;
      const param = {
        required: schema._presence === 'required',
        description: description != null ? description : void 0
      };
      let item = param; // if (schema._meta.some(function(meta) {
      //   return meta.allowMultiple;
      // })) {
      //   param.type = 'array';
      //   param.collectionFormat = 'multi';
      //   param.items = {};
      //   item = param.items;
      // }

      const type = this.swaggerifyType(schema);
      item.type = type[0];

      if (type.length > 1) {
        item.format = type[1];
      }

      if (schema._valids && schema._valids._set && schema._valids._set.length) {
        item.enum = schema._valids._set;
      }

      if ('default' in schema._flags) {
        item.default = schema._flags.default;
      }

      return param;
    }

    swaggerifyBody(schema, multiple) {
      const description = schema._description;
      return {
        required: schema._presence === 'required',
        description: description != null ? description : void 0,
        schema: this.joi2schema(schema, multiple)
      };
    }

    joi2schema(schema, multiple) {
      if (multiple) {
        return (0, _jsonJoiConverter.toJson)(joi.array().items(schema));
      } else {
        return (0, _jsonJoiConverter.toJson)(schema);
      }
    }

  }, _class3.__filename = __filename, _class3.object = {}, _class3.specification = null, _class3.specEtag = null, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "specification", [property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "specification"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init3;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "specEtag", [property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "specEtag"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init4;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_appRouterFactory", [_dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_appRouter", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_appRouter"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerGatewayFactory", [_dec5, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerGateway", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_swaggerGateway"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "index", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'static', [action], Object.getOwnPropertyDescriptor(_class2.prototype, 'static'), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "spec", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "spec"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyPath", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "buildSwaggerPaths", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildSwaggerPaths"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "buildOperation", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildOperation"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyType", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyType"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyBody", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyBody"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "joi2schema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "joi2schema"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;