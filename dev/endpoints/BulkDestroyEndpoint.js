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
  let BulkDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class BulkDestroyEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).queryParam('query', this.querySchema, `
          The query for finding
          ${this.listEntityName}.
        `).response(null).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9CdWxrRGVzdHJveUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1peGluIiwibmFtZUJ5IiwibWV0YSIsIlV0aWxzIiwic3RhdHVzZXMiLCJOUyIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJCdWxrRGVzdHJveUVuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwYXRoUGFyYW0iLCJ2ZXJzaW9uU2NoZW1hIiwicXVlcnlQYXJhbSIsInF1ZXJ5U2NoZW1hIiwibGlzdEVudGl0eU5hbWUiLCJyZXNwb25zZSIsImVycm9yIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLEtBSGhCO0FBR3VCQyxJQUFBQSxNQUh2QjtBQUcrQkMsSUFBQUEsSUFIL0I7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFKSCxNQUtGVCxNQUFNLENBQUNVLEVBTFg7QUFPQSxRQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQyxjQUFELENBQTdCO0FBQ0EsUUFBTUcsZ0JBQWdCLEdBQUdILFFBQVEsQ0FBQyxrQkFBRCxDQUFqQztBQVR5QixNQWNuQkksbUJBZG1CLFdBWXhCVCxNQUFNLENBQUNKLE1BQUQsQ0Faa0IsVUFheEJLLEtBQUssQ0FBQ0gsaUJBQUQsQ0FibUIsRUFXeEJDLFVBWHdCLHFFQVd6QixNQUdNVSxtQkFITixTQUdrQ1osZUFIbEMsQ0FHa0Q7QUFJaERhLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLFVBREgsQ0FDYyxPQURkLEVBQ3VCLEtBQUtDLFdBRDVCLEVBQzBDO0FBQ2hEO0FBQ0EsWUFBWSxLQUFLQyxjQUFlO0FBQ2hDLFNBSk0sRUFLR0MsUUFMSCxDQUtZLElBTFosRUFNR0MsS0FOSCxDQU1TWCxZQU5ULEVBT0dXLEtBUEgsQ0FPU1YsZ0JBUFQsRUFRR1csT0FSSCxDQVFZO0FBQ2xCLCtCQUErQixLQUFLSCxjQUFlO0FBQ25ELFNBVk0sRUFXR0ksV0FYSCxDQVdnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0osY0FBZTtBQUNoQyxTQWRNO0FBZUQ7O0FBckIrQyxHQWR6QixVQWVSSyxVQWZRLEdBZUtBLFVBZkwsVUFnQlZDLE1BaEJVLEdBZ0JELEVBaEJDLDJFQWV0QnBCLE1BZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBZ0J0QkMsSUFoQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIENydWRFbmRwb2ludE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWl4aW4sIG5hbWVCeSwgbWV0YSxcbiAgICBVdGlsczogeyBzdGF0dXNlcyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBVUEdSQURFX1JFUVVJUkVEID0gc3RhdHVzZXMoJ3VwZ3JhZGUgcmVxdWlyZWQnKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRFbmRwb2ludE1peGluKVxuICBjbGFzcyBCdWxrRGVzdHJveUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnBhdGhQYXJhbSgndicsIHRoaXMudmVyc2lvblNjaGVtYSlcbiAgICAgICAgLnF1ZXJ5UGFyYW0oJ3F1ZXJ5JywgdGhpcy5xdWVyeVNjaGVtYSwgYFxuICAgICAgICAgIFRoZSBxdWVyeSBmb3IgZmluZGluZ1xuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoVVBHUkFERV9SRVFVSVJFRClcbiAgICAgICAgLnN1bW1hcnkoYFxuICAgICAgICAgIFJlbW92ZSBvZiBmaWx0ZXJlZCAke3RoaXMubGlzdEVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgUmVtb3ZlIGEgbGlzdCBvZiBmaWx0ZXJlZFxuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0gYnkgdXNpbmcgcXVlcnkuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19