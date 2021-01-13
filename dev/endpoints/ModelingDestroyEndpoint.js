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
    meta,
    nameBy,
    Utils: {
      statuses,
      joi
    }
  } = Module.NS;
  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let ModelingDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingDestroyEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary(`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0Rlc3Ryb3lFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJtaXhpbiIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJVdGlscyIsInN0YXR1c2VzIiwiam9pIiwiTlMiLCJIVFRQX05PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJNb2RlbGluZ0Rlc3Ryb3lFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsImhlYWRlciIsInN0cmluZyIsInJlcXVpcmVkIiwiZXJyb3IiLCJyZXNwb25zZSIsInN1bW1hcnkiLCJpdGVtRW50aXR5TmFtZSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLEtBSFI7QUFHZUMsSUFBQUEsTUFIZjtBQUd1QkMsSUFBQUEsSUFIdkI7QUFHNkJDLElBQUFBLE1BSDdCO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVo7QUFKSCxNQUtGVixNQUFNLENBQUNXLEVBTFg7QUFPQSxRQUFNQyxjQUFjLEdBQUdILFFBQVEsQ0FBQyxXQUFELENBQS9CO0FBQ0EsUUFBTUksWUFBWSxHQUFHSixRQUFRLENBQUMsY0FBRCxDQUE3QjtBQUNBLFFBQU1LLGdCQUFnQixHQUFHTCxRQUFRLENBQUMsa0JBQUQsQ0FBakM7QUFWeUIsTUFlbkJNLHVCQWZtQixXQWF4QlYsTUFBTSxDQUFDTCxNQUFELENBYmtCLFVBY3hCSSxLQUFLLENBQUNGLGlCQUFELENBZG1CLEVBWXhCQyxVQVp3QixxRUFZekIsTUFHTVksdUJBSE4sU0FHc0NkLGVBSHRDLENBR3NEO0FBSXBEZSxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxNQURILENBQ1UsZUFEVixFQUMyQlYsR0FBRyxDQUFDVyxNQUFKLEdBQWFDLFFBQWIsRUFEM0IsRUFDcUQ7QUFDM0Q7QUFDQSxTQUhNLEVBSUdDLEtBSkgsQ0FJU1gsY0FKVCxFQUtHVyxLQUxILENBS1NWLFlBTFQsRUFNR1UsS0FOSCxDQU1TVCxnQkFOVCxFQU9HVSxRQVBILENBT1ksSUFQWixFQVFHQyxPQVJILENBUVk7QUFDbEIsdUJBQXVCLEtBQUtDLGNBQWU7QUFDM0MsU0FWTSxFQVdHQyxXQVhILENBV2dCO0FBQ3RCLHdCQUF3QixLQUFLRCxjQUFlO0FBQzVDO0FBQ0EsU0FkTTtBQWVEOztBQXJCbUQsR0FmN0IsVUFnQlJFLFVBaEJRLEdBZ0JLQSxVQWhCTCxVQWlCVkMsTUFqQlUsR0FpQkQsRUFqQkMsMkVBZ0J0QnRCLE1BaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWlCdEJELElBakJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBDcnVkRW5kcG9pbnRNaXhpbixcbiAgICBpbml0aWFsaXplLCBtaXhpbiwgcGFydE9mLCBtZXRhLCBuYW1lQnksXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMsIGpvaSB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgSFRUUF9OT1RfRk9VTkQgPSBzdGF0dXNlcygnbm90IGZvdW5kJyk7XG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgTW9kZWxpbmdEZXN0cm95RW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuaGVhZGVyKCdBdXRob3JpemF0aW9uJywgam9pLnN0cmluZygpLnJlcXVpcmVkKCksIGBcbiAgICAgICAgICBBdXRob3JpemF0aW9uIGhlYWRlciBmb3IgaW50ZXJuYWwgc2VydmljZXMuXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihIVFRQX05PVF9GT1VORClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgUmVtb3ZlIHRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgRGVsZXRlcyB0aGUgJHt0aGlzLml0ZW1FbnRpdHlOYW1lfVxuICAgICAgICAgIGZyb20gdGhlIGRhdGFiYXNlLlxuICAgICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==