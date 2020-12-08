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
  var _dec, _class, _class2, _init, _init2, _init3, _init4, _init5, _init6, _init7, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;

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
  let SwaggerEndpoint = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SwaggerEndpoint extends CoreObject {
    tag(asName) {
      if (this.tags == null) {
        this.tags = [];
      }

      this.tags.push(asName);
      return this;
    }

    header(name, schema, description) {
      if (this.headers == null) {
        this.headers = [];
      }

      this.headers.push({
        name,
        schema,
        description
      });
      return this;
    }

    pathParam(name, schema, description) {
      if (this.pathParams == null) {
        this.pathParams = [];
      }

      this.pathParams.push({
        name,
        schema,
        description
      });
      return this;
    }

    queryParam(name, schema, description) {
      if (this.queryParams == null) {
        this.queryParams = [];
      }

      this.queryParams.push({
        name,
        schema,
        description
      });
      return this;
    }

    body(schema, mimes, description) {
      this.payload = {
        schema,
        mimes,
        description
      };
      return this;
    }

    response(status, schema, mimes, description) {
      if (this.responses == null) {
        this.responses = [];
      }

      this.responses.push({
        status,
        schema,
        mimes,
        description
      });
      return this;
    }

    error(status, description) {
      if (this.errors == null) {
        this.errors = [];
      }

      this.errors.push({
        status,
        description
      });
      return this;
    }

    summary(asSummary) {
      this.title = asSummary;
      return this;
    }

    description(asDescription) {
      this.synopsis = asDescription;
      return this;
    }

    deprecated(abDeprecated) {
      this.isDeprecated = abDeprecated;
      return this;
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "keyNames", [property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "keyNames"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init3;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "itemEntityNames", [property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "itemEntityNames"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init4;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "listEntityNames", [property], (_init5 = Object.getOwnPropertyDescriptor(_class2, "listEntityNames"), _init5 = _init5 ? _init5.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init5;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "itemSchemas", [property], (_init6 = Object.getOwnPropertyDescriptor(_class2, "itemSchemas"), _init6 = _init6 ? _init6.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init6;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "listSchemas", [property], (_init7 = Object.getOwnPropertyDescriptor(_class2, "listSchemas"), _init7 = _init7 ? _init7.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init7;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "gateway", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "tags", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "headers", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "pathParams", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "queryParams", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "payload", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "responses", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "errors", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "title", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "synopsis", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isDeprecated", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "tag", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "tag"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "header", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "header"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "pathParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "pathParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "queryParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "queryParam"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "response", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "response"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "error", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "error"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "summary", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "summary"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "description", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "description"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "deprecated", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "deprecated"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2, "restoreObject", [method], Object.getOwnPropertyDescriptor(_class2, "restoreObject"), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "replicateObject", [method], Object.getOwnPropertyDescriptor(_class2, "replicateObject"), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;