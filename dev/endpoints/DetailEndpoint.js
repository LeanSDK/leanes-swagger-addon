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
  let DetailEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class DetailEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).response(this.itemSchema, `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9EZXRhaWxFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtaXhpbiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJIVFRQX05PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIlVQR1JBREVfUkVRVUlSRUQiLCJEZXRhaWxFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicGF0aFBhcmFtIiwidmVyc2lvblNjaGVtYSIsInJlc3BvbnNlIiwiaXRlbVNjaGVtYSIsIml0ZW1FbnRpdHlOYW1lIiwiZXJyb3IiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsS0FIaEI7QUFHdUJDLElBQUFBLE1BSHZCO0FBRytCQyxJQUFBQSxJQUgvQjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpILE1BS0ZULE1BQU0sQ0FBQ1UsRUFMWDtBQU9BLFFBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDLFdBQUQsQ0FBL0I7QUFDQSxRQUFNRyxZQUFZLEdBQUdILFFBQVEsQ0FBQyxjQUFELENBQTdCO0FBQ0EsUUFBTUksZ0JBQWdCLEdBQUdKLFFBQVEsQ0FBQyxrQkFBRCxDQUFqQztBQVZ5QixNQWVuQkssY0FmbUIsV0FheEJWLE1BQU0sQ0FBQ0osTUFBRCxDQWJrQixVQWN4QkssS0FBSyxDQUFDSCxpQkFBRCxDQWRtQixFQVl4QkMsVUFad0IscUVBWXpCLE1BR01XLGNBSE4sU0FHNkJiLGVBSDdCLENBRzZDO0FBSTNDYyxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxRQURILENBQ1ksS0FBS0MsVUFEakIsRUFDOEI7QUFDcEMsZ0JBQWdCLEtBQUtDLGNBQWU7QUFDcEMsU0FITSxFQUlHQyxLQUpILENBSVNYLGNBSlQsRUFLR1csS0FMSCxDQUtTVixZQUxULEVBTUdVLEtBTkgsQ0FNU1QsZ0JBTlQsRUFPR1UsT0FQSCxDQU9ZO0FBQ2xCLHNCQUFzQixLQUFLRixjQUFlO0FBQzFDLFNBVE0sRUFVR0csV0FWSCxDQVVnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0gsY0FBZTtBQUNoQyxTQWJNO0FBY0Q7O0FBcEIwQyxHQWZwQixVQWdCUkksVUFoQlEsR0FnQktBLFVBaEJMLFVBaUJWQyxNQWpCVSxHQWlCRCxFQWpCQywyRUFnQnRCcEIsTUFoQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBaUJ0QkMsSUFqQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIENydWRFbmRwb2ludE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWl4aW4sIG5hbWVCeSwgbWV0YSxcbiAgICBVdGlsczogeyBzdGF0dXNlcyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgSFRUUF9OT1RfRk9VTkQgPSBzdGF0dXNlcygnbm90IGZvdW5kJyk7XG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgVVBHUkFERV9SRVFVSVJFRCA9IHN0YXR1c2VzKCd1cGdyYWRlIHJlcXVpcmVkJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgRGV0YWlsRW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAucmVzcG9uc2UodGhpcy5pdGVtU2NoZW1hLCBgXG4gICAgICAgICAgVGhlICR7dGhpcy5pdGVtRW50aXR5TmFtZX0uXG4gICAgICAgIGApXG4gICAgICAgIC5lcnJvcihIVFRQX05PVF9GT1VORClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKFVQR1JBREVfUkVRVUlSRUQpXG4gICAgICAgIC5zdW1tYXJ5KGBcbiAgICAgICAgICBGZXRjaCB0aGUgJHt0aGlzLml0ZW1FbnRpdHlOYW1lfVxuICAgICAgICBgKVxuICAgICAgICAuZGVzY3JpcHRpb24oYFxuICAgICAgICAgIFJldHJpZXZlcyB0aGVcbiAgICAgICAgICAke3RoaXMuaXRlbUVudGl0eU5hbWV9IGJ5IGl0cyBrZXkuXG4gICAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19