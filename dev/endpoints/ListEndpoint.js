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
    nameBy,
    meta,
    Utils: {
      statuses
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ListEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ListEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).queryParam('query', this.querySchema, `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9MaXN0RW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiQ3J1ZEVuZHBvaW50TWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWl4aW4iLCJuYW1lQnkiLCJtZXRhIiwiVXRpbHMiLCJzdGF0dXNlcyIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIkxpc3RFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsInF1ZXJ5UGFyYW0iLCJxdWVyeVNjaGVtYSIsImxpc3RFbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJsaXN0U2NoZW1hIiwiZXJyb3IiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsS0FIaEI7QUFHdUJDLElBQUFBLE1BSHZCO0FBRytCQyxJQUFBQSxJQUgvQjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpILE1BS0ZULE1BQU0sQ0FBQ1UsRUFMWDtBQU9BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNRyxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVHlCLE1BY25CSSxZQWRtQixXQVl4QlQsTUFBTSxDQUFDSixNQUFELENBWmtCLFVBYXhCSyxLQUFLLENBQUNILGlCQUFELENBYm1CLEVBV3hCQyxVQVh3QixxRUFXekIsTUFHTVUsWUFITixTQUcyQlosZUFIM0IsQ0FHMkM7QUFJekNhLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLFVBREgsQ0FDYyxPQURkLEVBQ3VCLEtBQUtDLFdBRDVCLEVBQzBDO0FBQ2hEO0FBQ0EsWUFBWSxLQUFLQyxjQUFlO0FBQ2hDLFNBSk0sRUFLR0MsUUFMSCxDQUtZLEtBQUtDLFVBTGpCLEVBSzhCO0FBQ3BDLGdCQUFnQixLQUFLRixjQUFlO0FBQ3BDLFNBUE0sRUFRR0csS0FSSCxDQVFTWixZQVJULEVBU0dZLEtBVEgsQ0FTU1gsZ0JBVFQsRUFVR1ksT0FWSCxDQVVZO0FBQ2xCLDZCQUE2QixLQUFLSixjQUFlO0FBQ2pELFNBWk0sRUFhR0ssV0FiSCxDQWFnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0wsY0FBZTtBQUNoQyxTQWhCTTtBQWlCRDs7QUF2QndDLEdBZGxCLFVBZVJNLFVBZlEsR0FlS0EsVUFmTCxVQWdCVkMsTUFoQlUsR0FnQkQsRUFoQkMsMkVBZXRCckIsTUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFnQnRCQyxJQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtaXhpbiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIExpc3RFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5xdWVyeVBhcmFtKCdxdWVyeScsIHRoaXMucXVlcnlTY2hlbWEsIGBcbiAgICAgICAgICBUaGUgcXVlcnkgZm9yIGZpbmRpbmdcbiAgICAgICAgICAke3RoaXMubGlzdEVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAucmVzcG9uc2UodGhpcy5saXN0U2NoZW1hLCBgXG4gICAgICAgICAgVGhlICR7dGhpcy5saXN0RW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgTGlzdCBvZiBmaWx0ZXJlZCAke3RoaXMubGlzdEVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgUmV0cmlldmVzIGEgbGlzdCBvZiBmaWx0ZXJlZFxuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0gYnkgdXNpbmcgcXVlcnkuXG4gICAgICAgIGApXG4gICAgfVxuICB9XG59XG4iXX0=