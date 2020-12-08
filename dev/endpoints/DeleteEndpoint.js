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
  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let DeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class DeleteEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary(`
          Hide a new ${this.itemEntityName}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9EZWxldGVFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtaXhpbiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJIVFRQX05PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJEZWxldGVFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsImVycm9yIiwicmVzcG9uc2UiLCJzdW1tYXJ5IiwiaXRlbUVudGl0eU5hbWUiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxLQUhoQjtBQUd1QkMsSUFBQUEsTUFIdkI7QUFHK0JDLElBQUFBLElBSC9CO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSkgsTUFLRlQsTUFBTSxDQUFDVSxFQUxYO0FBT0EsUUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUMsV0FBRCxDQUEvQjtBQUNBLFFBQU1HLFlBQVksR0FBR0gsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVnlCLE1BZW5CSyxjQWZtQixXQWF4QlYsTUFBTSxDQUFDSixNQUFELENBYmtCLFVBY3hCSyxLQUFLLENBQUNILGlCQUFELENBZG1CLEVBWXhCQyxVQVp3QixxRUFZekIsTUFHTVcsY0FITixTQUc2QmIsZUFIN0IsQ0FHNkM7QUFJM0NjLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLEtBREgsQ0FDU1IsY0FEVCxFQUVHUSxLQUZILENBRVNQLFlBRlQsRUFHR08sS0FISCxDQUdTTixnQkFIVCxFQUlHTyxRQUpILENBSVksSUFKWixFQUtHQyxPQUxILENBS1k7QUFDbEIsdUJBQXVCLEtBQUtDLGNBQWU7QUFDM0MsU0FQTSxFQVFHQyxXQVJILENBUWdCO0FBQ3RCLHFCQUFxQixLQUFLRCxjQUFlO0FBQ3pDO0FBQ0EsU0FYTTtBQVlEOztBQWxCMEMsR0FmcEIsVUFnQlJFLFVBaEJRLEdBZ0JLQSxVQWhCTCxVQWlCVkMsTUFqQlUsR0FpQkQsRUFqQkMsMkVBZ0J0Qm5CLE1BaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWlCdEJDLElBakJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBDcnVkRW5kcG9pbnRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1peGluLCBuYW1lQnksIG1ldGEsXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IEhUVFBfTk9UX0ZPVU5EID0gc3RhdHVzZXMoJ25vdCBmb3VuZCcpO1xuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIERlbGV0ZUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnBhdGhQYXJhbSgndicsIHRoaXMudmVyc2lvblNjaGVtYSlcbiAgICAgICAgLmVycm9yKEhUVFBfTk9UX0ZPVU5EKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoVVBHUkFERV9SRVFVSVJFRClcbiAgICAgICAgLnJlc3BvbnNlKG51bGwpXG4gICAgICAgIC5zdW1tYXJ5KGBcbiAgICAgICAgICBIaWRlIGEgbmV3ICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBIaWRlIHRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9XG4gICAgICAgICAgZnJvbSB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19