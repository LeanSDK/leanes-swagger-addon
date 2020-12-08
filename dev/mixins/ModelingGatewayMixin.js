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
    var _dec, _class, _class2, _init, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("getStandardActionEndpoint", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()))))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      getStandardActionEndpoint(asResourse, asAction) {
        let _asResourseType = _flowRuntime.default.string();

        let _asActionType = _flowRuntime.default.string();

        const _returnType = _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()));

        _flowRuntime.default.param("asResourse", _asResourseType).assert(asResourse);

        _flowRuntime.default.param("asAction", _asActionType).assert(asAction);

        const vsEndpointName = _.startsWith(asResourse.toLowerCase(), 'modeling') ? `Modeling${inflect.camelize(asAction)}Endpoint` : `${inflect.camelize(asAction)}Endpoint`;
        return _returnType.assert(this.ApplicationModule.NS[vsEndpointName] || this.ApplicationModule.NS.Endpoint);
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype)), _class2)) || _class) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9Nb2RlbGluZ0dhdGV3YXlNaXhpbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJpbml0aWFsaXplTWl4aW4iLCJtZXRhIiwibWV0aG9kIiwiVXRpbHMiLCJfIiwiaW5mbGVjdCIsIk5TIiwiZGVmaW5lTWl4aW4iLCJfX2ZpbGVuYW1lIiwiQmFzZUNsYXNzIiwiTWl4aW4iLCJnZXRTdGFuZGFyZEFjdGlvbkVuZHBvaW50IiwiYXNSZXNvdXJzZSIsImFzQWN0aW9uIiwidnNFbmRwb2ludE5hbWUiLCJzdGFydHNXaXRoIiwidG9Mb3dlckNhc2UiLCJjYW1lbGl6ZSIsIkFwcGxpY2F0aW9uTW9kdWxlIiwiRW5kcG9pbnQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUNhQyxJQUFBQSxJQURiO0FBQ21CQyxJQUFBQSxNQURuQjtBQUVKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsQ0FBRjtBQUFLQyxNQUFBQTtBQUFMO0FBRkgsTUFHRk4sTUFBTSxDQUFDTyxFQUhYO0FBS0FQLEVBQUFBLE1BQU0sQ0FBQ1EsV0FBUCxDQUFtQkMsVUFBbkIsRUFBZ0NDLFNBQUQsSUFBZTtBQUFBOztBQUM1QyxnREFBTyxpRUFDYUEsU0FEYixHQUVMLHlFQUZLLEVBSUwsa0dBQTRDLDZCQUE1QywwQ0FBOEQsNkJBQTlELCtCQUF1RSwyQkFBUSxrQ0FBUixDQUF2RSxFQUpLLENBQVAsaUJBQVFULGVBQVIsd0NBQU8sTUFDRFUsS0FEQyxTQUNhRCxTQURiLENBQ3VCO0FBR3BCRSxNQUFBQSx5QkFBUixDQUFrQ0MsVUFBbEMsRUFBc0RDLFFBQXRELEVBQWtGO0FBQUEsOEJBQXRDLDZCQUFzQzs7QUFBQSw0QkFBcEIsNkJBQW9COztBQUFBLHdEQUFULDJCQUFNLGtDQUFOLENBQVM7O0FBQUE7O0FBQUE7O0FBQ2hGLGNBQU1DLGNBQWMsR0FBR1YsQ0FBQyxDQUFDVyxVQUFGLENBQWFILFVBQVUsQ0FBQ0ksV0FBWCxFQUFiLEVBQXVDLFVBQXZDLElBQ2xCLFdBQVVYLE9BQU8sQ0FBQ1ksUUFBUixDQUFpQkosUUFBakIsQ0FBMkIsVUFEbkIsR0FFbEIsR0FBRVIsT0FBTyxDQUFDWSxRQUFSLENBQWlCSixRQUFqQixDQUEyQixVQUZsQztBQUdBLGtDQUFPLEtBQUtLLGlCQUFMLENBQXVCWixFQUF2QixDQUEwQlEsY0FBMUIsS0FBNkMsS0FBS0ksaUJBQUwsQ0FBdUJaLEVBQXZCLENBQTBCYSxRQUE5RTtBQUNEOztBQVIyQixLQUQ5QixVQUVlQyxNQUZmLEdBRXdCLEVBRnhCLHVFQUVHbkIsSUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJHQUlHQyxNQUpIO0FBV0QsR0FaRDtBQWFELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBtZXRob2QsXG4gICAgVXRpbHM6IHsgXywgaW5mbGVjdCB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgTW9kdWxlLmRlZmluZU1peGluKF9fZmlsZW5hbWUsIChCYXNlQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gQGluaXRpYWxpemVNaXhpblxuICAgIGNsYXNzIE1peGluIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgICAgQG1ldGhvZCBnZXRTdGFuZGFyZEFjdGlvbkVuZHBvaW50KGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZyk6IENsYXNzPCo+IHtcbiAgICAgICAgY29uc3QgdnNFbmRwb2ludE5hbWUgPSBfLnN0YXJ0c1dpdGgoYXNSZXNvdXJzZS50b0xvd2VyQ2FzZSgpLCAnbW9kZWxpbmcnKVxuICAgICAgICAgID8gYE1vZGVsaW5nJHtpbmZsZWN0LmNhbWVsaXplKGFzQWN0aW9uKX1FbmRwb2ludGBcbiAgICAgICAgICA6IGAke2luZmxlY3QuY2FtZWxpemUoYXNBY3Rpb24pfUVuZHBvaW50YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwbGljYXRpb25Nb2R1bGUuTlNbdnNFbmRwb2ludE5hbWVdIHx8IHRoaXMuQXBwbGljYXRpb25Nb2R1bGUuTlMuRW5kcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==