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
  let BulkDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class BulkDeleteEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).queryParam('query', this.querySchema, `
          The query for finding
          ${this.listEntityName}.
        `).response(null).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Hide of filtered ${this.listEntityName}
        `).description(`
          Hide a list of filtered
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9CdWxrRGVsZXRlRW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiQ3J1ZEVuZHBvaW50TWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWl4aW4iLCJuYW1lQnkiLCJtZXRhIiwiVXRpbHMiLCJzdGF0dXNlcyIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIkJ1bGtEZWxldGVFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsInF1ZXJ5UGFyYW0iLCJxdWVyeVNjaGVtYSIsImxpc3RFbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxLQUhoQjtBQUd1QkMsSUFBQUEsTUFIdkI7QUFHK0JDLElBQUFBLElBSC9CO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSkgsTUFLRlQsTUFBTSxDQUFDVSxFQUxYO0FBT0EsUUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUMsY0FBRCxDQUE3QjtBQUNBLFFBQU1HLGdCQUFnQixHQUFHSCxRQUFRLENBQUMsa0JBQUQsQ0FBakM7QUFUeUIsTUFjbkJJLGtCQWRtQixXQVl4QlQsTUFBTSxDQUFDSixNQUFELENBWmtCLFVBYXhCSyxLQUFLLENBQUNILGlCQUFELENBYm1CLEVBV3hCQyxVQVh3QixxRUFXekIsTUFHTVUsa0JBSE4sU0FHaUNaLGVBSGpDLENBR2lEO0FBSS9DYSxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxVQURILENBQ2MsT0FEZCxFQUN1QixLQUFLQyxXQUQ1QixFQUMwQztBQUNoRDtBQUNBLFlBQVksS0FBS0MsY0FBZTtBQUNoQyxTQUpNLEVBS0dDLFFBTEgsQ0FLWSxJQUxaLEVBTUdDLEtBTkgsQ0FNU1gsWUFOVCxFQU9HVyxLQVBILENBT1NWLGdCQVBULEVBUUdXLE9BUkgsQ0FRWTtBQUNsQiw2QkFBNkIsS0FBS0gsY0FBZTtBQUNqRCxTQVZNLEVBV0dJLFdBWEgsQ0FXZ0I7QUFDdEI7QUFDQSxZQUFZLEtBQUtKLGNBQWU7QUFDaEMsU0FkTTtBQWVEOztBQXJCOEMsR0FkeEIsVUFlUkssVUFmUSxHQWVLQSxVQWZMLFVBZ0JWQyxNQWhCVSxHQWdCRCxFQWhCQywyRUFldEJwQixNQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWdCdEJDLElBaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBDcnVkRW5kcG9pbnRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1peGluLCBuYW1lQnksIG1ldGEsXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgQnVsa0RlbGV0ZUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnBhdGhQYXJhbSgndicsIHRoaXMudmVyc2lvblNjaGVtYSlcbiAgICAgICAgLnF1ZXJ5UGFyYW0oJ3F1ZXJ5JywgdGhpcy5xdWVyeVNjaGVtYSwgYFxuICAgICAgICAgIFRoZSBxdWVyeSBmb3IgZmluZGluZ1xuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoVVBHUkFERV9SRVFVSVJFRClcbiAgICAgICAgLnN1bW1hcnkoYFxuICAgICAgICAgIEhpZGUgb2YgZmlsdGVyZWQgJHt0aGlzLmxpc3RFbnRpdHlOYW1lfVxuICAgICAgICBgKVxuICAgICAgICAuZGVzY3JpcHRpb24oYFxuICAgICAgICAgIEhpZGUgYSBsaXN0IG9mIGZpbHRlcmVkXG4gICAgICAgICAgJHt0aGlzLmxpc3RFbnRpdHlOYW1lfSBieSB1c2luZyBxdWVyeS5cbiAgICAgICAgYCk7XG4gICAgfVxuICB9XG59XG4iXX0=