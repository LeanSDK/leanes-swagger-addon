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
    property,
    method,
    nameBy,
    mixin,
    Utils: {
      statuses
    }
  } = Module.NS;
  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let DestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class DestroyEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary(`
          Remove the ${this.itemEntityName}
        `).description(`
          Deletes the ${this.itemEntityName}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9EZXN0cm95RW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiQ3J1ZEVuZHBvaW50TWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwibWl4aW4iLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJIVFRQX05PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJEZXN0cm95RW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJlcnJvciIsInJlc3BvbnNlIiwic3VtbWFyeSIsIml0ZW1FbnRpdHlOYW1lIiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLFFBSHRCO0FBR2dDQyxJQUFBQSxNQUhoQztBQUd3Q0MsSUFBQUEsTUFIeEM7QUFHZ0RDLElBQUFBLEtBSGhEO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSkgsTUFLRlgsTUFBTSxDQUFDWSxFQUxYO0FBT0EsUUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUMsV0FBRCxDQUEvQjtBQUNBLFFBQU1HLFlBQVksR0FBR0gsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVnlCLE1BZW5CSyxlQWZtQixXQWF4QlosTUFBTSxDQUFDSixNQUFELENBYmtCLFVBY3hCUyxLQUFLLENBQUNQLGlCQUFELENBZG1CLEVBWXhCQyxVQVp3QixxRUFZekIsTUFHTWEsZUFITixTQUc4QmYsZUFIOUIsQ0FHOEM7QUFJNUNnQixJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxLQURILENBQ1NSLGNBRFQsRUFFR1EsS0FGSCxDQUVTUCxZQUZULEVBR0dPLEtBSEgsQ0FHU04sZ0JBSFQsRUFJR08sUUFKSCxDQUlZLElBSlosRUFLR0MsT0FMSCxDQUtZO0FBQ2xCLHVCQUF1QixLQUFLQyxjQUFlO0FBQzNDLFNBUE0sRUFRR0MsV0FSSCxDQVFnQjtBQUN0Qix3QkFBd0IsS0FBS0QsY0FBZTtBQUM1QztBQUNBLFNBWE07QUFZRDs7QUFsQjJDLEdBZnJCLFVBZ0JSRSxVQWhCUSxHQWdCS0EsVUFoQkwsVUFpQlZDLE1BakJVLEdBaUJELEVBakJDLDJFQWdCdEJuQixNQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFpQnRCSCxJQWpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBIVFRQX05PVF9GT1VORCA9IHN0YXR1c2VzKCdub3QgZm91bmQnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBEZXN0cm95RW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuZXJyb3IoSFRUUF9OT1RfRk9VTkQpXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAucmVzcG9uc2UobnVsbClcbiAgICAgICAgLnN1bW1hcnkoYFxuICAgICAgICAgIFJlbW92ZSB0aGUgJHt0aGlzLml0ZW1FbnRpdHlOYW1lfVxuICAgICAgICBgKVxuICAgICAgICAuZGVzY3JpcHRpb24oYFxuICAgICAgICAgIERlbGV0ZXMgdGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgICBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgICAgICAgYCk7XG4gICAgfVxuICB9XG59XG4iXX0=