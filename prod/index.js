"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.SwaggerGatewayInterface = exports.SwaggerEndpointInterface = exports.SwaggerEndpointStruct = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _SwaggerEndpoint = _interopRequireDefault(require("./endpoints/SwaggerEndpoint"));

var _SwaggerResource = _interopRequireDefault(require("./resources/SwaggerResource"));

var _SwaggerGateway = _interopRequireDefault(require("./proxies/SwaggerGateway"));

var _SwaggerRouter = _interopRequireDefault(require("./proxies/SwaggerRouter"));

var _CrudEndpointMixin = _interopRequireDefault(require("./mixins/CrudEndpointMixin"));

var _ModelingGatewayMixin = _interopRequireDefault(require("./mixins/ModelingGatewayMixin"));

var _NamespacedGatewayMixin = _interopRequireDefault(require("./mixins/NamespacedGatewayMixin"));

var _CreateEndpoint = _interopRequireDefault(require("./endpoints/CreateEndpoint"));

var _ListEndpoint = _interopRequireDefault(require("./endpoints/ListEndpoint"));

var _DetailEndpoint = _interopRequireDefault(require("./endpoints/DetailEndpoint"));

var _UpdateEndpoint = _interopRequireDefault(require("./endpoints/UpdateEndpoint"));

var _DeleteEndpoint = _interopRequireDefault(require("./endpoints/DeleteEndpoint"));

var _DestroyEndpoint = _interopRequireDefault(require("./endpoints/DestroyEndpoint"));

var _CountEndpoint = _interopRequireDefault(require("./endpoints/CountEndpoint"));

var _LengthEndpoint = _interopRequireDefault(require("./endpoints/LengthEndpoint"));

var _BulkDeleteEndpoint = _interopRequireDefault(require("./endpoints/BulkDeleteEndpoint"));

var _BulkDestroyEndpoint = _interopRequireDefault(require("./endpoints/BulkDestroyEndpoint"));

var _ModelingCreateEndpoint = _interopRequireDefault(require("./endpoints/ModelingCreateEndpoint"));

var _ModelingListEndpoint = _interopRequireDefault(require("./endpoints/ModelingListEndpoint"));

var _ModelingDetailEndpoint = _interopRequireDefault(require("./endpoints/ModelingDetailEndpoint"));

var _ModelingUpdateEndpoint = _interopRequireDefault(require("./endpoints/ModelingUpdateEndpoint"));

var _ModelingDeleteEndpoint = _interopRequireDefault(require("./endpoints/ModelingDeleteEndpoint"));

var _ModelingDestroyEndpoint = _interopRequireDefault(require("./endpoints/ModelingDestroyEndpoint"));

var _ModelingQueryEndpoint = _interopRequireDefault(require("./endpoints/ModelingQueryEndpoint"));

var _ModelingBulkDeleteEndpoint = _interopRequireDefault(require("./endpoints/ModelingBulkDeleteEndpoint"));

var _ModelingBulkDestroyEndpoint = _interopRequireDefault(require("./endpoints/ModelingBulkDestroyEndpoint"));

var _SwaggerFacadeMixin = _interopRequireDefault(require("./mixins/SwaggerFacadeMixin"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

var _SwaggerEndpointStruct = require("./interfaces/SwaggerEndpointStruct");

exports.SwaggerEndpointStruct = _SwaggerEndpointStruct.SwaggerEndpointStruct;

var _SwaggerEndpointInterface = require("./interfaces/SwaggerEndpointInterface");

exports.SwaggerEndpointInterface = _SwaggerEndpointInterface.SwaggerEndpointInterface;

var _SwaggerGatewayInterface = require("./interfaces/SwaggerGatewayInterface");

exports.SwaggerGatewayInterface = _SwaggerGatewayInterface.SwaggerGatewayInterface;

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
var _default = Module => {
  const {
    initializeMixin,
    meta,
    constant,
    method,
    extend
  } = Module.NS;
  return ['SwaggerAddon', BaseClass => {
    var _dec, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

    return _dec = extend('SwaggerFacadeMixin', 'Facade'), _dec(_class = (0, _SwaggerFacadeMixin.default)(_class = (0, _CreateEndpoint.default)(_class = (0, _ListEndpoint.default)(_class = (0, _DetailEndpoint.default)(_class = (0, _UpdateEndpoint.default)(_class = (0, _DeleteEndpoint.default)(_class = (0, _DestroyEndpoint.default)(_class = (0, _CountEndpoint.default)(_class = (0, _LengthEndpoint.default)(_class = (0, _BulkDeleteEndpoint.default)(_class = (0, _BulkDestroyEndpoint.default)(_class = (0, _ModelingCreateEndpoint.default)(_class = (0, _ModelingListEndpoint.default)(_class = (0, _ModelingDetailEndpoint.default)(_class = (0, _ModelingUpdateEndpoint.default)(_class = (0, _ModelingDeleteEndpoint.default)(_class = (0, _ModelingDestroyEndpoint.default)(_class = (0, _ModelingQueryEndpoint.default)(_class = (0, _ModelingBulkDeleteEndpoint.default)(_class = (0, _ModelingBulkDestroyEndpoint.default)(_class = (0, _ModelingGatewayMixin.default)(_class = (0, _NamespacedGatewayMixin.default)(_class = (0, _CrudEndpointMixin.default)(_class = (0, _SwaggerEndpoint.default)(_class = (0, _SwaggerResource.default)(_class = (0, _SwaggerGateway.default)(_class = (0, _SwaggerRouter.default)(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      constructor(...args) {
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "SWAGGER_ROUTER", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "SWAGGER_GATEWAY", _descriptor2, this);
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SWAGGER_ROUTER", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 'SwaggerRouter';
      }
    }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SWAGGER_GATEWAY", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 'SwaggerGateway';
      }
    })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class;
  }];
};

exports.default = _default;