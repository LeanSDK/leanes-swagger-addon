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
  const HTTP_CONFLICT = statuses('conflict');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let CreateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class CreateEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).body(this.itemSchema.required(), `
          The ${this.itemEntityName} to create.
        `).response(201, this.itemSchema, `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9DcmVhdGVFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtaXhpbiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJIVFRQX0NPTkZMSUNUIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIkNyZWF0ZUVuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwYXRoUGFyYW0iLCJ2ZXJzaW9uU2NoZW1hIiwiYm9keSIsIml0ZW1TY2hlbWEiLCJyZXF1aXJlZCIsIml0ZW1FbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxLQUhoQjtBQUd1QkMsSUFBQUEsTUFIdkI7QUFHK0JDLElBQUFBLElBSC9CO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSkgsTUFLRlQsTUFBTSxDQUFDVSxFQUxYO0FBT0EsUUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUMsVUFBRCxDQUE5QjtBQUNBLFFBQU1HLFlBQVksR0FBR0gsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVnlCLE1BZW5CSyxjQWZtQixXQWF4QlYsTUFBTSxDQUFDSixNQUFELENBYmtCLFVBY3hCSyxLQUFLLENBQUNILGlCQUFELENBZG1CLEVBWXhCQyxVQVp3QixxRUFZekIsTUFHTVcsY0FITixTQUc2QmIsZUFIN0IsQ0FHNkM7QUFJM0NjLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLElBREgsQ0FDUSxLQUFLQyxVQUFMLENBQWdCQyxRQUFoQixFQURSLEVBQ3FDO0FBQzNDLGdCQUFnQixLQUFLQyxjQUFlO0FBQ3BDLFNBSE0sRUFJR0MsUUFKSCxDQUlZLEdBSlosRUFJaUIsS0FBS0gsVUFKdEIsRUFJbUM7QUFDekMsd0JBQXdCLEtBQUtFLGNBQWU7QUFDNUMsU0FOTSxFQU9HRSxLQVBILENBT1NiLGFBUFQsRUFPeUI7QUFDL0IsZ0JBQWdCLEtBQUtXLGNBQWU7QUFDcEM7QUFDQSxTQVZNLEVBV0dFLEtBWEgsQ0FXU1osWUFYVCxFQVlHWSxLQVpILENBWVNYLGdCQVpULEVBYUdZLE9BYkgsQ0FhWTtBQUNsQix5QkFBeUIsS0FBS0gsY0FBZTtBQUM3QyxTQWZNLEVBZ0JHSSxXQWhCSCxDQWdCZ0I7QUFDdEIsMEJBQTBCLEtBQUtKLGNBQWU7QUFDOUM7QUFDQTtBQUNBLFNBcEJNO0FBcUJEOztBQTNCMEMsR0FmcEIsVUFnQlJLLFVBaEJRLEdBZ0JLQSxVQWhCTCxVQWlCVkMsTUFqQlUsR0FpQkQsRUFqQkMsMkVBZ0J0QnRCLE1BaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWlCdEJDLElBakJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBDcnVkRW5kcG9pbnRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1peGluLCBuYW1lQnksIG1ldGEsXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IEhUVFBfQ09ORkxJQ1QgPSBzdGF0dXNlcygnY29uZmxpY3QnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBDcmVhdGVFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5ib2R5KHRoaXMuaXRlbVNjaGVtYS5yZXF1aXJlZCgpLCBgXG4gICAgICAgICAgVGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX0gdG8gY3JlYXRlLlxuICAgICAgICBgKVxuICAgICAgICAucmVzcG9uc2UoMjAxLCB0aGlzLml0ZW1TY2hlbWEsIGBcbiAgICAgICAgICBUaGUgY3JlYXRlZCAke3RoaXMuaXRlbUVudGl0eU5hbWV9LlxuICAgICAgICBgKVxuICAgICAgICAuZXJyb3IoSFRUUF9DT05GTElDVCwgYFxuICAgICAgICAgIFRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9IGFscmVhZHlcbiAgICAgICAgICBleGlzdHMuXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgQ3JlYXRlIGEgbmV3ICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBDcmVhdGVzIGEgbmV3ICR7dGhpcy5pdGVtRW50aXR5TmFtZX1cbiAgICAgICAgICBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgYW5kXG4gICAgICAgICAgcmV0dXJucyB0aGUgc2F2ZWQgZG9jdW1lbnQuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19