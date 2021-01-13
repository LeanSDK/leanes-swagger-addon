"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Router,
    initialize,
    partOf,
    nameBy,
    meta,
    method
  } = Module.NS;
  let SwaggerRouter = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SwaggerRouter extends Router {
    map() {
      this.namespace('swagger', {
        module: '',
        prefix: "swagger"
      }, function () {
        this.get('/', {
          to: 'swagger#index',
          recordName: null
        });
        this.get('/swagger.json', {
          to: 'swagger#spec',
          recordName: null
        });
        this.get('/*', {
          to: 'swagger#static',
          recordName: null
        });
      });
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "map", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "map"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvU3dhZ2dlclJvdXRlci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSb3V0ZXIiLCJpbml0aWFsaXplIiwicGFydE9mIiwibmFtZUJ5IiwibWV0YSIsIm1ldGhvZCIsIk5TIiwiU3dhZ2dlclJvdXRlciIsIm1hcCIsIm5hbWVzcGFjZSIsIm1vZHVsZSIsInByZWZpeCIsImdldCIsInRvIiwicmVjb3JkTmFtZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE1BREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxNQUZoQjtBQUV3QkMsSUFBQUEsSUFGeEI7QUFFOEJDLElBQUFBO0FBRjlCLE1BR0ZOLE1BQU0sQ0FBQ08sRUFIWDtBQUR5QixNQVFuQkMsYUFSbUIsV0FPeEJMLE1BQU0sQ0FBQ0gsTUFBRCxDQVBrQixFQU14QkUsVUFOd0Isc0RBTXpCLE1BRU1NLGFBRk4sU0FFNEJQLE1BRjVCLENBRW1DO0FBR3pCUSxJQUFBQSxHQUFSLEdBQWM7QUFDWixXQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUFDQyxRQUFBQSxNQUFNLEVBQUUsRUFBVDtBQUFhQyxRQUFBQSxNQUFNLEVBQUU7QUFBckIsT0FBMUIsRUFBMkQsWUFBWTtBQUNyRSxhQUFLQyxHQUFMLENBQVMsR0FBVCxFQUFjO0FBQUNDLFVBQUFBLEVBQUUsRUFBRSxlQUFMO0FBQXNCQyxVQUFBQSxVQUFVLEVBQUU7QUFBbEMsU0FBZDtBQUNBLGFBQUtGLEdBQUwsQ0FBUyxlQUFULEVBQTBCO0FBQUNDLFVBQUFBLEVBQUUsRUFBRSxjQUFMO0FBQXFCQyxVQUFBQSxVQUFVLEVBQUU7QUFBakMsU0FBMUI7QUFDQSxhQUFLRixHQUFMLENBQVMsSUFBVCxFQUFlO0FBQUNDLFVBQUFBLEVBQUUsRUFBRSxnQkFBTDtBQUF1QkMsVUFBQUEsVUFBVSxFQUFFO0FBQW5DLFNBQWY7QUFDRCxPQUpEO0FBS0Q7O0FBVGdDLEdBUlYsVUFTUkMsVUFUUSxHQVNLQSxVQVRMLFVBVVZDLE1BVlUsR0FVRCxFQVZDLDJFQVN0QmIsTUFUc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFVdEJDLElBVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUZBV3RCQyxNQVhzQjtBQW1CMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBSb3V0ZXIsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIG1ldGhvZCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU3dhZ2dlclJvdXRlciBleHRlbmRzIFJvdXRlciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICAgIEBtZXRob2QgbWFwKCkge1xuICAgICAgdGhpcy5uYW1lc3BhY2UoJ3N3YWdnZXInLCB7bW9kdWxlOiAnJywgcHJlZml4OiBcInN3YWdnZXJcIn0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXQoJy8nLCB7dG86ICdzd2FnZ2VyI2luZGV4JywgcmVjb3JkTmFtZTogbnVsbH0pXG4gICAgICAgIHRoaXMuZ2V0KCcvc3dhZ2dlci5qc29uJywge3RvOiAnc3dhZ2dlciNzcGVjJywgcmVjb3JkTmFtZTogbnVsbH0pXG4gICAgICAgIHRoaXMuZ2V0KCcvKicsIHt0bzogJ3N3YWdnZXIjc3RhdGljJywgcmVjb3JkTmFtZTogbnVsbH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19