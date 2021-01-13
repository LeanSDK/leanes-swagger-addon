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
    partOf,
    mixin,
    meta,
    nameBy,
    Utils: {
      statuses,
      joi
    }
  } = Module.NS;
  const HTTP_NOT_FOUND = statuses('not found');
  const HTTP_CONFLICT = statuses('conflict');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingUpdateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingUpdateEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).body(this.itemSchema.required(), `
          The data to replace the
          ${this.itemEntityName} with.
        `).response(this.itemSchema, `
          The replaced ${this.itemEntityName}.
        `).error(HTTP_NOT_FOUND).error(HTTP_CONFLICT).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Replace the ${this.itemEntityName}.
        `).description(`
          Replaces an existing
          ${this.itemEntityName} with the
          request body and returns the new document.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ1VwZGF0ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1peGluIiwibWV0YSIsIm5hbWVCeSIsIlV0aWxzIiwic3RhdHVzZXMiLCJqb2kiLCJOUyIsIkhUVFBfTk9UX0ZPVU5EIiwiSFRUUF9DT05GTElDVCIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJNb2RlbGluZ1VwZGF0ZUVuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwYXRoUGFyYW0iLCJ2ZXJzaW9uU2NoZW1hIiwiaGVhZGVyIiwic3RyaW5nIiwicmVxdWlyZWQiLCJib2R5IiwiaXRlbVNjaGVtYSIsIml0ZW1FbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxLQUhoQjtBQUd1QkMsSUFBQUEsSUFIdkI7QUFHNkJDLElBQUFBLE1BSDdCO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVo7QUFKSCxNQUtGVixNQUFNLENBQUNXLEVBTFg7QUFPQSxRQUFNQyxjQUFjLEdBQUdILFFBQVEsQ0FBQyxXQUFELENBQS9CO0FBQ0EsUUFBTUksYUFBYSxHQUFHSixRQUFRLENBQUMsVUFBRCxDQUE5QjtBQUNBLFFBQU1LLFlBQVksR0FBR0wsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNTSxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBWHlCLE1BZ0JuQk8sc0JBaEJtQixXQWN4QlosTUFBTSxDQUFDSixNQUFELENBZGtCLFVBZXhCSyxLQUFLLENBQUNILGlCQUFELENBZm1CLEVBYXhCQyxVQWJ3QixxRUFhekIsTUFHTWEsc0JBSE4sU0FHcUNmLGVBSHJDLENBR3FEO0FBSW5EZ0IsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsTUFESCxDQUNVLGVBRFYsRUFDMkJYLEdBQUcsQ0FBQ1ksTUFBSixHQUFhQyxRQUFiLEVBRDNCLEVBQ3FEO0FBQzNEO0FBQ0EsU0FITSxFQUlHQyxJQUpILENBSVEsS0FBS0MsVUFBTCxDQUFnQkYsUUFBaEIsRUFKUixFQUlxQztBQUMzQztBQUNBLFlBQVksS0FBS0csY0FBZTtBQUNoQyxTQVBNLEVBUUdDLFFBUkgsQ0FRWSxLQUFLRixVQVJqQixFQVE4QjtBQUNwQyx5QkFBeUIsS0FBS0MsY0FBZTtBQUM3QyxTQVZNLEVBV0dFLEtBWEgsQ0FXU2hCLGNBWFQsRUFZR2dCLEtBWkgsQ0FZU2YsYUFaVCxFQWFHZSxLQWJILENBYVNkLFlBYlQsRUFjR2MsS0FkSCxDQWNTYixnQkFkVCxFQWVHYyxPQWZILENBZVk7QUFDbEIsd0JBQXdCLEtBQUtILGNBQWU7QUFDNUMsU0FqQk0sRUFrQkdJLFdBbEJILENBa0JnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0osY0FBZTtBQUNoQztBQUNBLFNBdEJNO0FBdUJEOztBQTdCa0QsR0FoQjVCLFVBaUJSSyxVQWpCUSxHQWlCS0EsVUFqQkwsVUFrQlZDLE1BbEJVLEdBa0JELEVBbEJDLDJFQWlCdEJ6QixNQWpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFrQnRCRCxJQWxCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtaXhpbiwgbWV0YSwgbmFtZUJ5LFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzLCBqb2kgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IEhUVFBfTk9UX0ZPVU5EID0gc3RhdHVzZXMoJ25vdCBmb3VuZCcpO1xuICBjb25zdCBIVFRQX0NPTkZMSUNUID0gc3RhdHVzZXMoJ2NvbmZsaWN0Jyk7XG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgTW9kZWxpbmdVcGRhdGVFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5oZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgYFxuICAgICAgICAgIEF1dGhvcml6YXRpb24gaGVhZGVyIGZvciBpbnRlcm5hbCBzZXJ2aWNlcy5cbiAgICAgICAgYClcbiAgICAgICAgLmJvZHkodGhpcy5pdGVtU2NoZW1hLnJlcXVpcmVkKCksIGBcbiAgICAgICAgICBUaGUgZGF0YSB0byByZXBsYWNlIHRoZVxuICAgICAgICAgICR7dGhpcy5pdGVtRW50aXR5TmFtZX0gd2l0aC5cbiAgICAgICAgYClcbiAgICAgICAgLnJlc3BvbnNlKHRoaXMuaXRlbVNjaGVtYSwgYFxuICAgICAgICAgIFRoZSByZXBsYWNlZCAke3RoaXMuaXRlbUVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAuZXJyb3IoSFRUUF9OT1RfRk9VTkQpXG4gICAgICAgIC5lcnJvcihIVFRQX0NPTkZMSUNUKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoVVBHUkFERV9SRVFVSVJFRClcbiAgICAgICAgLnN1bW1hcnkoYFxuICAgICAgICAgIFJlcGxhY2UgdGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgUmVwbGFjZXMgYW4gZXhpc3RpbmdcbiAgICAgICAgICAke3RoaXMuaXRlbUVudGl0eU5hbWV9IHdpdGggdGhlXG4gICAgICAgICAgcmVxdWVzdCBib2R5IGFuZCByZXR1cm5zIHRoZSBuZXcgZG9jdW1lbnQuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19