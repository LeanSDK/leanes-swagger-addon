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
      statuses
    }
  } = Module.NS;
  const HTTP_NOT_FOUND = statuses('not found');
  const HTTP_CONFLICT = statuses('conflict');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let UpdateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class UpdateEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).body(this.itemSchema.required(), `
          The data to replace the
          ${this.itemEntityName} with.
        `).response(this.itemSchema, `
          The replaced ${this.itemEntityName}.
        `).error(HTTP_NOT_FOUND).error(HTTP_CONFLICT).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Replace the ${this.itemEntityName}
        `).description(`
          Replaces an existing
          ${this.itemEntityName} with the
          request body and returns the new document.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9VcGRhdGVFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJIVFRQX05PVF9GT1VORCIsIkhUVFBfQ09ORkxJQ1QiLCJVTkFVVEhPUklaRUQiLCJVUEdSQURFX1JFUVVJUkVEIiwiVXBkYXRlRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJib2R5IiwiaXRlbVNjaGVtYSIsInJlcXVpcmVkIiwiaXRlbUVudGl0eU5hbWUiLCJyZXNwb25zZSIsImVycm9yIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsS0FIOUI7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFKSCxNQUtGVCxNQUFNLENBQUNVLEVBTFg7QUFPQSxRQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQyxXQUFELENBQS9CO0FBQ0EsUUFBTUcsYUFBYSxHQUFHSCxRQUFRLENBQUMsVUFBRCxDQUE5QjtBQUNBLFFBQU1JLFlBQVksR0FBR0osUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSyxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBWHlCLE1BZ0JuQk0sY0FoQm1CLFdBY3hCWCxNQUFNLENBQUNKLE1BQUQsQ0Fka0IsVUFleEJPLEtBQUssQ0FBQ0wsaUJBQUQsQ0FmbUIsRUFheEJDLFVBYndCLHFFQWF6QixNQUdNWSxjQUhOLFNBRzZCZCxlQUg3QixDQUc2QztBQUkzQ2UsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsSUFESCxDQUNRLEtBQUtDLFVBQUwsQ0FBZ0JDLFFBQWhCLEVBRFIsRUFDcUM7QUFDM0M7QUFDQSxZQUFZLEtBQUtDLGNBQWU7QUFDaEMsU0FKTSxFQUtHQyxRQUxILENBS1ksS0FBS0gsVUFMakIsRUFLOEI7QUFDcEMseUJBQXlCLEtBQUtFLGNBQWU7QUFDN0MsU0FQTSxFQVFHRSxLQVJILENBUVNkLGNBUlQsRUFTR2MsS0FUSCxDQVNTYixhQVRULEVBVUdhLEtBVkgsQ0FVU1osWUFWVCxFQVdHWSxLQVhILENBV1NYLGdCQVhULEVBWUdZLE9BWkgsQ0FZWTtBQUNsQix3QkFBd0IsS0FBS0gsY0FBZTtBQUM1QyxTQWRNLEVBZUdJLFdBZkgsQ0FlZ0I7QUFDdEI7QUFDQSxZQUFZLEtBQUtKLGNBQWU7QUFDaEM7QUFDQSxTQW5CTTtBQW9CRDs7QUExQjBDLEdBaEJwQixVQWlCUkssVUFqQlEsR0FpQktBLFVBakJMLFVBa0JWQyxNQWxCVSxHQWtCRCxFQWxCQywyRUFpQnRCdkIsTUFqQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBa0J0QkQsSUFsQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIENydWRFbmRwb2ludE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtaXhpbixcbiAgICBVdGlsczogeyBzdGF0dXNlcyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgSFRUUF9OT1RfRk9VTkQgPSBzdGF0dXNlcygnbm90IGZvdW5kJyk7XG4gIGNvbnN0IEhUVFBfQ09ORkxJQ1QgPSBzdGF0dXNlcygnY29uZmxpY3QnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBVcGRhdGVFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5ib2R5KHRoaXMuaXRlbVNjaGVtYS5yZXF1aXJlZCgpLCBgXG4gICAgICAgICAgVGhlIGRhdGEgdG8gcmVwbGFjZSB0aGVcbiAgICAgICAgICAke3RoaXMuaXRlbUVudGl0eU5hbWV9IHdpdGguXG4gICAgICAgIGApXG4gICAgICAgIC5yZXNwb25zZSh0aGlzLml0ZW1TY2hlbWEsIGBcbiAgICAgICAgICBUaGUgcmVwbGFjZWQgJHt0aGlzLml0ZW1FbnRpdHlOYW1lfS5cbiAgICAgICAgYClcbiAgICAgICAgLmVycm9yKEhUVFBfTk9UX0ZPVU5EKVxuICAgICAgICAuZXJyb3IoSFRUUF9DT05GTElDVClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5zdW1tYXJ5KGBcbiAgICAgICAgICBSZXBsYWNlIHRoZSAke3RoaXMuaXRlbUVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgUmVwbGFjZXMgYW4gZXhpc3RpbmdcbiAgICAgICAgICAke3RoaXMuaXRlbUVudGl0eU5hbWV9IHdpdGggdGhlXG4gICAgICAgICAgcmVxdWVzdCBib2R5IGFuZCByZXR1cm5zIHRoZSBuZXcgZG9jdW1lbnQuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19