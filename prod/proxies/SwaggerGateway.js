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
  var _dec, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    Proxy,
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
  let SwaggerGateway = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SwaggerGateway extends Proxy {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_schemas", _descriptor, this);
    }

    get _endpointsPath() {
      return `${this.ApplicationModule.NS.ROOT}/endpoints`;
    }

    getEndpointByName(asName) {
      try {
        return this.ApplicationModule.NS[asName];
      } catch (e) {}
    }

    getEndpointName(asResourse, asAction) {
      const vsPath = `${asResourse}_${asAction}_endpoint`.replace(/\//g, '_').replace(/\_+/g, '_');
      return inflect.camelize(vsPath);
    }

    getStandardActionEndpoint(asResourse, asAction) {
      const vsEndpointName = `${inflect.camelize(asAction)}Endpoint`;
      return this.getEndpointByName(vsEndpointName) || this.ApplicationModule.NS.SwaggerEndpoint;
    }

    getEndpoint(asResourse, asAction) {
      const vsEndpointName = this.getEndpointName(asResourse, asAction);
      return this.getEndpointByName(vsEndpointName) || this.getStandardActionEndpoint(asResourse, asAction);
    }

    swaggerDefinitionFor(asResourse, asAction, opts) {
      const vcEndpoint = this.getEndpoint(asResourse, asAction);
      const options = assign({}, opts, {
        gateway: this
      });
      return vcEndpoint.new(options);
    }

    getSchema(asRecordName) {
      if (this._schemas[asRecordName] == null) {
        this._schemas[asRecordName] = this.ApplicationModule.NS[asRecordName].schema;
      }

      return this._schemas[asRecordName];
    }

  }, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_schemas", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_endpointsPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_endpointsPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpointByName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointByName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpointName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpoint"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerDefinitionFor", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerDefinitionFor"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getSchema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getSchema"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;