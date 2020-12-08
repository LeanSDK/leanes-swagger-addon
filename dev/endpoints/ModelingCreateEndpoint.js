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
  const HTTP_CONFLICT = statuses('conflict');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingCreateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingCreateEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).body(this.itemSchema.required(), `
          The ${this.itemEntityName} to create.
        `).response(201, this.itemScema, `
          The created ${this.itemEntityName}.
        `).error(HTTP_CONFLICT, `
          The ${this.itemEntityName} already
          exists.
        `).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Create a new ${this.itemEntityName}
        `).description(`
          Creates a new ${this.itemEntityName}
          from the request body and
          returns the saved document.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0NyZWF0ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsIm1peGluIiwicGFydE9mIiwibmFtZUJ5IiwibWV0YSIsIlV0aWxzIiwic3RhdHVzZXMiLCJqb2kiLCJOUyIsIkhUVFBfQ09ORkxJQ1QiLCJVTkFVVEhPUklaRUQiLCJVUEdSQURFX1JFUVVJUkVEIiwiTW9kZWxpbmdDcmVhdGVFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsImhlYWRlciIsInN0cmluZyIsInJlcXVpcmVkIiwiYm9keSIsIml0ZW1TY2hlbWEiLCJpdGVtRW50aXR5TmFtZSIsInJlc3BvbnNlIiwiaXRlbVNjZW1hIiwiZXJyb3IiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsS0FIUjtBQUdlQyxJQUFBQSxNQUhmO0FBR3VCQyxJQUFBQSxNQUh2QjtBQUcrQkMsSUFBQUEsSUFIL0I7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWjtBQUpILE1BS0ZWLE1BQU0sQ0FBQ1csRUFMWDtBQU9BLFFBQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDLFVBQUQsQ0FBOUI7QUFDQSxRQUFNSSxZQUFZLEdBQUdKLFFBQVEsQ0FBQyxjQUFELENBQTdCO0FBQ0EsUUFBTUssZ0JBQWdCLEdBQUdMLFFBQVEsQ0FBQyxrQkFBRCxDQUFqQztBQVZ5QixNQWVuQk0sc0JBZm1CLFdBYXhCVixNQUFNLENBQUNMLE1BQUQsQ0Fia0IsVUFjeEJJLEtBQUssQ0FBQ0YsaUJBQUQsQ0FkbUIsRUFZeEJDLFVBWndCLHFFQVl6QixNQUdNWSxzQkFITixTQUdxQ2QsZUFIckMsQ0FHcUQ7QUFJbkRlLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLE1BREgsQ0FDVSxlQURWLEVBQzJCVixHQUFHLENBQUNXLE1BQUosR0FBYUMsUUFBYixFQUQzQixFQUNxRDtBQUMzRDtBQUNBLFNBSE0sRUFJR0MsSUFKSCxDQUlRLEtBQUtDLFVBQUwsQ0FBZ0JGLFFBQWhCLEVBSlIsRUFJcUM7QUFDM0MsZ0JBQWdCLEtBQUtHLGNBQWU7QUFDcEMsU0FOTSxFQU9HQyxRQVBILENBT1ksR0FQWixFQU9pQixLQUFLQyxTQVB0QixFQU9rQztBQUN4Qyx3QkFBd0IsS0FBS0YsY0FBZTtBQUM1QyxTQVRNLEVBVUdHLEtBVkgsQ0FVU2hCLGFBVlQsRUFVeUI7QUFDL0IsZ0JBQWdCLEtBQUthLGNBQWU7QUFDcEM7QUFDQSxTQWJNLEVBY0dHLEtBZEgsQ0FjU2YsWUFkVCxFQWVHZSxLQWZILENBZVNkLGdCQWZULEVBZ0JHZSxPQWhCSCxDQWdCWTtBQUNsQix5QkFBeUIsS0FBS0osY0FBZTtBQUM3QyxTQWxCTSxFQW1CR0ssV0FuQkgsQ0FtQmdCO0FBQ3RCLDBCQUEwQixLQUFLTCxjQUFlO0FBQzlDO0FBQ0E7QUFDQSxTQXZCTTtBQXdCRDs7QUE5QmtELEdBZjVCLFVBZ0JSTSxVQWhCUSxHQWdCS0EsVUFoQkwsVUFpQlZDLE1BakJVLEdBaUJELEVBakJDLDJFQWdCdEIxQixNQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFpQnRCQyxJQWpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgbWl4aW4sIHBhcnRPZiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzLCBqb2kgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IEhUVFBfQ09ORkxJQ1QgPSBzdGF0dXNlcygnY29uZmxpY3QnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBNb2RlbGluZ0NyZWF0ZUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnBhdGhQYXJhbSgndicsIHRoaXMudmVyc2lvblNjaGVtYSlcbiAgICAgICAgLmhlYWRlcignQXV0aG9yaXphdGlvbicsIGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLCBgXG4gICAgICAgICAgQXV0aG9yaXphdGlvbiBoZWFkZXIgZm9yIGludGVybmFsIHNlcnZpY2VzLlxuICAgICAgICBgKVxuICAgICAgICAuYm9keSh0aGlzLml0ZW1TY2hlbWEucmVxdWlyZWQoKSwgYFxuICAgICAgICAgIFRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9IHRvIGNyZWF0ZS5cbiAgICAgICAgYClcbiAgICAgICAgLnJlc3BvbnNlKDIwMSwgdGhpcy5pdGVtU2NlbWEsIGBcbiAgICAgICAgICBUaGUgY3JlYXRlZCAke3RoaXMuaXRlbUVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAuZXJyb3IoSFRUUF9DT05GTElDVCwgYFxuICAgICAgICAgIFRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9IGFscmVhZHlcbiAgICAgICAgICBleGlzdHMuXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgQ3JlYXRlIGEgbmV3ICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBDcmVhdGVzIGEgbmV3ICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgICBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgYW5kXG4gICAgICAgICAgcmV0dXJucyB0aGUgc2F2ZWQgZG9jdW1lbnQuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19