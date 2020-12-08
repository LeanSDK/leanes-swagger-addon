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
    SWAGGER_ROUTER,
    SWAGGER_GATEWAY,
    initializeMixin,
    meta,
    method,
    Utils: {
      _
    }
  } = Module.NS;
  Module.defineMixin(__filename, BaseClass => {
    var _dec, _class, _class2, _init, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("initializeFacade", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      initializeFacade() {
        const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

        super.initializeFacade(...arguments);
        this.addCommand('SwaggerResource');
        this.addProxy(SWAGGER_ROUTER, 'SwaggerRouter');
        this.addProxy(SWAGGER_GATEWAY, 'SwaggerGateway');
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeFacade", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeFacade"), _class2.prototype)), _class2)) || _class) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9Td2FnZ2VyRmFjYWRlTWl4aW4uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU1dBR0dFUl9ST1VURVIiLCJTV0FHR0VSX0dBVEVXQVkiLCJpbml0aWFsaXplTWl4aW4iLCJtZXRhIiwibWV0aG9kIiwiVXRpbHMiLCJfIiwiTlMiLCJkZWZpbmVNaXhpbiIsIl9fZmlsZW5hbWUiLCJCYXNlQ2xhc3MiLCJNaXhpbiIsImluaXRpYWxpemVGYWNhZGUiLCJhcmd1bWVudHMiLCJhZGRDb21tYW5kIiwiYWRkUHJveHkiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsY0FESTtBQUNZQyxJQUFBQSxlQURaO0FBRUpDLElBQUFBLGVBRkk7QUFFYUMsSUFBQUEsSUFGYjtBQUVtQkMsSUFBQUEsTUFGbkI7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFISCxNQUlGUCxNQUFNLENBQUNRLEVBSlg7QUFNQVIsRUFBQUEsTUFBTSxDQUFDUyxXQUFQLENBQW1CQyxVQUFuQixFQUFnQ0MsU0FBRCxJQUFlO0FBQUE7O0FBQzVDLGdEQUFPLGlFQUNhQSxTQURiLEdBRUwseUVBRkssRUFJTCw0RUFBMEIsMkJBQTFCLEVBSkssQ0FBUCxpQkFBUVIsZUFBUix3Q0FBTyxNQUNEUyxLQURDLFNBQ2FELFNBRGIsQ0FDdUI7QUFHcEJFLE1BQUFBLGdCQUFSLEdBQWlDO0FBQUEsd0RBQUwsMkJBQUs7O0FBQy9CLGNBQU1BLGdCQUFOLENBQXVCLEdBQUlDLFNBQTNCO0FBQ0EsYUFBS0MsVUFBTCxDQUFnQixpQkFBaEI7QUFDQSxhQUFLQyxRQUFMLENBQWNmLGNBQWQsRUFBOEIsZUFBOUI7QUFDQSxhQUFLZSxRQUFMLENBQWNkLGVBQWQsRUFBK0IsZ0JBQS9CO0FBQ0Q7O0FBUjJCLEtBRDlCLFVBRWVlLE1BRmYsR0FFd0IsRUFGeEIsdUVBRUdiLElBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FJR0MsTUFKSDtBQVdELEdBWkQ7QUFhRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNXQUdHRVJfUk9VVEVSLCBTV0FHR0VSX0dBVEVXQVksXG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBtZXRob2QsXG4gICAgVXRpbHM6IHsgXyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgTW9kdWxlLmRlZmluZU1peGluKF9fZmlsZW5hbWUsIChCYXNlQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gQGluaXRpYWxpemVNaXhpblxuICAgIGNsYXNzIE1peGluIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgICAgQG1ldGhvZCBpbml0aWFsaXplRmFjYWRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplRmFjYWRlKC4uLiBhcmd1bWVudHMpXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCgnU3dhZ2dlclJlc291cmNlJylcbiAgICAgICAgdGhpcy5hZGRQcm94eShTV0FHR0VSX1JPVVRFUiwgJ1N3YWdnZXJSb3V0ZXInKVxuICAgICAgICB0aGlzLmFkZFByb3h5KFNXQUdHRVJfR0FURVdBWSwgJ1N3YWdnZXJHYXRld2F5JylcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19