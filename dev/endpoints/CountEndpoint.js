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
      statuses,
      joi
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');
  let CountEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class CountEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).queryParam('query', this.querySchema, `
          The query for counting
          ${this.listEntityName}.
        `).response(joi.numner(), `
          The count of ${this.listEntityName}
        `).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary(`
          Count of filtered ${this.listEntityName}
        `).description(`
          Retrieves a count of filtered
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Db3VudEVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1peGluIiwibmFtZUJ5IiwibWV0YSIsIlV0aWxzIiwic3RhdHVzZXMiLCJqb2kiLCJOUyIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJDb3VudEVuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwYXRoUGFyYW0iLCJ2ZXJzaW9uU2NoZW1hIiwicXVlcnlQYXJhbSIsInF1ZXJ5U2NoZW1hIiwibGlzdEVudGl0eU5hbWUiLCJyZXNwb25zZSIsIm51bW5lciIsImVycm9yIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLEtBSGhCO0FBR3VCQyxJQUFBQSxNQUh2QjtBQUcrQkMsSUFBQUEsSUFIL0I7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWjtBQUpILE1BS0ZWLE1BQU0sQ0FBQ1csRUFMWDtBQU9BLFFBQU1DLFlBQVksR0FBR0gsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDLGtCQUFELENBQWpDO0FBVHlCLE1BY25CSyxhQWRtQixXQVl4QlYsTUFBTSxDQUFDSixNQUFELENBWmtCLFVBYXhCSyxLQUFLLENBQUNILGlCQUFELENBYm1CLEVBV3hCQyxVQVh3QixxRUFXekIsTUFHTVcsYUFITixTQUc0QmIsZUFINUIsQ0FHNEM7QUFJMUNjLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLFVBREgsQ0FDYyxPQURkLEVBQ3VCLEtBQUtDLFdBRDVCLEVBQzBDO0FBQ2hEO0FBQ0EsWUFBWSxLQUFLQyxjQUFlO0FBQ2hDLFNBSk0sRUFLR0MsUUFMSCxDQUtZWixHQUFHLENBQUNhLE1BQUosRUFMWixFQUsyQjtBQUNqQyx5QkFBeUIsS0FBS0YsY0FBZTtBQUM3QyxTQVBNLEVBUUdHLEtBUkgsQ0FRU1osWUFSVCxFQVNHWSxLQVRILENBU1NYLGdCQVRULEVBVUdZLE9BVkgsQ0FVWTtBQUNsQiw4QkFBOEIsS0FBS0osY0FBZTtBQUNsRCxTQVpNLEVBYUdLLFdBYkgsQ0FhZ0I7QUFDdEI7QUFDQSxZQUFZLEtBQUtMLGNBQWU7QUFDaEMsU0FoQk07QUFpQkQ7O0FBdkJ5QyxHQWRuQixVQWVSTSxVQWZRLEdBZUtBLFVBZkwsVUFnQlZDLE1BaEJVLEdBZ0JELEVBaEJDLDJFQWV0QnRCLE1BZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBZ0J0QkMsSUFoQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIENydWRFbmRwb2ludE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWl4aW4sIG5hbWVCeSwgbWV0YSxcbiAgICBVdGlsczogeyBzdGF0dXNlcywgam9pIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIENvdW50RW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAucXVlcnlQYXJhbSgncXVlcnknLCB0aGlzLnF1ZXJ5U2NoZW1hLCBgXG4gICAgICAgICAgVGhlIHF1ZXJ5IGZvciBjb3VudGluZ1xuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5yZXNwb25zZShqb2kubnVtbmVyKCksIGBcbiAgICAgICAgICBUaGUgY291bnQgb2YgJHt0aGlzLmxpc3RFbnRpdHlOYW1lfVxuICAgICAgICBgKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoVVBHUkFERV9SRVFVSVJFRClcbiAgICAgICAgLnN1bW1hcnkoYFxuICAgICAgICAgIENvdW50IG9mIGZpbHRlcmVkICR7dGhpcy5saXN0RW50aXR5TmFtZX1cbiAgICAgICAgYClcbiAgICAgICAgLmRlc2NyaXB0aW9uKGBcbiAgICAgICAgICBSZXRyaWV2ZXMgYSBjb3VudCBvZiBmaWx0ZXJlZFxuICAgICAgICAgICR7dGhpcy5saXN0RW50aXR5TmFtZX0gYnkgdXNpbmcgcXVlcnkuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19