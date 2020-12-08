"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
var _default = Module => {
  const {
    initializeMixin,
    meta,
    method,
    Utils: {
      _,
      inflect
    }
  } = Module.NS;
  Module.defineMixin(__filename, BaseClass => {
    var _class, _class2, _init, _class3, _temp;

    return initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      getStandardActionEndpoint(asResourse, asAction) {
        const vsEndpointName = _.startsWith(asResourse.toLowerCase(), 'modeling') ? `Modeling${inflect.camelize(asAction)}Endpoint` : `${inflect.camelize(asAction)}Endpoint`;
        return this.ApplicationModule.NS[vsEndpointName] || this.ApplicationModule.NS.Endpoint;
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype)), _class2)) || _class;
  });
};

exports.default = _default;