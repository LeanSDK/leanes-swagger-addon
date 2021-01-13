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
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _init, _init2, _init3, _init4, _descriptor, _descriptor2, _class3, _temp;

  const {
    APPLICATION_ROUTER,
    SWAGGER_GATEWAY,
    NON_RENDERABLE,
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
  let SwaggerResource = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SwaggerResource", _flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("specification", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.staticProperty("specEtag", _flowRuntime.default.string()), _flowRuntime.default.property("_appRouterFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface)))), _flowRuntime.default.method("_appRouter", _flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface))), _flowRuntime.default.property("_swaggerGatewayFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SwaggerGatewayInterface)))), _flowRuntime.default.method("_swaggerGateway", _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerGatewayInterface))), _flowRuntime.default.method("index"), _flowRuntime.default.method("static"), _flowRuntime.default.method("spec"), _flowRuntime.default.method("swaggerifyPath", _flowRuntime.default.param("path", _flowRuntime.default.any())), _flowRuntime.default.method("buildSwaggerPaths"), _flowRuntime.default.method("buildOperation", _flowRuntime.default.param("endpoint", _flowRuntime.default.any())), _flowRuntime.default.method("swaggerifyType", _flowRuntime.default.param("schema", _flowRuntime.default.any())), _flowRuntime.default.method("swaggerifyParam", _flowRuntime.default.param("schema", _flowRuntime.default.any())), _flowRuntime.default.method("swaggerifyBody", _flowRuntime.default.param("schema", _flowRuntime.default.any()), _flowRuntime.default.param("multiple", _flowRuntime.default.any())), _flowRuntime.default.method("joi2schema", _flowRuntime.default.param("schema", _flowRuntime.default.any()), _flowRuntime.default.param("multiple", _flowRuntime.default.any())))), _dec2 = chains(['index', 'spec', 'static'], function () {
    return;
  }), _dec3 = partOf(Module), _dec4 = mixin(ConfigurableMixin), _dec5 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _dec6 = _flowRuntime.default.decorate(_flowRuntime.default.string()), _dec7 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface)))), _dec8 = inject(`Factory<${APPLICATION_ROUTER}>`), _dec9 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SwaggerGatewayInterface)))), _dec10 = inject(`Factory<${SWAGGER_GATEWAY}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = class SwaggerResource extends Resource {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_appRouterFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_swaggerGatewayFactory", _descriptor2, this);
    }

    get _appRouter() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface));

      return _returnType.assert(this._appRouterFactory());
    }

    get _swaggerGateway() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerGatewayInterface));

      return _returnType2.assert(this._swaggerGatewayFactory());
    }

    async index() {
      this.context.status = MOVED;
      this.context.redirect('/swagger/index.html');
      return NON_RENDERABLE;
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
      return NON_RENDERABLE;
    }

    async spec() {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "specification", [_dec5, property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "specification"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init3;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "specEtag", [_dec6, property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "specEtag"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init4;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_appRouterFactory", [_dec7, _dec8, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_appRouter", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_appRouter"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerGatewayFactory", [_dec9, _dec10, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerGateway", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_swaggerGateway"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "index", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'static', [action], Object.getOwnPropertyDescriptor(_class2.prototype, 'static'), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "spec", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "spec"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyPath", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "buildSwaggerPaths", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildSwaggerPaths"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "buildOperation", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildOperation"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyType", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyType"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerifyBody", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyBody"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "joi2schema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "joi2schema"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Td2FnZ2VyUmVzb3VyY2UuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUk9VVEVSIiwiU1dBR0dFUl9HQVRFV0FZIiwiTk9OX1JFTkRFUkFCTEUiLCJSZXNvdXJjZSIsIkNvbmZpZ3VyYWJsZU1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsImFjdGlvbiIsImNoYWlucyIsImluamVjdCIsIm1peGluIiwiVXRpbHMiLCJfIiwiam9pIiwic3RhdHVzZXMiLCJOUyIsIk1PVkVEIiwiREVGQVVMVF9FUlJPUl9TQ0hFTUEiLCJvYmplY3QiLCJrZXlzIiwiZXJyb3IiLCJhbGxvdyIsInJlcXVpcmVkIiwiZXJyb3JOdW0iLCJudW1iZXIiLCJpbnRlZ2VyIiwib3B0aW9uYWwiLCJlcnJvck1lc3NhZ2UiLCJzdHJpbmciLCJjb2RlIiwiTUlNRV9KU09OIiwiU3dhZ2dlclJlc291cmNlIiwiX2FwcFJvdXRlciIsIl9hcHBSb3V0ZXJGYWN0b3J5IiwiX3N3YWdnZXJHYXRld2F5IiwiX3N3YWdnZXJHYXRld2F5RmFjdG9yeSIsImluZGV4IiwiY29udGV4dCIsInN0YXR1cyIsInJlZGlyZWN0IiwidXJsUGFydCIsInVybCIsInNwbGl0IiwiZmlsZW5hbWUiLCJzbGljZSIsImZpbGVQYXRoIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJyZXNwb25kIiwidHlwZSIsIm1pbWVUeXBlcyIsImxvb2t1cCIsImZpbGUiLCJmcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJwaXBlIiwicmVzIiwic3BlYyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpY2Vuc2UiLCJ2ZXJzaW9uIiwiY29uZmlncyIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWNhdGlvbiIsInN3YWdnZXIiLCJiYXNlUGF0aCIsImluZm8iLCJ0aXRsZSIsInBhdGhzIiwiYnVpbGRTd2FnZ2VyUGF0aHMiLCJjb25zb2xlIiwibG9nIiwic3BlY0V0YWciLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpZ2VzdCIsImV0YWciLCJmcmVzaCIsInN3YWdnZXJpZnlQYXRoIiwicmVwbGFjZSIsInJvdXRlcyIsImZvckVhY2giLCJyZXNvdXJjZSIsInRhZyIsInJlc291cmNlVGFnIiwib3B0aW9ucyIsImtleU5hbWUiLCJlbnRpdHlOYW1lIiwicmVjb3JkTmFtZSIsIkVycm9yIiwiZW5kcG9pbnQiLCJzd2FnZ2VyRGVmaW5pdGlvbkZvciIsInJlIiwia2V5IiwicGF0aFBhcmFtIiwicGF0aEl0ZW0iLCJvcGVyYXRpb24iLCJidWlsZE9wZXJhdGlvbiIsInRvTG93ZXJDYXNlIiwicHJvZHVjZXMiLCJwYXJhbWV0ZXJzIiwiaXNEZXByZWNhdGVkIiwiZGVwcmVjYXRlZCIsInN5bm9wc2lzIiwic3VtbWFyeSIsInRhZ3MiLCJBcnJheSIsImZyb20iLCJwYXlsb2FkIiwic2NoZW1hIiwibWltZXMiLCJpc0FycmF5IiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImNvbnN1bWVzIiwiaXNTY2hlbWEiLCJwYXJhbWV0ZXIiLCJzd2FnZ2VyaWZ5Qm9keSIsImluIiwicHVzaCIsInJlc3BvbnNlcyIsImpvaTJzY2hlbWEiLCJlbmRwb2ludFJlc3BvbnNlcyIsImlzTnVtYmVyIiwiaXNOaWwiLCJjb250ZW50VHlwZSIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJsZW5ndGgiLCJfZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwiZW5kcG9pbnRFcnJvcnMiLCJlcnJvcnMiLCJlbmRwb2ludFBhdGhQYXJhbXMiLCJwYXRoUGFyYW1zIiwic29tZSIsInN3YWdnZXJpZnlQYXJhbSIsImVuZHBvaW50UXVlcnlQYXJhbXMiLCJxdWVyeVBhcmFtcyIsImVuZHBvaW50SGVhZGVycyIsImhlYWRlcnMiLCJzd2FnZ2VyaWZ5VHlwZSIsIl90eXBlIiwiX3Rlc3RzIiwidGVzdCIsInBhcmFtIiwiX3ByZXNlbmNlIiwiaXRlbSIsImZvcm1hdCIsIl92YWxpZHMiLCJfc2V0IiwiZW51bSIsIl9mbGFncyIsImRlZmF1bHQiLCJtdWx0aXBsZSIsImFycmF5IiwiaXRlbXMiLCJfX2ZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFZZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGtCQURJO0FBQ2dCQyxJQUFBQSxlQURoQjtBQUNpQ0MsSUFBQUEsY0FEakM7QUFFSkMsSUFBQUEsUUFGSTtBQUdKQyxJQUFBQSxpQkFISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLE1BSmhCO0FBSXdCQyxJQUFBQSxJQUp4QjtBQUk4QkMsSUFBQUEsUUFKOUI7QUFJd0NDLElBQUFBLE1BSnhDO0FBSWdEQyxJQUFBQSxNQUpoRDtBQUl3REMsSUFBQUEsTUFKeEQ7QUFJZ0VDLElBQUFBLE1BSmhFO0FBSXdFQyxJQUFBQSxLQUp4RTtBQUtKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsQ0FBRjtBQUFLQyxNQUFBQSxHQUFMO0FBQVVDLE1BQUFBO0FBQVY7QUFMSCxNQU1GbkIsTUFBTSxDQUFDb0IsRUFOWDtBQVFBLFFBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDLG1CQUFELENBQXRCO0FBRUEsUUFBTUcsb0JBQW9CLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdDQyxJQUFBQSxLQUFLLEVBQUVQLEdBQUcsQ0FBQ1EsS0FBSixDQUFVLElBQVYsRUFBZ0JDLFFBQWhCLEVBRHNDO0FBRTdDQyxJQUFBQSxRQUFRLEVBQUVWLEdBQUcsQ0FBQ1csTUFBSixHQUFhQyxPQUFiLEdBQXVCQyxRQUF2QixFQUZtQztB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LE1BN0NzQiwrSUFtRFQsUUFuRFMsR0FtRHRCQSxNQW5Ec0Isc0RBbURULFFBbkRTLDJGQStEdEJBLE1BL0RzQixpS0E2RnRCRCxNQTdGc0IsOEtBb0d0QkEsTUFwR3NCLDhLQThJdEJBLE1BOUlzQiwyS0EyWXRCQSxNQTNZc0IsNEtBZ2J0QkEsTUFoYnNCLDRLQTZjdEJBLE1BN2NzQix1S0FzZHRCQSxNQXRkc0I7QUE4ZDFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IG1pbWVUeXBlcyBmcm9tICdtaW1lLXR5cGVzJztcbmltcG9ydCBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHsgdG9Kc29uIH0gZnJvbSAnanNvbi1qb2ktY29udmVydGVyJztcblxuaW1wb3J0IHR5cGUgeyBSb3V0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1JvdXRlckludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFN3YWdnZXJHYXRld2F5SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Td2FnZ2VyR2F0ZXdheUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFQUExJQ0FUSU9OX1JPVVRFUiwgU1dBR0dFUl9HQVRFV0FZLCBOT05fUkVOREVSQUJMRSxcbiAgICBSZXNvdXJjZSxcbiAgICBDb25maWd1cmFibGVNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgYWN0aW9uLCBjaGFpbnMsIGluamVjdCwgbWl4aW4sXG4gICAgVXRpbHM6IHsgXywgam9pLCBzdGF0dXNlcyB9LFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE1PVkVEID0gc3RhdHVzZXMoJ01vdmVkIFBlcm1hbmVudGx5Jyk7XG5cbiAgY29uc3QgREVGQVVMVF9FUlJPUl9TQ0hFTUEgPSBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgZXJyb3I6IGpvaS5hbGxvdyh0cnVlKS5yZXF1aXJlZCgpLFxuICAgIGVycm9yTnVtOiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKCksXG4gICAgZXJyb3JNZXNzYWdlOiBqb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBjb2RlOiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKClcbiAgfSk7XG5cbiAgY29uc3QgTUlNRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gIEBpbml0aWFsaXplXG4gIEBjaGFpbnMoWydpbmRleCcsICdzcGVjJywgJ3N0YXRpYyddLCBmdW5jdGlvbiAoKSB7IHJldHVybjsgfSlcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDb25maWd1cmFibGVNaXhpbilcbiAgY2xhc3MgU3dhZ2dlclJlc291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBzdGF0aWMgc3BlY2lmaWNhdGlvbjogP29iamVjdCA9IG51bGw7XG4gICAgQHByb3BlcnR5IHN0YXRpYyBzcGVjRXRhZzogc3RyaW5nID0gbnVsbDtcblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtBUFBMSUNBVElPTl9ST1VURVJ9PmApXG4gICAgQHByb3BlcnR5IF9hcHBSb3V0ZXJGYWN0b3J5OiAoKSA9PiBSb3V0ZXJJbnRlcmZhY2U7XG5cbiAgICBAcHJvcGVydHkgZ2V0IF9hcHBSb3V0ZXIoKTogUm91dGVySW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9hcHBSb3V0ZXJGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgQGluamVjdChgRmFjdG9yeTwke1NXQUdHRVJfR0FURVdBWX0+YClcbiAgICBAcHJvcGVydHkgX3N3YWdnZXJHYXRld2F5RmFjdG9yeTogKCkgPT4gU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2U7XG5cbiAgICBAcHJvcGVydHkgZ2V0IF9zd2FnZ2VyR2F0ZXdheSgpOiBTd2FnZ2VyR2F0ZXdheUludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3dhZ2dlckdhdGV3YXlGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBpbmRleCgpIHtcbiAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBNT1ZFRFxuICAgICAgdGhpcy5jb250ZXh0LnJlZGlyZWN0KCcvc3dhZ2dlci9pbmRleC5odG1sJylcbiAgICAgIHJldHVybiBOT05fUkVOREVSQUJMRVxuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgJ3N0YXRpYycoKSB7XG4gICAgICBjb25zdCB1cmxQYXJ0ID0gdGhpcy5jb250ZXh0LnVybC5zcGxpdCgnc3dhZ2dlci8nKTtcbiAgICAgIGNvbnN0IFtmaWxlbmFtZV0gPSB1cmxQYXJ0LnNsaWNlKC0xKTtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ3N3YWdnZXInLCBmaWxlbmFtZSk7XG4gICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gMjAwO1xuICAgICAgdGhpcy5jb250ZXh0LnJlc3BvbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udGV4dC50eXBlID0gbWltZVR5cGVzLmxvb2t1cChmaWxlbmFtZSk7XG4gICAgICBjb25zdCBmaWxlID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCk7XG4gICAgICBmaWxlLnBpcGUodGhpcy5jb250ZXh0LnJlcyk7XG4gICAgICByZXR1cm4gTk9OX1JFTkRFUkFCTEVcbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIHNwZWMoKSB7XG4gICAgICBjb25zdCB7bmFtZSwgZGVzY3JpcHRpb24sIGxpY2Vuc2UsIHZlcnNpb259ID0gdGhpcy5jb25maWdzO1xuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3Iuc3BlY2lmaWNhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc3BlY2lmaWNhdGlvbiA9IHtcbiAgICAgICAgICBzd2FnZ2VyOiAnMi4wJyxcbiAgICAgICAgICBiYXNlUGF0aDogJycsXG4gICAgICAgICAgLy8gc2NoZW1lczogWydodHRwJywgJ2h0dHBzJ11cbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIGxpY2Vuc2U6IHtcbiAgICAgICAgICAgICAgbmFtZTogbGljZW5zZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gZGVmaW5pdGlvbnM6IHN3YWdnZXIuZGVmaW5pdGlvbnNcbiAgICAgICAgICBwYXRoczogdGhpcy5idWlsZFN3YWdnZXJQYXRocygpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZGZzZGYnLCB0aGlzLmNvbnN0cnVjdG9yLnNwZWNpZmljYXRpb24pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNwZWNFdGFnID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTEnKS51cGRhdGUoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25zdHJ1Y3Rvci5zcGVjaWZpY2F0aW9uKSkuZGlnZXN0KCdoZXgnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGV4dC5ldGFnID0gdGhpcy5jb25zdHJ1Y3Rvci5zcGVjRXRhZztcbiAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSAyMDA7XG4gICAgICBpZiAodGhpcy5jb250ZXh0LmZyZXNoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSAzMDQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnNwZWNpZmljYXRpb247XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzd2FnZ2VyaWZ5UGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aFxuICAgICAgICAucmVwbGFjZSgvKD86OikoW15cXC9dKikvZywgJ3skMX0nKVxuICAgICAgICAucmVwbGFjZSgvKFsqXSkvZywgJ3skMX0nKVxuICAgICAgICAucmVwbGFjZSgvW1xcK10vZywgJycpO1xuICAgIH1cblxuICAgIEBtZXRob2QgYnVpbGRTd2FnZ2VyUGF0aHMoKSB7XG4gICAgICBjb25zdCBwYXRocyA9IHt9O1xuICAgICAgdGhpcy5fYXBwUm91dGVyLnJvdXRlcy5mb3JFYWNoKCh7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcmVzb3VyY2UsXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgdGFnOiByZXNvdXJjZVRhZyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAga2V5TmFtZSxcbiAgICAgICAgZW50aXR5TmFtZSxcbiAgICAgICAgcmVjb3JkTmFtZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3dhZ2dlckdhdGV3YXkgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtTV0FHR0VSX0dBVEVXQVl9IGlzIGFic2VudCBpbiBjb2RlYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9zd2FnZ2VyR2F0ZXdheS5zd2FnZ2VyRGVmaW5pdGlvbkZvcihyZXNvdXJjZSwgYWN0aW9uLCB7a2V5TmFtZSwgZW50aXR5TmFtZSwgcmVjb3JkTmFtZX0pO1xuICAgICAgICBpZiAoZW5kcG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW5kcG9pbnQgZm9yICR7cmVzb3VyY2V9IyR7YWN0aW9ufSBpcyBhYnNlbnQgaW4gY29kZWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgY29uc3QgcmUgPSBwYXRoVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBlbmRwb2ludC5wYXRoUGFyYW0oa2V5Lm5hbWUgPT09IDAgPyAnKicgOiBrZXkubmFtZSwgam9pLnN0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2VUYWcgIT0gbnVsbCkge1xuICAgICAgICAgIGVuZHBvaW50LnRhZyhyZXNvdXJjZVRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IHRoaXMuc3dhZ2dlcmlmeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghcGF0aHNbcGF0aF0pIHtcbiAgICAgICAgICBwYXRoc1twYXRoXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhJdGVtID0gcGF0aHNbcGF0aF07XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IHRoaXMuYnVpbGRPcGVyYXRpb24oZW5kcG9pbnQpO1xuICAgICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFwYXRoSXRlbVttZXRob2RdKSB7XG4gICAgICAgICAgcGF0aEl0ZW1bbWV0aG9kXSA9IG9wZXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBidWlsZE9wZXJhdGlvbihlbmRwb2ludCkge1xuICAgICAgY29uc3Qgb3BlcmF0aW9uID0ge1xuICAgICAgICBwcm9kdWNlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdXG4gICAgICB9O1xuICAgICAgaWYgKGVuZHBvaW50LmlzRGVwcmVjYXRlZCAhPSBudWxsKSB7XG4gICAgICAgIG9wZXJhdGlvbi5kZXByZWNhdGVkID0gZW5kcG9pbnQuaXNEZXByZWNhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKGVuZHBvaW50LnN5bm9wc2lzICE9IG51bGwpIHtcbiAgICAgICAgb3BlcmF0aW9uLmRlc2NyaXB0aW9uID0gZW5kcG9pbnQuc3lub3BzaXM7XG4gICAgICB9XG4gICAgICBpZiAoZW5kcG9pbnQudGl0bGUgIT0gbnVsbCkge1xuICAgICAgICBvcGVyYXRpb24uc3VtbWFyeSA9IGVuZHBvaW50LnRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGVuZHBvaW50LnRhZ3MgIT0gbnVsbCkge1xuICAgICAgICBvcGVyYXRpb24udGFncyA9IEFycmF5LmZyb20oZW5kcG9pbnQudGFncyAhPSBudWxsID8gZW5kcG9pbnQudGFncyA6IFtdKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRwb2ludC5wYXlsb2FkICE9IG51bGwpIHtcbiAgICAgICAgbGV0IHtzY2hlbWEsIG1pbWVzLCBkZXNjcmlwdGlvbn0gPSBlbmRwb2ludC5wYXlsb2FkO1xuICAgICAgICBpZiAoIV8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNPYmplY3Qoc2NoZW1hKSAmJiBfLmlzQXJyYXkobWltZXMpICYmIF8uaXNTdHJpbmcoZGVzY3JpcHRpb24pKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkgJiYgXy5pc0FycmF5KG1pbWVzKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHNjaGVtYSkpIHtcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKHNjaGVtYSkpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLmNvbnN1bWVzID0gbWltZXMuc2xpY2UoKTtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hICE9IG51bGwgPyBqb2kuaXNTY2hlbWEoc2NoZW1hKSA/IHNjaGVtYSA6IHNjaGVtYS5zY2hlbWEgOiBudWxsO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBzY2hlbWEgIT0gbnVsbCA/IHRoaXMuc3dhZ2dlcmlmeUJvZHkoc2NoZW1hLCBmYWxzZSkgOiB7XG4gICAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1ldGVyLm5hbWUgPSAnYm9keSc7XG4gICAgICAgIHBhcmFtZXRlci5pbiA9ICdib2R5JztcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBwYXJhbWV0ZXIuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XG4gICAgICB9XG4gICAgICBvcGVyYXRpb24ucmVzcG9uc2VzID0ge1xuICAgICAgICA1MDA6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RlZmF1bHQgZXJyb3IgcmVzcG9uc2UuJyxcbiAgICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShERUZBVUxUX0VSUk9SX1NDSEVNQSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGVuZHBvaW50UmVzcG9uc2VzID0gZW5kcG9pbnQucmVzcG9uc2VzICE9IG51bGwgPyBlbmRwb2ludC5yZXNwb25zZXMgOiBbXTtcbiAgICAgIGZvciAobGV0IHtzdGF0dXMsIHNjaGVtYSwgbWltZXMsIGRlc2NyaXB0aW9ufSBvZiBlbmRwb2ludFJlc3BvbnNlcykge1xuICAgICAgICBpZiAoKF8uaXNOdW1iZXIoc3RhdHVzKSB8fCBfLmlzU3RyaW5nKHN0YXR1cykpICYmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpKSAmJiBfLmlzQXJyYXkobWltZXMpICYmIF8uaXNTdHJpbmcoZGVzY3JpcHRpb24pKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkpICYmIF8uaXNTdHJpbmcobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICB9IGVsc2UgaWYgKChfLmlzTnVtYmVyKHN0YXR1cykgfHwgXy5pc1N0cmluZyhzdGF0dXMpKSAmJiBfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzU3RyaW5nKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgbWltZXMgPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkpICYmIF8uaXNBcnJheShtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFfLmlzQXJyYXkoc3RhdHVzKSAmJiBfLmlzT2JqZWN0KHN0YXR1cykpICYmIF8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICB9IGVsc2UgaWYgKChfLmlzTnVtYmVyKHN0YXR1cykgfHwgXy5pc1N0cmluZyhzdGF0dXMpKSAmJiAoIV8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNPYmplY3Qoc2NoZW1hKSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgbWltZXMgPSBbTUlNRV9KU09OXTtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgbWltZXMgPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgXy5pc1N0cmluZyhzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgbWltZXMgPSBbXTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCghXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc09iamVjdChzdGF0dXMpKSAmJiBfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzTmlsKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICB9IGVsc2UgaWYgKCghXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc09iamVjdChzdGF0dXMpKSAmJiBfLmlzU3RyaW5nKHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc1N0cmluZyhzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgbWltZXMgPSBzdGF0dXM7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFfLmlzQXJyYXkoc3RhdHVzKSAmJiBfLmlzT2JqZWN0KHN0YXR1cykpICYmIF8uaXNOaWwoc2NoZW1hKSAmJiBfLmlzTmlsKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIHNjaGVtYSA9IHN0YXR1cztcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc05pbChzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gc3RhdHVzO1xuICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcoc3RhdHVzKSAmJiBfLmlzTmlsKHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHN0YXR1cztcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgbWltZXMgPSBbXTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IG51bGwgJiYgKHNjaGVtYSA9PSBudWxsKSkge1xuICAgICAgICAgIHN0YXR1cyA9IDIwNDtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IG51bGwgJiYgKHNjaGVtYSAhPSBudWxsKSkge1xuICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgoc3RhdHVzICE9IG51bGwpICYmIChzY2hlbWEgPT0gbnVsbCkpIHtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgoc3RhdHVzICE9IG51bGwpICYmIChzY2hlbWEgIT0gbnVsbCkpIHtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnRUeXBlIG9mIG1pbWVzKSB7XG4gICAgICAgICAgaWYgKCFvcGVyYXRpb24ucHJvZHVjZXMuaW5jbHVkZXMoY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICBvcGVyYXRpb24ucHJvZHVjZXMucHVzaChjb250ZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjaGVtYSA9IHNjaGVtYSAhPSBudWxsID8gam9pLmlzU2NoZW1hKHNjaGVtYSkgPyBzY2hlbWEgOiBzY2hlbWEuc2NoZW1hIDogbnVsbDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgaWYgKG1pbWVzLmxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2NoZW1hID0gc2NoZW1hICE9IG51bGwgPyB0aGlzLmpvaTJzY2hlbWEoc2NoZW1hLCBmYWxzZSkgOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzY2hlbWEgIT0gbnVsbCA/IHNjaGVtYS5fZGVzY3JpcHRpb24gOiB2b2lkIDApICE9IG51bGwpIHtcbiAgICAgICAgICByZXNwb25zZS5kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLnNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHJlc3BvbnNlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RhdHVzZXNbc3RhdHVzXTtcbiAgICAgICAgICByZXNwb25zZS5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UgIT0gbnVsbCA/IGBIVFRQICR7c3RhdHVzfSAke21lc3NhZ2V9LmAgOiByZXNwb25zZS5zY2hlbWEgIT0gbnVsbCA/IGBOb25kZXNjcmlwdCAke3N0YXR1c30gcmVzcG9uc2UuYCA6IGBOb25kZXNjcmlwdCAke3N0YXR1c30gcmVzcG9uc2Ugd2l0aG91dCBib2R5LmA7XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLnJlc3BvbnNlc1tzdGF0dXNdID0gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRwb2ludEVycm9ycyA9IGVuZHBvaW50LmVycm9ycyAhPSBudWxsID8gZW5kcG9pbnQuZXJyb3JzIDogW107XG4gICAgICBmb3IgKGNvbnN0IHtzdGF0dXMsIGRlc2NyaXB0aW9ufSBvZiBlbmRwb2ludEVycm9ycykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShERUZBVUxUX0VSUk9SX1NDSEVNQSwgZmFsc2UpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzcG9uc2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UuZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdGF0dXNlc1tzdGF0dXNdO1xuICAgICAgICAgIHJlc3BvbnNlLmRlc2NyaXB0aW9uID0gbWVzc2FnZSAhPSBudWxsID8gYEhUVFAgJHtzdGF0dXN9ICR7bWVzc2FnZX0uYCA6IHJlc3BvbnNlLnNjaGVtYSAhPSBudWxsID8gYE5vbmRlc2NyaXB0ICR7c3RhdHVzfSByZXNwb25zZS5gIDogYE5vbmRlc2NyaXB0ICR7c3RhdHVzfSByZXNwb25zZSB3aXRob3V0IGJvZHkuYDtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucmVzcG9uc2VzW3N0YXR1c10gPSByZXNwb25zZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRwb2ludEVycm9ycyA+IDApe1xuICAgICAgICBpZiAoIW9wZXJhdGlvbi5wcm9kdWNlcy5pbmNsdWRlcyhNSU1FX0pTT04pKSB7XG4gICAgICAgICAgb3BlcmF0aW9uLnByb2R1Y2VzLnB1c2goTUlNRV9KU09OKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFvcGVyYXRpb24ucHJvZHVjZXMuaW5jbHVkZXMoTUlNRV9KU09OKSkge1xuICAgICAgICBvcGVyYXRpb24ucHJvZHVjZXMucHVzaChNSU1FX0pTT04pO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kcG9pbnRQYXRoUGFyYW1zID0gZW5kcG9pbnQucGF0aFBhcmFtcyAhPSBudWxsID8gZW5kcG9pbnQucGF0aFBhcmFtcyA6IFtdO1xuICAgICAgZm9yIChsZXQge25hbWUsIHNjaGVtYSwgZGVzY3JpcHRpb259IG9mIGVuZHBvaW50UGF0aFBhcmFtcykge1xuICAgICAgICBpZiAoXy5pc1N0cmluZyhzY2hlbWEpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5zb21lKG9wZXJhdGlvbi5wYXJhbWV0ZXJzLCB7bmFtZX0pKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gc2NoZW1hICE9IG51bGwgPyB0aGlzLnN3YWdnZXJpZnlQYXJhbShqb2kuaXNTY2hlbWEoc2NoZW1hKSA/IHNjaGVtYSA6IGpvaS5vYmplY3Qoc2NoZW1hKSkgOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1ldGVyLm5hbWUgPSBuYW1lO1xuICAgICAgICBwYXJhbWV0ZXIuaW4gPSAncGF0aCc7XG4gICAgICAgIHBhcmFtZXRlci5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgcGFyYW1ldGVyLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kcG9pbnRRdWVyeVBhcmFtcyA9IGVuZHBvaW50LnF1ZXJ5UGFyYW1zICE9IG51bGwgPyBlbmRwb2ludC5xdWVyeVBhcmFtcyA6IFtdO1xuICAgICAgZm9yIChsZXQge25hbWUsIHNjaGVtYSwgZGVzY3JpcHRpb259IG9mIGVuZHBvaW50UXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoc2NoZW1hKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2NoZW1hO1xuICAgICAgICAgIHNjaGVtYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uc29tZShvcGVyYXRpb24ucGFyYW1ldGVycywge25hbWV9KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHNjaGVtYSAhPSBudWxsID8gdGhpcy5zd2FnZ2VyaWZ5UGFyYW0oam9pLmlzU2NoZW1hKHNjaGVtYSkgPyBzY2hlbWEgOiBqb2kub2JqZWN0KHNjaGVtYSkpIDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH07XG4gICAgICAgIHBhcmFtZXRlci5uYW1lID0gbmFtZTtcbiAgICAgICAgcGFyYW1ldGVyLmluID0gJ3F1ZXJ5JztcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBwYXJhbWV0ZXIuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRwb2ludEhlYWRlcnMgPSBlbmRwb2ludC5oZWFkZXJzICE9IG51bGwgPyBlbmRwb2ludC5oZWFkZXJzIDogW107XG4gICAgICBmb3IgKGxldCB7bmFtZSwgc2NoZW1hLCBkZXNjcmlwdGlvbn0gb2YgZW5kcG9pbnRIZWFkZXJzKSB7XG4gICAgICAgIGlmIChfLmlzU3RyaW5nKHNjaGVtYSkpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnNvbWUob3BlcmF0aW9uLnBhcmFtZXRlcnMsIHtuYW1lfSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBzY2hlbWEgIT0gbnVsbCA/IHRoaXMuc3dhZ2dlcmlmeVBhcmFtKGpvaS5pc1NjaGVtYShzY2hlbWEpID8gc2NoZW1hIDogam9pLm9iamVjdChzY2hlbWEpKSA6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9O1xuICAgICAgICBwYXJhbWV0ZXIubmFtZSA9IG5hbWU7XG4gICAgICAgIHBhcmFtZXRlci5pbiA9ICdoZWFkZXInO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHBhcmFtZXRlci5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcGVyYXRpb247XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzd2FnZ2VyaWZ5VHlwZShzY2hlbWEpIHtcbiAgICAgIHN3aXRjaCAoc2NoZW1hLl90eXBlKSB7XG4gICAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJywgJ2JpbmFyeSddO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICByZXR1cm4gWydib29sZWFuJ107XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHJldHVybiBbJ3N0cmluZycsICdkYXRlLXRpbWUnXTtcbiAgICAgICAgY2FzZSAnZnVuYyc6XG4gICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJ107XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgaWYgKHNjaGVtYS5fdGVzdHMuc29tZShmdW5jdGlvbih0ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdC5uYW1lID09PSAnaW50ZWdlcic7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ2ludGVnZXInXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFsnbnVtYmVyJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgcmV0dXJuIFsnYXJyYXknXTtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICByZXR1cm4gWydvYmplY3QnXTtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAvLyBpZiAoc2NoZW1hLl9tZXRhLnNvbWUoZnVuY3Rpb24obWV0YSkge1xuICAgICAgICAgIC8vICAgcmV0dXJuIG1ldGEuc2VjcmV0O1xuICAgICAgICAgIC8vIH0pKSB7XG4gICAgICAgICAgLy8gICByZXR1cm4gWydzdHJpbmcnLCAncGFzc3dvcmQnXTtcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJ107XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBbJ3N0cmluZyddO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2Qgc3dhZ2dlcmlmeVBhcmFtKHNjaGVtYSkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBzY2hlbWEuX2Rlc2NyaXB0aW9uO1xuICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuX3ByZXNlbmNlID09PSAncmVxdWlyZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gIT0gbnVsbCA/IGRlc2NyaXB0aW9uIDogdm9pZCAwXG4gICAgICB9O1xuICAgICAgbGV0IGl0ZW0gPSBwYXJhbTtcbiAgICAgIC8vIGlmIChzY2hlbWEuX21ldGEuc29tZShmdW5jdGlvbihtZXRhKSB7XG4gICAgICAvLyAgIHJldHVybiBtZXRhLmFsbG93TXVsdGlwbGU7XG4gICAgICAvLyB9KSkge1xuICAgICAgLy8gICBwYXJhbS50eXBlID0gJ2FycmF5JztcbiAgICAgIC8vICAgcGFyYW0uY29sbGVjdGlvbkZvcm1hdCA9ICdtdWx0aSc7XG4gICAgICAvLyAgIHBhcmFtLml0ZW1zID0ge307XG4gICAgICAvLyAgIGl0ZW0gPSBwYXJhbS5pdGVtcztcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnN3YWdnZXJpZnlUeXBlKHNjaGVtYSk7XG4gICAgICBpdGVtLnR5cGUgPSB0eXBlWzBdO1xuICAgICAgaWYgKHR5cGUubGVuZ3RoID4gMSkge1xuICAgICAgICBpdGVtLmZvcm1hdCA9IHR5cGVbMV07XG4gICAgICB9XG4gICAgICBpZiAoc2NoZW1hLl92YWxpZHMgJiYgc2NoZW1hLl92YWxpZHMuX3NldCAmJiBzY2hlbWEuX3ZhbGlkcy5fc2V0Lmxlbmd0aCkge1xuICAgICAgICBpdGVtLmVudW0gPSBzY2hlbWEuX3ZhbGlkcy5fc2V0O1xuICAgICAgfVxuICAgICAgaWYgKCdkZWZhdWx0JyBpbiBzY2hlbWEuX2ZsYWdzKSB7XG4gICAgICAgIGl0ZW0uZGVmYXVsdCA9IHNjaGVtYS5fZmxhZ3MuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN3YWdnZXJpZnlCb2R5KHNjaGVtYSwgbXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc2NoZW1hLl9kZXNjcmlwdGlvbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuX3ByZXNlbmNlID09PSAncmVxdWlyZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gIT0gbnVsbCA/IGRlc2NyaXB0aW9uIDogdm9pZCAwLFxuICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShzY2hlbWEsIG11bHRpcGxlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGpvaTJzY2hlbWEoc2NoZW1hLCBtdWx0aXBsZSkge1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIHJldHVybiB0b0pzb24oam9pLmFycmF5KCkuaXRlbXMoc2NoZW1hKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9Kc29uKHNjaGVtYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=