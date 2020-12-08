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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Td2FnZ2VyUmVzb3VyY2UuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUk9VVEVSIiwiU1dBR0dFUl9HQVRFV0FZIiwiUmVzb3VyY2UiLCJDb25maWd1cmFibGVNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwicHJvcGVydHkiLCJtZXRob2QiLCJhY3Rpb24iLCJjaGFpbnMiLCJpbmplY3QiLCJtaXhpbiIsIlV0aWxzIiwiXyIsImpvaSIsInN0YXR1c2VzIiwiTlMiLCJNT1ZFRCIsIkRFRkFVTFRfRVJST1JfU0NIRU1BIiwib2JqZWN0Iiwia2V5cyIsImVycm9yIiwiYWxsb3ciLCJyZXF1aXJlZCIsImVycm9yTnVtIiwibnVtYmVyIiwiaW50ZWdlciIsIm9wdGlvbmFsIiwiZXJyb3JNZXNzYWdlIiwic3RyaW5nIiwiY29kZSIsIk1JTUVfSlNPTiIsIlN3YWdnZXJSZXNvdXJjZSIsIl9hcHBSb3V0ZXIiLCJfYXBwUm91dGVyRmFjdG9yeSIsIl9zd2FnZ2VyR2F0ZXdheSIsIl9zd2FnZ2VyR2F0ZXdheUZhY3RvcnkiLCJpbmRleCIsImNvbnRleHQiLCJzdGF0dXMiLCJyZWRpcmVjdCIsInVybFBhcnQiLCJ1cmwiLCJzcGxpdCIsImZpbGVuYW1lIiwic2xpY2UiLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwicmVzcG9uZCIsInR5cGUiLCJtaW1lVHlwZXMiLCJsb29rdXAiLCJmaWxlIiwiZnMiLCJjcmVhdGVSZWFkU3RyZWFtIiwicGlwZSIsInJlcyIsInNwZWMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibGljZW5zZSIsInZlcnNpb24iLCJjb25maWdzIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpY2F0aW9uIiwic3dhZ2dlciIsImJhc2VQYXRoIiwiaW5mbyIsInRpdGxlIiwicGF0aHMiLCJidWlsZFN3YWdnZXJQYXRocyIsInNwZWNFdGFnIiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaWdlc3QiLCJldGFnIiwiZnJlc2giLCJzd2FnZ2VyaWZ5UGF0aCIsInJlcGxhY2UiLCJyb3V0ZXMiLCJmb3JFYWNoIiwicmVzb3VyY2UiLCJ0YWciLCJyZXNvdXJjZVRhZyIsIm9wdGlvbnMiLCJrZXlOYW1lIiwiZW50aXR5TmFtZSIsInJlY29yZE5hbWUiLCJFcnJvciIsImVuZHBvaW50Iiwic3dhZ2dlckRlZmluaXRpb25Gb3IiLCJyZSIsImtleSIsInBhdGhQYXJhbSIsInBhdGhJdGVtIiwib3BlcmF0aW9uIiwiYnVpbGRPcGVyYXRpb24iLCJ0b0xvd2VyQ2FzZSIsInByb2R1Y2VzIiwicGFyYW1ldGVycyIsImlzRGVwcmVjYXRlZCIsImRlcHJlY2F0ZWQiLCJzeW5vcHNpcyIsInN1bW1hcnkiLCJ0YWdzIiwiQXJyYXkiLCJmcm9tIiwicGF5bG9hZCIsInNjaGVtYSIsIm1pbWVzIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNTdHJpbmciLCJjb25zdW1lcyIsImlzU2NoZW1hIiwicGFyYW1ldGVyIiwic3dhZ2dlcmlmeUJvZHkiLCJpbiIsInB1c2giLCJyZXNwb25zZXMiLCJqb2kyc2NoZW1hIiwiZW5kcG9pbnRSZXNwb25zZXMiLCJpc051bWJlciIsImlzTmlsIiwiY29udGVudFR5cGUiLCJpbmNsdWRlcyIsInJlc3BvbnNlIiwibGVuZ3RoIiwiX2Rlc2NyaXB0aW9uIiwibWVzc2FnZSIsImVuZHBvaW50RXJyb3JzIiwiZXJyb3JzIiwiZW5kcG9pbnRQYXRoUGFyYW1zIiwicGF0aFBhcmFtcyIsInNvbWUiLCJzd2FnZ2VyaWZ5UGFyYW0iLCJlbmRwb2ludFF1ZXJ5UGFyYW1zIiwicXVlcnlQYXJhbXMiLCJlbmRwb2ludEhlYWRlcnMiLCJoZWFkZXJzIiwic3dhZ2dlcmlmeVR5cGUiLCJfdHlwZSIsIl90ZXN0cyIsInRlc3QiLCJwYXJhbSIsIl9wcmVzZW5jZSIsIml0ZW0iLCJmb3JtYXQiLCJfdmFsaWRzIiwiX3NldCIsImVudW0iLCJfZmxhZ3MiLCJkZWZhdWx0IiwibXVsdGlwbGUiLCJhcnJheSIsIml0ZW1zIiwiX19maWxlbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBWWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxrQkFESTtBQUNnQkMsSUFBQUEsZUFEaEI7QUFFSkMsSUFBQUEsUUFGSTtBQUdKQyxJQUFBQSxpQkFISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLE1BSmhCO0FBSXdCQyxJQUFBQSxJQUp4QjtBQUk4QkMsSUFBQUEsUUFKOUI7QUFJd0NDLElBQUFBLE1BSnhDO0FBSWdEQyxJQUFBQSxNQUpoRDtBQUl3REMsSUFBQUEsTUFKeEQ7QUFJZ0VDLElBQUFBLE1BSmhFO0FBSXdFQyxJQUFBQSxLQUp4RTtBQUtKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsQ0FBRjtBQUFLQyxNQUFBQSxHQUFMO0FBQVVDLE1BQUFBO0FBQVY7QUFMSCxNQU1GbEIsTUFBTSxDQUFDbUIsRUFOWDtBQVFBLFFBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDLG1CQUFELENBQXRCO0FBRUEsUUFBTUcsb0JBQW9CLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdDQyxJQUFBQSxLQUFLLEVBQUVQLEdBQUcsQ0FBQ1EsS0FBSixDQUFVLElBQVYsRUFBZ0JDLFFBQWhCLEVBRHNDO0FBRTdDQyxJQUFBQSxRQUFRLEVBQUVWLEdBQUcsQ0FBQ1csTUFBSixHQUFhQyxPQUFiLEdBQXVCQyxRQUF2QixFQUZtQztBQUc3Q0MsSUFBQUEsWUFBWSxFQUFFZCxHQUFHLENBQUNlLE1B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LHNEQWtEVCxRQWxEUywyRkE2RHRCQSxNQTdEc0IsaUtBNEZ0QkQsTUE1RnNCLDhLQW1HdEJBLE1BbkdzQiw4S0E2SXRCQSxNQTdJc0IsMktBMFl0QkEsTUExWXNCLDRLQSthdEJBLE1BL2FzQiw0S0E0Y3RCQSxNQTVjc0IsdUtBcWR0QkEsTUFyZHNCO0FBNmQxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBtaW1lVHlwZXMgZnJvbSAnbWltZS10eXBlcyc7XG5pbXBvcnQgcGF0aFRvUmVnZXhwIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmltcG9ydCB7IHRvSnNvbiB9IGZyb20gJ2pzb24tam9pLWNvbnZlcnRlcic7XG5cbmltcG9ydCB0eXBlIHsgUm91dGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Sb3V0ZXJJbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBTd2FnZ2VyR2F0ZXdheUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9ST1VURVIsIFNXQUdHRVJfR0FURVdBWSxcbiAgICBSZXNvdXJjZSxcbiAgICBDb25maWd1cmFibGVNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgYWN0aW9uLCBjaGFpbnMsIGluamVjdCwgbWl4aW4sXG4gICAgVXRpbHM6IHsgXywgam9pLCBzdGF0dXNlcyB9LFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE1PVkVEID0gc3RhdHVzZXMoJ01vdmVkIFBlcm1hbmVudGx5Jyk7XG5cbiAgY29uc3QgREVGQVVMVF9FUlJPUl9TQ0hFTUEgPSBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgZXJyb3I6IGpvaS5hbGxvdyh0cnVlKS5yZXF1aXJlZCgpLFxuICAgIGVycm9yTnVtOiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKCksXG4gICAgZXJyb3JNZXNzYWdlOiBqb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBjb2RlOiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKClcbiAgfSk7XG5cbiAgY29uc3QgTUlNRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gIEBpbml0aWFsaXplXG4gIEBjaGFpbnMoWydpbmRleCcsICdzcGVjJywgJ3N0YXRpYyddLCBmdW5jdGlvbiAoKSB7IHJldHVybjsgfSlcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDb25maWd1cmFibGVNaXhpbilcbiAgY2xhc3MgU3dhZ2dlclJlc291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBzdGF0aWMgc3BlY2lmaWNhdGlvbjogP29iamVjdCA9IG51bGw7XG4gICAgQHByb3BlcnR5IHN0YXRpYyBzcGVjRXRhZzogc3RyaW5nID0gbnVsbDtcblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtBUFBMSUNBVElPTl9ST1VURVJ9PmApXG4gICAgQHByb3BlcnR5IF9hcHBSb3V0ZXJGYWN0b3J5OiAoKSA9PiBSb3V0ZXJJbnRlcmZhY2U7XG5cbiAgICBAcHJvcGVydHkgZ2V0IF9hcHBSb3V0ZXIoKTogUm91dGVySW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9hcHBSb3V0ZXJGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgQGluamVjdChgRmFjdG9yeTwke1NXQUdHRVJfR0FURVdBWX0+YClcbiAgICBAcHJvcGVydHkgX3N3YWdnZXJHYXRld2F5RmFjdG9yeTogKCkgPT4gU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2U7XG5cbiAgICBAcHJvcGVydHkgZ2V0IF9zd2FnZ2VyR2F0ZXdheSgpOiBTd2FnZ2VyR2F0ZXdheUludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3dhZ2dlckdhdGV3YXlGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBpbmRleCgpIHtcbiAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBNT1ZFRFxuICAgICAgdGhpcy5jb250ZXh0LnJlZGlyZWN0KCcvc3dhZ2dlci9pbmRleC5odG1sJylcbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jICdzdGF0aWMnKCkge1xuICAgICAgY29uc3QgdXJsUGFydCA9IHRoaXMuY29udGV4dC51cmwuc3BsaXQoJ3N3YWdnZXIvJyk7XG4gICAgICBjb25zdCBbZmlsZW5hbWVdID0gdXJsUGFydC5zbGljZSgtMSk7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICdzd2FnZ2VyJywgZmlsZW5hbWUpO1xuICAgICAgdGhpcy5jb250ZXh0LnN0YXR1cyA9IDIwMDtcbiAgICAgIHRoaXMuY29udGV4dC5yZXNwb25kID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRleHQudHlwZSA9IG1pbWVUeXBlcy5sb29rdXAoZmlsZW5hbWUpO1xuICAgICAgY29uc3QgZmlsZSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xuICAgICAgZmlsZS5waXBlKHRoaXMuY29udGV4dC5yZXMpO1xuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgc3BlYygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKSko4Jyk7XG4gICAgICBjb25zdCB7bmFtZSwgZGVzY3JpcHRpb24sIGxpY2Vuc2UsIHZlcnNpb259ID0gdGhpcy5jb25maWdzO1xuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3Iuc3BlY2lmaWNhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc3BlY2lmaWNhdGlvbiA9IHtcbiAgICAgICAgICBzd2FnZ2VyOiAnMi4wJyxcbiAgICAgICAgICBiYXNlUGF0aDogJycsXG4gICAgICAgICAgLy8gc2NoZW1lczogWydodHRwJywgJ2h0dHBzJ11cbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIGxpY2Vuc2U6IHtcbiAgICAgICAgICAgICAgbmFtZTogbGljZW5zZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gZGVmaW5pdGlvbnM6IHN3YWdnZXIuZGVmaW5pdGlvbnNcbiAgICAgICAgICBwYXRoczogdGhpcy5idWlsZFN3YWdnZXJQYXRocygpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZGZzZGYnLCB0aGlzLmNvbnN0cnVjdG9yLnNwZWNpZmljYXRpb24pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNwZWNFdGFnID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTEnKS51cGRhdGUoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25zdHJ1Y3Rvci5zcGVjaWZpY2F0aW9uKSkuZGlnZXN0KCdoZXgnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGV4dC5ldGFnID0gdGhpcy5jb25zdHJ1Y3Rvci5zcGVjRXRhZztcbiAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSAyMDA7XG4gICAgICBpZiAodGhpcy5jb250ZXh0LmZyZXNoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSAzMDQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnNwZWNpZmljYXRpb247XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzd2FnZ2VyaWZ5UGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aFxuICAgICAgICAucmVwbGFjZSgvKD86OikoW15cXC9dKikvZywgJ3skMX0nKVxuICAgICAgICAucmVwbGFjZSgvKFsqXSkvZywgJ3skMX0nKVxuICAgICAgICAucmVwbGFjZSgvW1xcK10vZywgJycpO1xuICAgIH1cblxuICAgIEBtZXRob2QgYnVpbGRTd2FnZ2VyUGF0aHMoKSB7XG4gICAgICBjb25zdCBwYXRocyA9IHt9O1xuICAgICAgdGhpcy5fYXBwUm91dGVyLnJvdXRlcy5mb3JFYWNoKCh7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcmVzb3VyY2UsXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgdGFnOiByZXNvdXJjZVRhZyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAga2V5TmFtZSxcbiAgICAgICAgZW50aXR5TmFtZSxcbiAgICAgICAgcmVjb3JkTmFtZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3dhZ2dlckdhdGV3YXkgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtTV0FHR0VSX0dBVEVXQVl9IGlzIGFic2VudCBpbiBjb2RlYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9zd2FnZ2VyR2F0ZXdheS5zd2FnZ2VyRGVmaW5pdGlvbkZvcihyZXNvdXJjZSwgYWN0aW9uLCB7a2V5TmFtZSwgZW50aXR5TmFtZSwgcmVjb3JkTmFtZX0pO1xuICAgICAgICBpZiAoZW5kcG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW5kcG9pbnQgZm9yICR7cmVzb3VyY2V9IyR7YWN0aW9ufSBpcyBhYnNlbnQgaW4gY29kZWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgY29uc3QgcmUgPSBwYXRoVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBlbmRwb2ludC5wYXRoUGFyYW0oa2V5Lm5hbWUgPT09IDAgPyAnKicgOiBrZXkubmFtZSwgam9pLnN0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2VUYWcgIT0gbnVsbCkge1xuICAgICAgICAgIGVuZHBvaW50LnRhZyhyZXNvdXJjZVRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IHRoaXMuc3dhZ2dlcmlmeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghcGF0aHNbcGF0aF0pIHtcbiAgICAgICAgICBwYXRoc1twYXRoXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhJdGVtID0gcGF0aHNbcGF0aF07XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IHRoaXMuYnVpbGRPcGVyYXRpb24oZW5kcG9pbnQpO1xuICAgICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFwYXRoSXRlbVttZXRob2RdKSB7XG4gICAgICAgICAgcGF0aEl0ZW1bbWV0aG9kXSA9IG9wZXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBidWlsZE9wZXJhdGlvbihlbmRwb2ludCkge1xuICAgICAgY29uc3Qgb3BlcmF0aW9uID0ge1xuICAgICAgICBwcm9kdWNlczogW10sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtdXG4gICAgICB9O1xuICAgICAgaWYgKGVuZHBvaW50LmlzRGVwcmVjYXRlZCAhPSBudWxsKSB7XG4gICAgICAgIG9wZXJhdGlvbi5kZXByZWNhdGVkID0gZW5kcG9pbnQuaXNEZXByZWNhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKGVuZHBvaW50LnN5bm9wc2lzICE9IG51bGwpIHtcbiAgICAgICAgb3BlcmF0aW9uLmRlc2NyaXB0aW9uID0gZW5kcG9pbnQuc3lub3BzaXM7XG4gICAgICB9XG4gICAgICBpZiAoZW5kcG9pbnQudGl0bGUgIT0gbnVsbCkge1xuICAgICAgICBvcGVyYXRpb24uc3VtbWFyeSA9IGVuZHBvaW50LnRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGVuZHBvaW50LnRhZ3MgIT0gbnVsbCkge1xuICAgICAgICBvcGVyYXRpb24udGFncyA9IEFycmF5LmZyb20oZW5kcG9pbnQudGFncyAhPSBudWxsID8gZW5kcG9pbnQudGFncyA6IFtdKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRwb2ludC5wYXlsb2FkICE9IG51bGwpIHtcbiAgICAgICAgbGV0IHtzY2hlbWEsIG1pbWVzLCBkZXNjcmlwdGlvbn0gPSBlbmRwb2ludC5wYXlsb2FkO1xuICAgICAgICBpZiAoIV8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNPYmplY3Qoc2NoZW1hKSAmJiBfLmlzQXJyYXkobWltZXMpICYmIF8uaXNTdHJpbmcoZGVzY3JpcHRpb24pKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkgJiYgXy5pc0FycmF5KG1pbWVzKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHNjaGVtYSkpIHtcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKHNjaGVtYSkpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLmNvbnN1bWVzID0gbWltZXMuc2xpY2UoKTtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hICE9IG51bGwgPyBqb2kuaXNTY2hlbWEoc2NoZW1hKSA/IHNjaGVtYSA6IHNjaGVtYS5zY2hlbWEgOiBudWxsO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBzY2hlbWEgIT0gbnVsbCA/IHRoaXMuc3dhZ2dlcmlmeUJvZHkoc2NoZW1hLCBmYWxzZSkgOiB7XG4gICAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1ldGVyLm5hbWUgPSAnYm9keSc7XG4gICAgICAgIHBhcmFtZXRlci5pbiA9ICdib2R5JztcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBwYXJhbWV0ZXIuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XG4gICAgICB9XG4gICAgICBvcGVyYXRpb24ucmVzcG9uc2VzID0ge1xuICAgICAgICA1MDA6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RlZmF1bHQgZXJyb3IgcmVzcG9uc2UuJyxcbiAgICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShERUZBVUxUX0VSUk9SX1NDSEVNQSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGVuZHBvaW50UmVzcG9uc2VzID0gZW5kcG9pbnQucmVzcG9uc2VzICE9IG51bGwgPyBlbmRwb2ludC5yZXNwb25zZXMgOiBbXTtcbiAgICAgIGZvciAobGV0IHtzdGF0dXMsIHNjaGVtYSwgbWltZXMsIGRlc2NyaXB0aW9ufSBvZiBlbmRwb2ludFJlc3BvbnNlcykge1xuICAgICAgICBpZiAoKF8uaXNOdW1iZXIoc3RhdHVzKSB8fCBfLmlzU3RyaW5nKHN0YXR1cykpICYmICghXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc09iamVjdChzY2hlbWEpKSAmJiBfLmlzQXJyYXkobWltZXMpICYmIF8uaXNTdHJpbmcoZGVzY3JpcHRpb24pKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkpICYmIF8uaXNTdHJpbmcobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICB9IGVsc2UgaWYgKChfLmlzTnVtYmVyKHN0YXR1cykgfHwgXy5pc1N0cmluZyhzdGF0dXMpKSAmJiBfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzU3RyaW5nKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgbWltZXMgPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgKCFfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzT2JqZWN0KHNjaGVtYSkpICYmIF8uaXNBcnJheShtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFfLmlzQXJyYXkoc3RhdHVzKSAmJiBfLmlzT2JqZWN0KHN0YXR1cykpICYmIF8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNTdHJpbmcobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBtaW1lcztcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICB9IGVsc2UgaWYgKChfLmlzTnVtYmVyKHN0YXR1cykgfHwgXy5pc1N0cmluZyhzdGF0dXMpKSAmJiAoIV8uaXNBcnJheShzY2hlbWEpICYmIF8uaXNPYmplY3Qoc2NoZW1hKSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgbWltZXMgPSBbTUlNRV9KU09OXTtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgXy5pc0FycmF5KHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgbWltZXMgPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICgoXy5pc051bWJlcihzdGF0dXMpIHx8IF8uaXNTdHJpbmcoc3RhdHVzKSkgJiYgXy5pc1N0cmluZyhzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgbWltZXMgPSBbXTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCghXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc09iamVjdChzdGF0dXMpKSAmJiBfLmlzQXJyYXkoc2NoZW1hKSAmJiBfLmlzTmlsKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICBtaW1lcyA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICB9IGVsc2UgaWYgKCghXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc09iamVjdChzdGF0dXMpKSAmJiBfLmlzU3RyaW5nKHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBzdGF0dXM7XG4gICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc1N0cmluZyhzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgbWltZXMgPSBzdGF0dXM7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFfLmlzQXJyYXkoc3RhdHVzKSAmJiBfLmlzT2JqZWN0KHN0YXR1cykpICYmIF8uaXNOaWwoc2NoZW1hKSAmJiBfLmlzTmlsKG1pbWVzKSAmJiBfLmlzTmlsKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIHNjaGVtYSA9IHN0YXR1cztcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gW01JTUVfSlNPTl07XG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHN0YXR1cykgJiYgXy5pc05pbChzY2hlbWEpICYmIF8uaXNOaWwobWltZXMpICYmIF8uaXNOaWwoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgIG1pbWVzID0gc3RhdHVzO1xuICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcoc3RhdHVzKSAmJiBfLmlzTmlsKHNjaGVtYSkgJiYgXy5pc05pbChtaW1lcykgJiYgXy5pc05pbChkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHN0YXR1cztcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgbWltZXMgPSBbXTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IG51bGwgJiYgKHNjaGVtYSA9PSBudWxsKSkge1xuICAgICAgICAgIHN0YXR1cyA9IDIwNDtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IG51bGwgJiYgKHNjaGVtYSAhPSBudWxsKSkge1xuICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgoc3RhdHVzICE9IG51bGwpICYmIChzY2hlbWEgPT0gbnVsbCkpIHtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgoc3RhdHVzICE9IG51bGwpICYmIChzY2hlbWEgIT0gbnVsbCkpIHtcbiAgICAgICAgICBpZiAoIV8uaXNBcnJheShtaW1lcykpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbWltZXM7XG4gICAgICAgICAgICBtaW1lcyA9IFtNSU1FX0pTT05dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnRUeXBlIG9mIG1pbWVzKSB7XG4gICAgICAgICAgaWYgKCFvcGVyYXRpb24ucHJvZHVjZXMuaW5jbHVkZXMoY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICBvcGVyYXRpb24ucHJvZHVjZXMucHVzaChjb250ZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjaGVtYSA9IHNjaGVtYSAhPSBudWxsID8gam9pLmlzU2NoZW1hKHNjaGVtYSkgPyBzY2hlbWEgOiBzY2hlbWEuc2NoZW1hIDogbnVsbDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgaWYgKG1pbWVzLmxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2NoZW1hID0gc2NoZW1hICE9IG51bGwgPyB0aGlzLmpvaTJzY2hlbWEoc2NoZW1hLCBmYWxzZSkgOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzY2hlbWEgIT0gbnVsbCA/IHNjaGVtYS5fZGVzY3JpcHRpb24gOiB2b2lkIDApICE9IG51bGwpIHtcbiAgICAgICAgICByZXNwb25zZS5kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLnNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHJlc3BvbnNlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RhdHVzZXNbc3RhdHVzXTtcbiAgICAgICAgICByZXNwb25zZS5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UgIT0gbnVsbCA/IGBIVFRQICR7c3RhdHVzfSAke21lc3NhZ2V9LmAgOiByZXNwb25zZS5zY2hlbWEgIT0gbnVsbCA/IGBOb25kZXNjcmlwdCAke3N0YXR1c30gcmVzcG9uc2UuYCA6IGBOb25kZXNjcmlwdCAke3N0YXR1c30gcmVzcG9uc2Ugd2l0aG91dCBib2R5LmA7XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLnJlc3BvbnNlc1tzdGF0dXNdID0gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRwb2ludEVycm9ycyA9IGVuZHBvaW50LmVycm9ycyAhPSBudWxsID8gZW5kcG9pbnQuZXJyb3JzIDogW107XG4gICAgICBmb3IgKGNvbnN0IHtzdGF0dXMsIGRlc2NyaXB0aW9ufSBvZiBlbmRwb2ludEVycm9ycykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShERUZBVUxUX0VSUk9SX1NDSEVNQSwgZmFsc2UpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzcG9uc2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UuZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdGF0dXNlc1tzdGF0dXNdO1xuICAgICAgICAgIHJlc3BvbnNlLmRlc2NyaXB0aW9uID0gbWVzc2FnZSAhPSBudWxsID8gYEhUVFAgJHtzdGF0dXN9ICR7bWVzc2FnZX0uYCA6IHJlc3BvbnNlLnNjaGVtYSAhPSBudWxsID8gYE5vbmRlc2NyaXB0ICR7c3RhdHVzfSByZXNwb25zZS5gIDogYE5vbmRlc2NyaXB0ICR7c3RhdHVzfSByZXNwb25zZSB3aXRob3V0IGJvZHkuYDtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucmVzcG9uc2VzW3N0YXR1c10gPSByZXNwb25zZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRwb2ludEVycm9ycyA+IDApe1xuICAgICAgICBpZiAoIW9wZXJhdGlvbi5wcm9kdWNlcy5pbmNsdWRlcyhNSU1FX0pTT04pKSB7XG4gICAgICAgICAgb3BlcmF0aW9uLnByb2R1Y2VzLnB1c2goTUlNRV9KU09OKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFvcGVyYXRpb24ucHJvZHVjZXMuaW5jbHVkZXMoTUlNRV9KU09OKSkge1xuICAgICAgICBvcGVyYXRpb24ucHJvZHVjZXMucHVzaChNSU1FX0pTT04pO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kcG9pbnRQYXRoUGFyYW1zID0gZW5kcG9pbnQucGF0aFBhcmFtcyAhPSBudWxsID8gZW5kcG9pbnQucGF0aFBhcmFtcyA6IFtdO1xuICAgICAgZm9yIChsZXQge25hbWUsIHNjaGVtYSwgZGVzY3JpcHRpb259IG9mIGVuZHBvaW50UGF0aFBhcmFtcykge1xuICAgICAgICBpZiAoXy5pc1N0cmluZyhzY2hlbWEpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBzY2hlbWE7XG4gICAgICAgICAgc2NoZW1hID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5zb21lKG9wZXJhdGlvbi5wYXJhbWV0ZXJzLCB7bmFtZX0pKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gc2NoZW1hICE9IG51bGwgPyB0aGlzLnN3YWdnZXJpZnlQYXJhbShqb2kuaXNTY2hlbWEoc2NoZW1hKSA/IHNjaGVtYSA6IGpvaS5vYmplY3Qoc2NoZW1hKSkgOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1ldGVyLm5hbWUgPSBuYW1lO1xuICAgICAgICBwYXJhbWV0ZXIuaW4gPSAncGF0aCc7XG4gICAgICAgIHBhcmFtZXRlci5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgcGFyYW1ldGVyLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kcG9pbnRRdWVyeVBhcmFtcyA9IGVuZHBvaW50LnF1ZXJ5UGFyYW1zICE9IG51bGwgPyBlbmRwb2ludC5xdWVyeVBhcmFtcyA6IFtdO1xuICAgICAgZm9yIChsZXQge25hbWUsIHNjaGVtYSwgZGVzY3JpcHRpb259IG9mIGVuZHBvaW50UXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoc2NoZW1hKSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2NoZW1hO1xuICAgICAgICAgIHNjaGVtYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uc29tZShvcGVyYXRpb24ucGFyYW1ldGVycywge25hbWV9KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHNjaGVtYSAhPSBudWxsID8gdGhpcy5zd2FnZ2VyaWZ5UGFyYW0oam9pLmlzU2NoZW1hKHNjaGVtYSkgPyBzY2hlbWEgOiBqb2kub2JqZWN0KHNjaGVtYSkpIDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH07XG4gICAgICAgIHBhcmFtZXRlci5uYW1lID0gbmFtZTtcbiAgICAgICAgcGFyYW1ldGVyLmluID0gJ3F1ZXJ5JztcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBwYXJhbWV0ZXIuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRwb2ludEhlYWRlcnMgPSBlbmRwb2ludC5oZWFkZXJzICE9IG51bGwgPyBlbmRwb2ludC5oZWFkZXJzIDogW107XG4gICAgICBmb3IgKGxldCB7bmFtZSwgc2NoZW1hLCBkZXNjcmlwdGlvbn0gb2YgZW5kcG9pbnRIZWFkZXJzKSB7XG4gICAgICAgIGlmIChfLmlzU3RyaW5nKHNjaGVtYSkpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNjaGVtYTtcbiAgICAgICAgICBzY2hlbWEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnNvbWUob3BlcmF0aW9uLnBhcmFtZXRlcnMsIHtuYW1lfSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBzY2hlbWEgIT0gbnVsbCA/IHRoaXMuc3dhZ2dlcmlmeVBhcmFtKGpvaS5pc1NjaGVtYShzY2hlbWEpID8gc2NoZW1hIDogam9pLm9iamVjdChzY2hlbWEpKSA6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9O1xuICAgICAgICBwYXJhbWV0ZXIubmFtZSA9IG5hbWU7XG4gICAgICAgIHBhcmFtZXRlci5pbiA9ICdoZWFkZXInO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHBhcmFtZXRlci5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcGVyYXRpb247XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzd2FnZ2VyaWZ5VHlwZShzY2hlbWEpIHtcbiAgICAgIHN3aXRjaCAoc2NoZW1hLl90eXBlKSB7XG4gICAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJywgJ2JpbmFyeSddO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICByZXR1cm4gWydib29sZWFuJ107XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHJldHVybiBbJ3N0cmluZycsICdkYXRlLXRpbWUnXTtcbiAgICAgICAgY2FzZSAnZnVuYyc6XG4gICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJ107XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgaWYgKHNjaGVtYS5fdGVzdHMuc29tZShmdW5jdGlvbih0ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdC5uYW1lID09PSAnaW50ZWdlcic7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ2ludGVnZXInXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFsnbnVtYmVyJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgcmV0dXJuIFsnYXJyYXknXTtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICByZXR1cm4gWydvYmplY3QnXTtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAvLyBpZiAoc2NoZW1hLl9tZXRhLnNvbWUoZnVuY3Rpb24obWV0YSkge1xuICAgICAgICAgIC8vICAgcmV0dXJuIG1ldGEuc2VjcmV0O1xuICAgICAgICAgIC8vIH0pKSB7XG4gICAgICAgICAgLy8gICByZXR1cm4gWydzdHJpbmcnLCAncGFzc3dvcmQnXTtcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFsnc3RyaW5nJ107XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBbJ3N0cmluZyddO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2Qgc3dhZ2dlcmlmeVBhcmFtKHNjaGVtYSkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBzY2hlbWEuX2Rlc2NyaXB0aW9uO1xuICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuX3ByZXNlbmNlID09PSAncmVxdWlyZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gIT0gbnVsbCA/IGRlc2NyaXB0aW9uIDogdm9pZCAwXG4gICAgICB9O1xuICAgICAgbGV0IGl0ZW0gPSBwYXJhbTtcbiAgICAgIC8vIGlmIChzY2hlbWEuX21ldGEuc29tZShmdW5jdGlvbihtZXRhKSB7XG4gICAgICAvLyAgIHJldHVybiBtZXRhLmFsbG93TXVsdGlwbGU7XG4gICAgICAvLyB9KSkge1xuICAgICAgLy8gICBwYXJhbS50eXBlID0gJ2FycmF5JztcbiAgICAgIC8vICAgcGFyYW0uY29sbGVjdGlvbkZvcm1hdCA9ICdtdWx0aSc7XG4gICAgICAvLyAgIHBhcmFtLml0ZW1zID0ge307XG4gICAgICAvLyAgIGl0ZW0gPSBwYXJhbS5pdGVtcztcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnN3YWdnZXJpZnlUeXBlKHNjaGVtYSk7XG4gICAgICBpdGVtLnR5cGUgPSB0eXBlWzBdO1xuICAgICAgaWYgKHR5cGUubGVuZ3RoID4gMSkge1xuICAgICAgICBpdGVtLmZvcm1hdCA9IHR5cGVbMV07XG4gICAgICB9XG4gICAgICBpZiAoc2NoZW1hLl92YWxpZHMgJiYgc2NoZW1hLl92YWxpZHMuX3NldCAmJiBzY2hlbWEuX3ZhbGlkcy5fc2V0Lmxlbmd0aCkge1xuICAgICAgICBpdGVtLmVudW0gPSBzY2hlbWEuX3ZhbGlkcy5fc2V0O1xuICAgICAgfVxuICAgICAgaWYgKCdkZWZhdWx0JyBpbiBzY2hlbWEuX2ZsYWdzKSB7XG4gICAgICAgIGl0ZW0uZGVmYXVsdCA9IHNjaGVtYS5fZmxhZ3MuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN3YWdnZXJpZnlCb2R5KHNjaGVtYSwgbXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc2NoZW1hLl9kZXNjcmlwdGlvbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuX3ByZXNlbmNlID09PSAncmVxdWlyZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gIT0gbnVsbCA/IGRlc2NyaXB0aW9uIDogdm9pZCAwLFxuICAgICAgICBzY2hlbWE6IHRoaXMuam9pMnNjaGVtYShzY2hlbWEsIG11bHRpcGxlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGpvaTJzY2hlbWEoc2NoZW1hLCBtdWx0aXBsZSkge1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIHJldHVybiB0b0pzb24oam9pLmFycmF5KCkuaXRlbXMoc2NoZW1hKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9Kc29uKHNjaGVtYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=