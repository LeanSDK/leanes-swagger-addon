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
    meta,
    nameBy,
    mixin,
    Utils: {
      statuses,
      joi
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingListEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingListEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).queryParam('query', this.querySchema, `
          The query for finding
          ${this.listEntityName}.
        `).response(this.listSchema, `
          The ${this.listEntityName}.
        `).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          List of filtered ${this.listEntityName}
        `).description(`
          Retrieves a list of filtered
          ${this.listEntityName} by using query.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0xpc3RFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJVdGlscyIsInN0YXR1c2VzIiwiam9pIiwiTlMiLCJVTkFVVEhPUklaRUQiLCJVUEdSQURFX1JFUVVJUkVEIiwiTW9kZWxpbmdMaXN0RW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJoZWFkZXIiLCJzdHJpbmciLCJyZXF1aXJlZCIsInF1ZXJ5UGFyYW0iLCJxdWVyeVNjaGVtYSIsImxpc3RFbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJsaXN0U2NoZW1hIiwiZXJyb3IiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQTtBQUFaO0FBSkgsTUFLRlYsTUFBTSxDQUFDVyxFQUxYO0FBT0EsUUFBTUMsWUFBWSxHQUFHSCxRQUFRLENBQUMsY0FBRCxDQUE3QjtBQUNBLFFBQU1JLGdCQUFnQixHQUFHSixRQUFRLENBQUMsa0JBQUQsQ0FBakM7QUFUeUIsTUFjbkJLLG9CQWRtQixXQVl4QlYsTUFBTSxDQUFDSixNQUFELENBWmtCLFVBYXhCTyxLQUFLLENBQUNMLGlCQUFELENBYm1CLEVBV3hCQyxVQVh3QixxRUFXekIsTUFHTVcsb0JBSE4sU0FHbUNiLGVBSG5DLENBR21EO0FBSWpEYyxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxNQURILENBQ1UsZUFEVixFQUMyQlQsR0FBRyxDQUFDVSxNQUFKLEdBQWFDLFFBQWIsRUFEM0IsRUFDcUQ7QUFDM0Q7QUFDQSxTQUhNLEVBSUdDLFVBSkgsQ0FJYyxPQUpkLEVBSXVCLEtBQUtDLFdBSjVCLEVBSTBDO0FBQ2hEO0FBQ0EsWUFBWSxLQUFLQyxjQUFlO0FBQ2hDLFNBUE0sRUFRR0MsUUFSSCxDQVFZLEtBQUtDLFVBUmpCLEVBUThCO0FBQ3BDLGdCQUFnQixLQUFLRixjQUFlO0FBQ3BDLFNBVk0sRUFXR0csS0FYSCxDQVdTZixZQVhULEVBWUdlLEtBWkgsQ0FZU2QsZ0JBWlQsRUFhR2UsT0FiSCxDQWFZO0FBQ2xCLDZCQUE2QixLQUFLSixjQUFlO0FBQ2pELFNBZk0sRUFnQkdLLFdBaEJILENBZ0JnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0wsY0FBZTtBQUNoQyxTQW5CTTtBQW9CRDs7QUExQmdELEdBZDFCLFVBZVJNLFVBZlEsR0FlS0EsVUFmTCxVQWdCVkMsTUFoQlUsR0FnQkQsRUFoQkMsMkVBZXRCekIsTUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFnQnRCRCxJQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzLCBqb2kgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgTW9kZWxpbmdMaXN0RW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuaGVhZGVyKCdBdXRob3JpemF0aW9uJywgam9pLnN0cmluZygpLnJlcXVpcmVkKCksIGBcbiAgICAgICAgICBBdXRob3JpemF0aW9uIGhlYWRlciBmb3IgaW50ZXJuYWwgc2VydmljZXMuXG4gICAgICAgIGApXG4gICAgICAgIC5xdWVyeVBhcmFtKCdxdWVyeScsIHRoaXMucXVlcnlTY2hlbWEsIGBcbiAgICAgICAgICBUaGUgcXVlcnkgZm9yIGZpbmRpbmdcbiAgICAgICAgICAke3RoaXMubGlzdEVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAucmVzcG9uc2UodGhpcy5saXN0U2NoZW1hLCBgXG4gICAgICAgICAgVGhlICR7dGhpcy5saXN0RW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgTGlzdCBvZiBmaWx0ZXJlZCAke3RoaXMubGlzdEVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgUmV0cmlldmVzIGEgbGlzdCBvZiBmaWx0ZXJlZFxuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0gYnkgdXNpbmcgcXVlcnkuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19