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
    property,
    method,
    Utils: {
      inflect
    }
  } = Module.NS;
  Module.defineMixin(__filename, BaseClass => {
    var _dec, _class, _class2, _init, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("namespaces", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("joinedNamespacesMask", _flowRuntime.default.return(_flowRuntime.default.ref("RegExp"))), _flowRuntime.default.method("getTrimmedEndpointName", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("getEndpoint", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()))))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      namespaces() {
        const _returnType = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

        return _returnType.assert(['admining', 'globaling', 'guesting', 'modeling', 'personing', 'sharing']);
      }

      get joinedNamespacesMask() {
        const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref("RegExp"));

        return _returnType2.assert(new RegExp(`^(${this.namespaces().join('|')})_`));
      }

      getTrimmedEndpointName(asResourse, asAction) {
        let _asResourseType = _flowRuntime.default.string();

        let _asActionType = _flowRuntime.default.string();

        const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

        _flowRuntime.default.param("asResourse", _asResourseType).assert(asResourse);

        _flowRuntime.default.param("asAction", _asActionType).assert(asAction);

        const vsPath = `${inflect.underscore(asResourse)}_${asAction}_endpoint`.replace(/\//g, '_').replace(/\_+/g, '_').replace(this.joinedNamespacesMask, '');
        return _returnType3.assert(inflect.camelize(vsPath));
      }

      getEndpoint(asResourse, asAction) {
        let _asResourseType2 = _flowRuntime.default.string();

        let _asActionType2 = _flowRuntime.default.string();

        const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()));

        _flowRuntime.default.param("asResourse", _asResourseType2).assert(asResourse);

        _flowRuntime.default.param("asAction", _asActionType2).assert(asAction);

        return _returnType4.assert(this.getEndpointByName(this.getEndpointName(asResourse, asAction)) || this.getEndpointByName(this.getTrimmedEndpointName(asResourse, asAction)) || this.getStandardActionEndpoint(asResourse, asAction));
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "namespaces", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "namespaces"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "joinedNamespacesMask", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "joinedNamespacesMask"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getTrimmedEndpointName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getTrimmedEndpointName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpoint"), _class2.prototype)), _class2)) || _class) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9OYW1lc3BhY2VkR2F0ZXdheU1peGluLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIlV0aWxzIiwiaW5mbGVjdCIsIk5TIiwiZGVmaW5lTWl4aW4iLCJfX2ZpbGVuYW1lIiwiQmFzZUNsYXNzIiwiTWl4aW4iLCJuYW1lc3BhY2VzIiwiam9pbmVkTmFtZXNwYWNlc01hc2siLCJSZWdFeHAiLCJqb2luIiwiZ2V0VHJpbW1lZEVuZHBvaW50TmFtZSIsImFzUmVzb3Vyc2UiLCJhc0FjdGlvbiIsInZzUGF0aCIsInVuZGVyc2NvcmUiLCJyZXBsYWNlIiwiY2FtZWxpemUiLCJnZXRFbmRwb2ludCIsImdldEVuZHBvaW50QnlOYW1lIiwiZ2V0RW5kcG9pbnROYW1lIiwiZ2V0U3RhbmRhcmRBY3Rpb25FbmRwb2ludCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBQ2FDLElBQUFBLElBRGI7QUFDbUJDLElBQUFBLFFBRG5CO0FBQzZCQyxJQUFBQSxNQUQ3QjtBQUVKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUZILE1BR0ZOLE1BQU0sQ0FBQ08sRUFIWDtBQUtBUCxFQUFBQSxNQUFNLENBQUNRLFdBQVAsQ0FBbUJDLFVBQW5CLEVBQWdDQyxTQUFELElBQWU7QUFBQTs7QUFDNUMsZ0RBQU8saUVBQ2FBLFNBRGIsR0FFTCx5RUFGSyxFQUlMLHNFQUFvQiwyQkFBRSw2QkFBRixDQUFwQixFQUpLLEVBZUwsZ0ZBQW9DLGtDQUFwQyxFQWZLLEVBbUJMLCtGQUF5Qyw2QkFBekMsMENBQTJELDZCQUEzRCwrQkFBb0UsNkJBQXBFLEVBbkJLLEVBMkJMLG9GQUE4Qiw2QkFBOUIsMENBQWdELDZCQUFoRCwrQkFBeUQsMkJBQVEsa0NBQVIsQ0FBekQsRUEzQkssQ0FBUCxpQkFBUVQsZUFBUix3Q0FBTyxNQUNEVSxLQURDLFNBQ2FELFNBRGIsQ0FDdUI7QUFHcEJFLE1BQUFBLFVBQVIsR0FBK0I7QUFBQSx3REFBVCx5REFBUzs7QUFDN0Isa0NBQU8sQ0FDTCxVQURLLEVBRUwsV0FGSyxFQUdMLFVBSEssRUFJTCxVQUpLLEVBS0wsV0FMSyxFQU1MLFNBTkssQ0FBUDtBQVFEOztBQUVELFVBQWNDLG9CQUFkLEdBQTZDO0FBQUEseURBQVAsa0NBQU87O0FBQzNDLG1DQUFPLElBQUlDLE1BQUosQ0FBWSxLQUFJLEtBQUtGLFVBQUwsR0FBa0JHLElBQWxCLENBQXVCLEdBQXZCLENBQTRCLElBQTVDLENBQVA7QUFDRDs7QUFFT0MsTUFBQUEsc0JBQVIsQ0FBK0JDLFVBQS9CLEVBQW1EQyxRQUFuRCxFQUE2RTtBQUFBLDhCQUFwQyw2QkFBb0M7O0FBQUEsNEJBQWxCLDZCQUFrQjs7QUFBQSx5REFBUCw2QkFBTzs7QUFBQTs7QUFBQTs7QUFDM0UsY0FBTUMsTUFBTSxHQUFJLEdBQUViLE9BQU8sQ0FBQ2MsVUFBUixDQUFtQkgsVUFBbkIsQ0FBK0IsSUFBR0MsUUFBUyxXQUE5QyxDQUNaRyxPQURZLENBQ0osS0FESSxFQUNHLEdBREgsRUFFWkEsT0FGWSxDQUVKLE1BRkksRUFFSSxHQUZKLEVBR1pBLE9BSFksQ0FHSixLQUFLUixvQkFIRCxFQUd1QixFQUh2QixDQUFmO0FBSUEsbUNBQU9QLE9BQU8sQ0FBQ2dCLFFBQVIsQ0FBaUJILE1BQWpCLENBQVA7QUFDRDs7QUFFT0ksTUFBQUEsV0FBUixDQUFvQk4sVUFBcEIsRUFBd0NDLFFBQXhDLEVBQW9FO0FBQUEsK0JBQXRDLDZCQUFzQzs7QUFBQSw2QkFBcEIsNkJBQW9COztBQUFBLHlEQUFULDJCQUFNLGtDQUFOLENBQVM7O0FBQUE7O0FBQUE7O0FBQ2xFLG1DQUFPLEtBQUtNLGlCQUFMLENBQ0wsS0FBS0MsZUFBTCxDQUFxQlIsVUFBckIsRUFBaUNDLFFBQWpDLENBREssS0FHUCxLQUFLTSxpQkFBTCxDQUNFLEtBQUtSLHNCQUFMLENBQTRCQyxVQUE1QixFQUF3Q0MsUUFBeEMsQ0FERixDQUhPLElBTVAsS0FBS1EseUJBQUwsQ0FBK0JULFVBQS9CLEVBQTJDQyxRQUEzQyxDQU5BO0FBT0Q7O0FBbEMyQixLQUQ5QixVQUVlUyxNQUZmLEdBRXdCLEVBRnhCLHVFQUVHekIsSUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRGQUlHRSxNQUpILDZLQWVHRCxRQWZILHlMQW1CR0MsTUFuQkgsZ0xBMkJHQSxNQTNCSDtBQXFDRCxHQXRDRDtBQXVDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxpemVNaXhpbiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCxcbiAgICBVdGlsczogeyBpbmZsZWN0IH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBNb2R1bGUuZGVmaW5lTWl4aW4oX19maWxlbmFtZSwgKEJhc2VDbGFzcykgPT4ge1xuICAgIHJldHVybiBAaW5pdGlhbGl6ZU1peGluXG4gICAgY2xhc3MgTWl4aW4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgICBAbWV0aG9kIG5hbWVzcGFjZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICdhZG1pbmluZycsXG4gICAgICAgICAgJ2dsb2JhbGluZycsXG4gICAgICAgICAgJ2d1ZXN0aW5nJyxcbiAgICAgICAgICAnbW9kZWxpbmcnLFxuICAgICAgICAgICdwZXJzb25pbmcnLFxuICAgICAgICAgICdzaGFyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfVxuXG4gICAgICBAcHJvcGVydHkgZ2V0IGpvaW5lZE5hbWVzcGFjZXNNYXNrKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeKCR7dGhpcy5uYW1lc3BhY2VzKCkuam9pbignfCcpfSlfYCk7XG4gICAgICB9XG5cbiAgICAgIEBtZXRob2QgZ2V0VHJpbW1lZEVuZHBvaW50TmFtZShhc1Jlc291cnNlOiBzdHJpbmcsIGFzQWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2c1BhdGggPSBgJHtpbmZsZWN0LnVuZGVyc2NvcmUoYXNSZXNvdXJzZSl9XyR7YXNBY3Rpb259X2VuZHBvaW50YFxuICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXF8rL2csICdfJylcbiAgICAgICAgICAucmVwbGFjZSh0aGlzLmpvaW5lZE5hbWVzcGFjZXNNYXNrLCAnJyk7XG4gICAgICAgIHJldHVybiBpbmZsZWN0LmNhbWVsaXplKHZzUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIEBtZXRob2QgZ2V0RW5kcG9pbnQoYXNSZXNvdXJzZTogc3RyaW5nLCBhc0FjdGlvbjogc3RyaW5nKTogQ2xhc3M8Kj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludEJ5TmFtZShcbiAgICAgICAgICB0aGlzLmdldEVuZHBvaW50TmFtZShhc1Jlc291cnNlLCBhc0FjdGlvbilcbiAgICAgICAgKSB8fFxuICAgICAgICB0aGlzLmdldEVuZHBvaW50QnlOYW1lKFxuICAgICAgICAgIHRoaXMuZ2V0VHJpbW1lZEVuZHBvaW50TmFtZShhc1Jlc291cnNlLCBhc0FjdGlvbilcbiAgICAgICAgKSB8fFxuICAgICAgICB0aGlzLmdldFN0YW5kYXJkQWN0aW9uRW5kcG9pbnQoYXNSZXNvdXJzZSwgYXNBY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=