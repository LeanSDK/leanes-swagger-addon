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
  let ModelingQueryEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingQueryEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header is required.
        `).body(this.executeQuerySchema, `
          The query for execute.
        `).response(joi.array().items(joi.any()), `
          Any result.
        `).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Execute some query
        `).description(`
          This endpoint will been used from HttpCollectionMixin
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ1F1ZXJ5RW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiQ3J1ZEVuZHBvaW50TWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiVXRpbHMiLCJzdGF0dXNlcyIsImpvaSIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiVVBHUkFERV9SRVFVSVJFRCIsIk1vZGVsaW5nUXVlcnlFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsImhlYWRlciIsInN0cmluZyIsInJlcXVpcmVkIiwiYm9keSIsImV4ZWN1dGVRdWVyeVNjaGVtYSIsInJlc3BvbnNlIiwiYXJyYXkiLCJpdGVtcyIsImFueSIsImVycm9yIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsS0FIOUI7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWjtBQUpILE1BS0ZWLE1BQU0sQ0FBQ1csRUFMWDtBQU9BLFFBQU1DLFlBQVksR0FBR0gsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVHlCLE1BY25CSyxxQkFkbUIsV0FZeEJWLE1BQU0sQ0FBQ0osTUFBRCxDQVprQixVQWF4Qk8sS0FBSyxDQUFDTCxpQkFBRCxDQWJtQixFQVd4QkMsVUFYd0IscUVBV3pCLE1BR01XLHFCQUhOLFNBR29DYixlQUhwQyxDQUdvRDtBQUlsRGMsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsTUFESCxDQUNVLGVBRFYsRUFDMkJULEdBQUcsQ0FBQ1UsTUFBSixHQUFhQyxRQUFiLEVBRDNCLEVBQ3FEO0FBQzNEO0FBQ0EsU0FITSxFQUlHQyxJQUpILENBSVEsS0FBS0Msa0JBSmIsRUFJa0M7QUFDeEM7QUFDQSxTQU5NLEVBT0dDLFFBUEgsQ0FPWWQsR0FBRyxDQUFDZSxLQUFKLEdBQVlDLEtBQVosQ0FBa0JoQixHQUFHLENBQUNpQixHQUFKLEVBQWxCLENBUFosRUFPMkM7QUFDakQ7QUFDQSxTQVRNLEVBVUdDLEtBVkgsQ0FVU2hCLFlBVlQsRUFXR2dCLEtBWEgsQ0FXU2YsZ0JBWFQsRUFZR2dCLE9BWkgsQ0FZWTtBQUNsQjtBQUNBLFNBZE0sRUFlR0MsV0FmSCxDQWVnQjtBQUN0QjtBQUNBLFNBakJNO0FBa0JEOztBQXhCaUQsR0FkM0IsVUFlUkMsVUFmUSxHQWVLQSxVQWZMLFVBZ0JWQyxNQWhCVSxHQWdCRCxFQWhCQywyRUFldEIxQixNQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWdCdEJELElBaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBDcnVkRW5kcG9pbnRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWl4aW4sXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMsIGpvaSB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBNb2RlbGluZ1F1ZXJ5RW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuaGVhZGVyKCdBdXRob3JpemF0aW9uJywgam9pLnN0cmluZygpLnJlcXVpcmVkKCksIGBcbiAgICAgICAgICBBdXRob3JpemF0aW9uIGhlYWRlciBpcyByZXF1aXJlZC5cbiAgICAgICAgYClcbiAgICAgICAgLmJvZHkodGhpcy5leGVjdXRlUXVlcnlTY2hlbWEsIGBcbiAgICAgICAgICBUaGUgcXVlcnkgZm9yIGV4ZWN1dGUuXG4gICAgICAgIGApXG4gICAgICAgIC5yZXNwb25zZShqb2kuYXJyYXkoKS5pdGVtcyhqb2kuYW55KCkpLCBgXG4gICAgICAgICAgQW55IHJlc3VsdC5cbiAgICAgICAgYClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5zdW1tYXJ5KGBcbiAgICAgICAgICBFeGVjdXRlIHNvbWUgcXVlcnlcbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBUaGlzIGVuZHBvaW50IHdpbGwgYmVlbiB1c2VkIGZyb20gSHR0cENvbGxlY3Rpb25NaXhpblxuICAgICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==