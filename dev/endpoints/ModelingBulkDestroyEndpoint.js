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
      statuses
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingBulkDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingBulkDestroyEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).queryParam('query', this.querySchema, `
          The query for finding
          ${this.listEntityName}
        `).response(null).error(UNAUTHORIZED).eror(UPGRADE_REQUIRED).summary(`
          Remove of filtered ${this.listEntityName}
        `).description(`
          Remove a list of filtered
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0J1bGtEZXN0cm95RW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiQ3J1ZEVuZHBvaW50TWl4aW4iLCJpbml0aWFsaXplIiwibWl4aW4iLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwiVXRpbHMiLCJzdGF0dXNlcyIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIk1vZGVsaW5nQnVsa0Rlc3Ryb3lFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsImhlYWRlciIsImpvaSIsInN0cmluZyIsInJlcXVpcmVkIiwicXVlcnlQYXJhbSIsInF1ZXJ5U2NoZW1hIiwibGlzdEVudGl0eU5hbWUiLCJyZXNwb25zZSIsImVycm9yIiwiZXJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxLQUhSO0FBR2VDLElBQUFBLE1BSGY7QUFHdUJDLElBQUFBLE1BSHZCO0FBRytCQyxJQUFBQSxJQUgvQjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpILE1BS0ZULE1BQU0sQ0FBQ1UsRUFMWDtBQU9BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNRyxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVHlCLE1BY25CSSwyQkFkbUIsV0FZeEJSLE1BQU0sQ0FBQ0wsTUFBRCxDQVprQixVQWF4QkksS0FBSyxDQUFDRixpQkFBRCxDQWJtQixFQVd4QkMsVUFYd0IscUVBV3pCLE1BR01VLDJCQUhOLFNBRzBDWixlQUgxQyxDQUcwRDtBQUl4RGEsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsTUFESCxDQUNVLGVBRFYsRUFDMkJDLEdBQUcsQ0FBQ0MsTUFBSixHQUFhQyxRQUFiLEVBRDNCLEVBQ3FEO0FBQzNEO0FBQ0EsU0FITSxFQUlHQyxVQUpILENBSWMsT0FKZCxFQUl1QixLQUFLQyxXQUo1QixFQUkwQztBQUNoRDtBQUNBLFlBQVksS0FBS0MsY0FBZTtBQUNoQyxTQVBNLEVBUUdDLFFBUkgsQ0FRWSxJQVJaLEVBU0dDLEtBVEgsQ0FTU2YsWUFUVCxFQVVHZ0IsSUFWSCxDQVVRZixnQkFWUixFQVdHZ0IsT0FYSCxDQVdZO0FBQ2xCLCtCQUErQixLQUFLSixjQUFlO0FBQ25ELFNBYk0sRUFjR0ssV0FkSCxDQWNnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0wsY0FBZTtBQUNoQyxTQWpCTTtBQWtCRDs7QUF4QnVELEdBZGpDLFVBZVJNLFVBZlEsR0FlS0EsVUFmTCxVQWdCVkMsTUFoQlUsR0FnQkQsRUFoQkMsMkVBZXRCekIsTUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFnQnRCQyxJQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgbWl4aW4sIHBhcnRPZiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIE1vZGVsaW5nQnVsa0Rlc3Ryb3lFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5oZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgYFxuICAgICAgICAgIEF1dGhvcml6YXRpb24gaGVhZGVyIGZvciBpbnRlcm5hbCBzZXJ2aWNlcy5cbiAgICAgICAgYClcbiAgICAgICAgLnF1ZXJ5UGFyYW0oJ3F1ZXJ5JywgdGhpcy5xdWVyeVNjaGVtYSwgYFxuICAgICAgICAgIFRoZSBxdWVyeSBmb3IgZmluZGluZ1xuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLnJlc3BvbnNlKG51bGwpXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5zdW1tYXJ5KGBcbiAgICAgICAgICBSZW1vdmUgb2YgZmlsdGVyZWQgJHt0aGlzLmxpc3RFbnRpdHlOYW1lfVxuICAgICAgICBgKVxuICAgICAgICAuZGVzY3JpcHRpb24oYFxuICAgICAgICAgIFJlbW92ZSBhIGxpc3Qgb2YgZmlsdGVyZWRcbiAgICAgICAgICAke3RoaXMubGlzdEVudGl0eU5hbWV9IGJ5IHVzaW5nIHF1ZXJ5LlxuICAgICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==