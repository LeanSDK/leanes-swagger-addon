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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    SwaggerEndpoint,
    CrudEndpointMixin,
    initialize,
    mixin,
    partOf,
    nameBy,
    meta,
    Utils: {
      statuses,
      joi
    }
  } = Module.NS;
  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingDeleteEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary(`
          Hide the ${this.itemEntityName}
        `).description(`
          Hide the ${this.itemEntityName}
          from the database.
        `);
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
  }), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0RlbGV0ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsIm1peGluIiwicGFydE9mIiwibmFtZUJ5IiwibWV0YSIsIlV0aWxzIiwic3RhdHVzZXMiLCJqb2kiLCJOUyIsIkhUVFBfTk9UX0ZPVU5EIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIk1vZGVsaW5nRGVsZXRlRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJoZWFkZXIiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVycm9yIiwicmVzcG9uc2UiLCJzdW1tYXJ5IiwiaXRlbUVudGl0eU5hbWUiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxLQUhSO0FBR2VDLElBQUFBLE1BSGY7QUFHdUJDLElBQUFBLE1BSHZCO0FBRytCQyxJQUFBQSxJQUgvQjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQTtBQUFaO0FBSkgsTUFLRlYsTUFBTSxDQUFDVyxFQUxYO0FBT0EsUUFBTUMsY0FBYyxHQUFHSCxRQUFRLENBQUMsV0FBRCxDQUEvQjtBQUNBLFFBQU1JLFlBQVksR0FBR0osUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSyxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVnlCLE1BZW5CTSxzQkFmbUIsV0FheEJWLE1BQU0sQ0FBQ0wsTUFBRCxDQWJrQixVQWN4QkksS0FBSyxDQUFDRixpQkFBRCxDQWRtQixFQVl4QkMsVUFad0IscUVBWXpCLE1BR01ZLHNCQUhOLFNBR3FDZCxlQUhyQyxDQUdxRDtBQUluRGUsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsTUFESCxDQUNVLGVBRFYsRUFDMkJWLEdBQUcsQ0FBQ1csTUFBSixHQUFhQyxRQUFiLEVBRDNCLEVBQ3FEO0FBQzNEO0FBQ0EsU0FITSxFQUlHQyxLQUpILENBSVNYLGNBSlQsRUFLR1csS0FMSCxDQUtTVixZQUxULEVBTUdVLEtBTkgsQ0FNU1QsZ0JBTlQsRUFPR1UsUUFQSCxDQU9ZLElBUFosRUFRR0MsT0FSSCxDQVFhO0FBQ25CLHFCQUFxQixLQUFLQyxjQUFlO0FBQ3pDLFNBVk0sRUFXR0MsV0FYSCxDQVdnQjtBQUN0QixxQkFBcUIsS0FBS0QsY0FBZTtBQUN6QztBQUNBLFNBZE07QUFlRDs7QUFyQmtELEdBZjVCLFVBZ0JSRSxVQWhCUSxHQWdCS0EsVUFoQkwsVUFpQlZDLE1BakJVLEdBaUJELEVBakJDLDJFQWdCdEJ2QixNQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFpQnRCQyxJQWpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgbWl4aW4sIHBhcnRPZiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzLCBqb2kgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IEhUVFBfTk9UX0ZPVU5EID0gc3RhdHVzZXMoJ25vdCBmb3VuZCcpO1xuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIE1vZGVsaW5nRGVsZXRlRW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuaGVhZGVyKCdBdXRob3JpemF0aW9uJywgam9pLnN0cmluZygpLnJlcXVpcmVkKCksIGBcbiAgICAgICAgICBBdXRob3JpemF0aW9uIGhlYWRlciBmb3IgaW50ZXJuYWwgc2VydmljZXMuXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihIVFRQX05PVF9GT1VORClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuc3VtbWFyeSggYFxuICAgICAgICAgIEhpZGUgdGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBIaWRlIHRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9XG4gICAgICAgICAgZnJvbSB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19