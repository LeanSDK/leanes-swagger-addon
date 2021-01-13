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
  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingDetailEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingDetailEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).response(this.itemSchema, `
          The ${this.itemEntityName}.
        `).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Fetch the ${this.itemEntityName}
        `).description(`
          Retrieves the
          ${this.itemEntityName} by its key.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0RldGFpbEVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsIlV0aWxzIiwic3RhdHVzZXMiLCJqb2kiLCJOUyIsIkhUVFBfTk9UX0ZPVU5EIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIk1vZGVsaW5nRGV0YWlsRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJoZWFkZXIiLCJzdHJpbmciLCJyZXF1aXJlZCIsInJlc3BvbnNlIiwiaXRlbVNjaGVtYSIsIml0ZW1FbnRpdHlOYW1lIiwiZXJyb3IiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQTtBQUFaO0FBSkgsTUFLRlYsTUFBTSxDQUFDVyxFQUxYO0FBT0EsUUFBTUMsY0FBYyxHQUFHSCxRQUFRLENBQUMsV0FBRCxDQUEvQjtBQUNBLFFBQU1JLFlBQVksR0FBR0osUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSyxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVnlCLE1BZW5CTSxzQkFmbUIsV0FheEJYLE1BQU0sQ0FBQ0osTUFBRCxDQWJrQixVQWN4Qk8sS0FBSyxDQUFDTCxpQkFBRCxDQWRtQixFQVl4QkMsVUFad0IscUVBWXpCLE1BR01ZLHNCQUhOLFNBR3FDZCxlQUhyQyxDQUdxRDtBQUluRGUsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsTUFESCxDQUNVLGVBRFYsRUFDMkJWLEdBQUcsQ0FBQ1csTUFBSixHQUFhQyxRQUFiLEVBRDNCLEVBQ3FEO0FBQzNEO0FBQ0EsU0FITSxFQUlHQyxRQUpILENBSVksS0FBS0MsVUFKakIsRUFJOEI7QUFDcEMsZ0JBQWdCLEtBQUtDLGNBQWU7QUFDcEMsU0FOTSxFQU9HQyxLQVBILENBT1NkLGNBUFQsRUFRR2MsS0FSSCxDQVFTYixZQVJULEVBU0dhLEtBVEgsQ0FTU1osZ0JBVFQsRUFVR2EsT0FWSCxDQVVZO0FBQ2xCLHNCQUFzQixLQUFLRixjQUFlO0FBQzFDLFNBWk0sRUFhR0csV0FiSCxDQWFnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0gsY0FBZTtBQUNoQyxTQWhCTTtBQWlCRDs7QUF2QmtELEdBZjVCLFVBZ0JSSSxVQWhCUSxHQWdCS0EsVUFoQkwsVUFpQlZDLE1BakJVLEdBaUJELEVBakJDLDJFQWdCdEJ4QixNQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFpQnRCRCxJQWpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzLCBqb2l9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgSFRUUF9OT1RfRk9VTkQgPSBzdGF0dXNlcygnbm90IGZvdW5kJyk7XG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgTW9kZWxpbmdEZXRhaWxFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5oZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgYFxuICAgICAgICAgIEF1dGhvcml6YXRpb24gaGVhZGVyIGZvciBpbnRlcm5hbCBzZXJ2aWNlcy5cbiAgICAgICAgYClcbiAgICAgICAgLnJlc3BvbnNlKHRoaXMuaXRlbVNjaGVtYSwgYFxuICAgICAgICAgIFRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAuZXJyb3IoSFRUUF9OT1RfRk9VTkQpXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgRmV0Y2ggdGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBSZXRyaWV2ZXMgdGhlXG4gICAgICAgICAgJHt0aGlzLml0ZW1FbnRpdHlOYW1lfSBieSBpdHMga2V5LlxuICAgICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==