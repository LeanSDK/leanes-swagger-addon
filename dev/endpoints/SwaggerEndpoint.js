"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _JoiT2 = require("../types/JoiT");

var _SwaggerGatewayInterface2 = require("../interfaces/SwaggerGatewayInterface");

var _SwaggerEndpointInterface2 = require("../interfaces/SwaggerEndpointInterface");

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
const SwaggerEndpointInterface = _flowRuntime.default.tdz(() => _SwaggerEndpointInterface2.SwaggerEndpointInterface);

const SwaggerGatewayInterface = _flowRuntime.default.tdz(() => _SwaggerGatewayInterface2.SwaggerGatewayInterface);

const JoiT = _flowRuntime.default.tdz(() => _JoiT2.JoiT);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _init, _init2, _init3, _init4, _init5, _init6, _init7, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;

  const {
    CoreObject,
    assert,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    Utils: {
      inflect,
      assign
    }
  } = Module.NS;
  let SwaggerEndpoint = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SwaggerEndpoint", _flowRuntime.default.extends(CoreObject), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("keyNames", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _flowRuntime.default.staticProperty("itemEntityNames", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _flowRuntime.default.staticProperty("listEntityNames", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _flowRuntime.default.staticProperty("itemSchemas", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _flowRuntime.default.staticProperty("listSchemas", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _flowRuntime.default.property("gateway", _flowRuntime.default.ref(SwaggerGatewayInterface)), _flowRuntime.default.property("tags", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.property("headers", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("pathParams", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("queryParams", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("payload", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.property("responses", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("errors", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("title", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("synopsis", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("isDeprecated", _flowRuntime.default.boolean()), _flowRuntime.default.method("tag", _flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("header", _flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("pathParam", _flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("queryParam", _flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("body", _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("mimes", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()))), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("response", _flowRuntime.default.param("status", _flowRuntime.default.union(_flowRuntime.default.number(), _flowRuntime.default.string(), _flowRuntime.default.ref(JoiT), _flowRuntime.default.null())), _flowRuntime.default.param("schema", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.ref(JoiT), _flowRuntime.default.string(), _flowRuntime.default.array()))), _flowRuntime.default.param("mimes", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()))), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("error", _flowRuntime.default.param("status", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("summary", _flowRuntime.default.param("asSummary", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("description", _flowRuntime.default.param("asDescription", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("deprecated", _flowRuntime.default.param("abDeprecated", _flowRuntime.default.boolean()), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.staticMethod("restoreObject"), _flowRuntime.default.staticMethod("replicateObject"), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _dec4 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _dec5 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.string())))), _dec6 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _dec7 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _dec8 = _flowRuntime.default.decorate(_flowRuntime.default.ref(SwaggerGatewayInterface)), _dec9 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.string()))), _dec10 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _dec11 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _dec12 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _dec13 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _dec14 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _dec15 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _dec16 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec17 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec18 = _flowRuntime.default.decorate(_flowRuntime.default.boolean()), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SwaggerEndpoint extends CoreObject {
    tag(asName) {
      let _asNameType = _flowRuntime.default.string();

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("asName", _asNameType).assert(asName);

      if (this.tags == null) {
        this.tags = [];
      }

      this.tags.push(asName);
      return _returnType.assert(this);
    }

    header(name, schema, description) {
      let _nameType = _flowRuntime.default.string();

      let _schemaType = _flowRuntime.default.ref(JoiT);

      let _descriptionType = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("name", _nameType).assert(name);

      _flowRuntime.default.param("schema", _schemaType).assert(schema);

      _flowRuntime.default.param("description", _descriptionType).assert(description);

      if (this.headers == null) {
        this.headers = [];
      }

      this.headers.push({
        name,
        schema,
        description
      });
      return _returnType2.assert(this);
    }

    pathParam(name, schema, description) {
      let _nameType2 = _flowRuntime.default.string();

      let _schemaType2 = _flowRuntime.default.ref(JoiT);

      let _descriptionType2 = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("name", _nameType2).assert(name);

      _flowRuntime.default.param("schema", _schemaType2).assert(schema);

      _flowRuntime.default.param("description", _descriptionType2).assert(description);

      if (this.pathParams == null) {
        this.pathParams = [];
      }

      this.pathParams.push({
        name,
        schema,
        description
      });
      return _returnType3.assert(this);
    }

    queryParam(name, schema, description) {
      let _nameType3 = _flowRuntime.default.string();

      let _schemaType3 = _flowRuntime.default.ref(JoiT);

      let _descriptionType3 = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("name", _nameType3).assert(name);

      _flowRuntime.default.param("schema", _schemaType3).assert(schema);

      _flowRuntime.default.param("description", _descriptionType3).assert(description);

      if (this.queryParams == null) {
        this.queryParams = [];
      }

      this.queryParams.push({
        name,
        schema,
        description
      });
      return _returnType4.assert(this);
    }

    body(schema, mimes, description) {
      let _schemaType4 = _flowRuntime.default.ref(JoiT);

      let _mimesType = _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()));

      let _descriptionType4 = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("schema", _schemaType4).assert(schema);

      _flowRuntime.default.param("mimes", _mimesType).assert(mimes);

      _flowRuntime.default.param("description", _descriptionType4).assert(description);

      this.payload = {
        schema,
        mimes,
        description
      };
      return _returnType5.assert(this);
    }

    response(status, schema, mimes, description) {
      let _statusType = _flowRuntime.default.union(_flowRuntime.default.number(), _flowRuntime.default.string(), _flowRuntime.default.ref(JoiT), _flowRuntime.default.null());

      let _schemaType5 = _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.ref(JoiT), _flowRuntime.default.string(), _flowRuntime.default.array()));

      let _mimesType2 = _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()));

      let _descriptionType5 = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType6 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("status", _statusType).assert(status);

      _flowRuntime.default.param("schema", _schemaType5).assert(schema);

      _flowRuntime.default.param("mimes", _mimesType2).assert(mimes);

      _flowRuntime.default.param("description", _descriptionType5).assert(description);

      if (this.responses == null) {
        this.responses = [];
      }

      this.responses.push({
        status,
        schema,
        mimes,
        description
      });
      return _returnType6.assert(this);
    }

    error(status, description) {
      let _statusType2 = _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number());

      let _descriptionType6 = _flowRuntime.default.nullable(_flowRuntime.default.string());

      const _returnType7 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("status", _statusType2).assert(status);

      _flowRuntime.default.param("description", _descriptionType6).assert(description);

      if (this.errors == null) {
        this.errors = [];
      }

      this.errors.push({
        status,
        description
      });
      return _returnType7.assert(this);
    }

    summary(asSummary) {
      let _asSummaryType = _flowRuntime.default.string();

      const _returnType8 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("asSummary", _asSummaryType).assert(asSummary);

      this.title = asSummary;
      return _returnType8.assert(this);
    }

    description(asDescription) {
      let _asDescriptionType = _flowRuntime.default.string();

      const _returnType9 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("asDescription", _asDescriptionType).assert(asDescription);

      this.synopsis = asDescription;
      return _returnType9.assert(this);
    }

    deprecated(abDeprecated) {
      let _abDeprecatedType = _flowRuntime.default.boolean();

      const _returnType10 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("abDeprecated", _abDeprecatedType).assert(abDeprecated);

      this.isDeprecated = abDeprecated;
      return _returnType10.assert(this);
    }

    static async restoreObject() {
      return assert.fail(`restoreObject method not supported for ${this.name}`);
    }

    static async replicateObject() {
      return assert.fail(`replicateObject method not supported for ${this.name}`);
    }

    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "gateway", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "tags", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "headers", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "pathParams", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "queryParams", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "payload", _descriptor6, this);
      (0, _initializerDefineProperty2.default)(this, "responses", _descriptor7, this);
      (0, _initializerDefineProperty2.default)(this, "errors", _descriptor8, this);
      (0, _initializerDefineProperty2.default)(this, "title", _descriptor9, this);
      (0, _initializerDefineProperty2.default)(this, "synopsis", _descriptor10, this);
      (0, _initializerDefineProperty2.default)(this, "isDeprecated", _descriptor11, this);
      const [options] = args;
      ({
        gateway: this.gateway
      } = options);

      _flowRuntime.default.ref(SwaggerEndpointInterface).assert(this);
    }

  }, _class3.__filename = __filename, _class3.object = {}, _class3.keyNames = {}, _class3.itemEntityNames = {}, _class3.listEntityNames = {}, _class3.itemSchemas = {}, _class3.listSchemas = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "keyNames", [_dec3, property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "keyNames"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init3;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "itemEntityNames", [_dec4, property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "itemEntityNames"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init4;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "listEntityNames", [_dec5, property], (_init5 = Object.getOwnPropertyDescriptor(_class2, "listEntityNames"), _init5 = _init5 ? _init5.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init5;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "itemSchemas", [_dec6, property], (_init6 = Object.getOwnPropertyDescriptor(_class2, "itemSchemas"), _init6 = _init6 ? _init6.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init6;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "listSchemas", [_dec7, property], (_init7 = Object.getOwnPropertyDescriptor(_class2, "listSchemas"), _init7 = _init7 ? _init7.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init7;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "gateway", [_dec8, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "tags", [_dec9, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "headers", [_dec10, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "pathParams", [_dec11, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "queryParams", [_dec12, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "payload", [_dec13, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "responses", [_dec14, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "errors", [_dec15, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "title", [_dec16, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "synopsis", [_dec17, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isDeprecated", [_dec18, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "tag", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "tag"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "header", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "header"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "pathParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "pathParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "queryParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "queryParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "response", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "response"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "error", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "error"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "summary", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "summary"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "description", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "description"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "deprecated", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "deprecated"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2, "restoreObject", [method], Object.getOwnPropertyDescriptor(_class2, "restoreObject"), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "replicateObject", [method], Object.getOwnPropertyDescriptor(_class2, "replicateObject"), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Td2FnZ2VyRW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQ29yZU9iamVjdCIsImFzc2VydCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJtZXRob2QiLCJuYW1lQnkiLCJVdGlscyIsImluZmxlY3QiLCJhc3NpZ24iLCJOUyIsIlN3YWdnZXJFbmRwb2ludCIsInRhZyIsImFzTmFtZSIsInRhZ3MiLCJwdXNoIiwiaGVhZGVyIiwibmFtZSIsInNjaGVtYSIsImRlc2NyaXB0aW9uIiwiaGVhZGVycyIsInBhdGhQYXJhbSIsInBhdGhQYXJhbXMiLCJxdWVyeVBhcmFtIiwicXVlcnlQYXJhbXMiLCJib2R5IiwibWltZXMiLCJwYXlsb2FkIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXNwb25zZXMiLCJlcnJvciIsImVycm9ycyIsInN1bW1hcnkiLCJhc1N1bW1hcnkiLCJ0aXRsZSIsImFzRGVzY3JpcHRpb24iLCJzeW5vcHNpcyIsImRlcHJlY2F0ZWQiLCJhYkRlcHJlY2F0ZWQiLCJpc0RlcHJlY2F0ZWQiLCJyZXN0b3JlT2JqZWN0IiwiZmFpbCIsInJlcGxpY2F0ZU9iamVjdCIsImNvbnN0cnVjdG9yIiwiYXJncyIsIm9wdGlvbnMiLCJnYXRld2F5IiwiX19maWxlbmFtZSIsIm9iamVjdCIsImtleU5hbWVzIiwiaXRlbUVudGl0eU5hbWVzIiwibGlzdEVudGl0eU5hbWVzIiwiaXRlbVNjaGVtYXMiLCJsaXN0U2NoZW1hcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOztBQUNBOztBQUNBOzs7O0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFNZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFVBREk7QUFFSkMsSUFBQUEsTUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FD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ZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IEpvaVQgfSBmcm9tICcuLi90eXBlcy9Kb2lUJztcbmltcG9ydCB0eXBlIHsgU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1N3YWdnZXJHYXRld2F5SW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Td2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBDb3JlT2JqZWN0LFxuICAgIGFzc2VydCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeSxcbiAgICBVdGlsczogeyBpbmZsZWN0LCBhc3NpZ24gfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTd2FnZ2VyRW5kcG9pbnQgZXh0ZW5kcyBDb3JlT2JqZWN0IGltcGxlbWVudHMgU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IHN0YXRpYyBrZXlOYW1lczoge1trZXk6IHN0cmluZ106ID9zdHJpbmd9ID0ge307XG5cbiAgICBAcHJvcGVydHkgc3RhdGljIGl0ZW1FbnRpdHlOYW1lczoge1trZXk6IHN0cmluZ106ID9zdHJpbmd9ID0ge307XG5cbiAgICBAcHJvcGVydHkgc3RhdGljIGxpc3RFbnRpdHlOYW1lczoge1trZXk6IHN0cmluZ106ID9zdHJpbmd9ID0ge307XG5cbiAgICBAcHJvcGVydHkgc3RhdGljIGl0ZW1TY2hlbWFzOiB7W2tleTogc3RyaW5nXTogP0pvaVR9ID0ge307XG5cbiAgICBAcHJvcGVydHkgc3RhdGljIGxpc3RTY2hlbWFzOiB7W2tleTogc3RyaW5nXTogP0pvaVR9ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2F0ZXdheTogU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2UgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5IHRhZ3M6ID9BcnJheTxzdHJpbmc+ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSBoZWFkZXJzOiA/QXJyYXk8b2JqZWN0PiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkgcGF0aFBhcmFtczogP0FycmF5PG9iamVjdD4gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5IHF1ZXJ5UGFyYW1zOiA/QXJyYXk8b2JqZWN0PiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkgcGF5bG9hZDogP29iamVjdCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkgcmVzcG9uc2VzOiA/QXJyYXk8b2JqZWN0PiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkgZXJyb3JzOiA/QXJyYXk8b2JqZWN0PiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkgdGl0bGU6ID9zdHJpbmcgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5IHN5bm9wc2lzOiA/c3RyaW5nID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSBpc0RlcHJlY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBtZXRob2QgdGFnKGFzTmFtZTogc3RyaW5nKTogU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlIHtcbiAgICAgIGlmICh0aGlzLnRhZ3MgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFncy5wdXNoKGFzTmFtZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGhlYWRlcihcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIHNjaGVtYTogSm9pVCxcbiAgICAgIGRlc2NyaXB0aW9uOiA/c3RyaW5nXG4gICAgKTogU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlIHtcbiAgICAgIGlmICh0aGlzLmhlYWRlcnMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGVhZGVycy5wdXNoKHsgbmFtZSwgc2NoZW1hLCBkZXNjcmlwdGlvbiB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIEBtZXRob2QgcGF0aFBhcmFtKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgc2NoZW1hOiBKb2lULFxuICAgICAgZGVzY3JpcHRpb246ID9zdHJpbmdcbiAgICApOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgaWYgKHRoaXMucGF0aFBhcmFtcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucGF0aFBhcmFtcyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXRoUGFyYW1zLnB1c2goeyBuYW1lLCBzY2hlbWEsIGRlc2NyaXB0aW9uIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBxdWVyeVBhcmFtKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgc2NoZW1hOiBKb2lULFxuICAgICAgZGVzY3JpcHRpb246ID9zdHJpbmdcbiAgICApOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLnF1ZXJ5UGFyYW1zLnB1c2goeyBuYW1lLCBzY2hlbWEsIGRlc2NyaXB0aW9uIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBib2R5KFxuICAgICAgc2NoZW1hOiBKb2lULFxuICAgICAgbWltZXM6ID8oQXJyYXkgfCBzdHJpbmcpLFxuICAgICAgZGVzY3JpcHRpb246ID9zdHJpbmdcbiAgICApOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgdGhpcy5wYXlsb2FkID0geyBzY2hlbWEsIG1pbWVzLCBkZXNjcmlwdGlvbiB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCByZXNwb25zZShcbiAgICAgIHN0YXR1czogKG51bWJlciB8IHN0cmluZyB8IEpvaVQgfCBudWxsKSxcbiAgICAgIHNjaGVtYTogPyhKb2lUIHwgc3RyaW5nIHwgQXJyYXkpLFxuICAgICAgbWltZXM6ID8oQXJyYXkgfCBzdHJpbmcpLFxuICAgICAgZGVzY3JpcHRpb246ID9zdHJpbmdcbiAgICApOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgaWYgKHRoaXMucmVzcG9uc2VzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzcG9uc2VzLnB1c2goeyBzdGF0dXMsIHNjaGVtYSwgbWltZXMsIGRlc2NyaXB0aW9uIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBlcnJvcihcbiAgICAgIHN0YXR1czogc3RyaW5nIHwgbnVtYmVyLFxuICAgICAgZGVzY3JpcHRpb246ID9zdHJpbmdcbiAgICApOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgaWYgKHRoaXMuZXJyb3JzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goeyBzdGF0dXMsIGRlc2NyaXB0aW9uIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzdW1tYXJ5KGFzU3VtbWFyeTogc3RyaW5nKTogU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlIHtcbiAgICAgIHRoaXMudGl0bGUgPSBhc1N1bW1hcnk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGRlc2NyaXB0aW9uKGFzRGVzY3JpcHRpb246IHN0cmluZyk6IFN3YWdnZXJFbmRwb2ludEludGVyZmFjZSB7XG4gICAgICB0aGlzLnN5bm9wc2lzID0gYXNEZXNjcmlwdGlvbjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIEBtZXRob2QgZGVwcmVjYXRlZChhYkRlcHJlY2F0ZWQ6IGJvb2xlYW4pOiBTd2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2Uge1xuICAgICAgdGhpcy5pc0RlcHJlY2F0ZWQgPSBhYkRlcHJlY2F0ZWQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN0YXRpYyBhc3luYyByZXN0b3JlT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIGFzc2VydC5mYWlsKGByZXN0b3JlT2JqZWN0IG1ldGhvZCBub3Qgc3VwcG9ydGVkIGZvciAke3RoaXMubmFtZX1gKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN0YXRpYyBhc3luYyByZXBsaWNhdGVPYmplY3QoKSB7XG4gICAgICByZXR1cm4gYXNzZXJ0LmZhaWwoYHJlcGxpY2F0ZU9iamVjdCBtZXRob2Qgbm90IHN1cHBvcnRlZCBmb3IgJHt0aGlzLm5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgc3VwZXIoLi4uIGFyZ3MpO1xuICAgICAgY29uc3QgWyBvcHRpb25zIF0gPSBhcmdzO1xuICAgICAgKHsgZ2F0ZXdheTogdGhpcy5nYXRld2F5IH0gPSBvcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==