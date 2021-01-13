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
  let ModelingBulkDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ModelingBulkDeleteEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `).queryParam('query', this.querySchema, `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Nb2RlbGluZ0J1bGtEZWxldGVFbmRwb2ludC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJDcnVkRW5kcG9pbnRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtaXhpbiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsInN0YXR1c2VzIiwiTlMiLCJVTkFVVEhPUklaRUQiLCJVUEdSQURFX1JFUVVJUkVEIiwiTW9kZWxpbmdCdWxrRGVsZXRlRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJoZWFkZXIiLCJqb2kiLCJzdHJpbmciLCJyZXF1aXJlZCIsInF1ZXJ5UGFyYW0iLCJxdWVyeVNjaGVtYSIsImxpc3RFbnRpdHlOYW1lIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxLQUhoQjtBQUd1QkMsSUFBQUEsTUFIdkI7QUFHK0JDLElBQUFBLElBSC9CO0FBSUpDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSkgsTUFLRlQsTUFBTSxDQUFDVSxFQUxYO0FBT0EsUUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUMsY0FBRCxDQUE3QjtBQUNBLFFBQU1HLGdCQUFnQixHQUFHSCxRQUFRLENBQUMsa0JBQUQsQ0FBakM7QUFUeUIsTUFjbkJJLDBCQWRtQixXQVl4QlQsTUFBTSxDQUFDSixNQUFELENBWmtCLFVBYXhCSyxLQUFLLENBQUNILGlCQUFELENBYm1CLEVBV3hCQyxVQVh3QixxRUFXekIsTUFHTVUsMEJBSE4sU0FHeUNaLGVBSHpDLENBR3lEO0FBSXZEYSxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixLQUFLQyxhQUF6QixFQUNHQyxNQURILENBQ1UsZUFEVixFQUMyQkMsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLFFBQWIsRUFEM0IsRUFDcUQ7QUFDM0Q7QUFDQSxTQUhNLEVBSUdDLFVBSkgsQ0FJYyxPQUpkLEVBSXVCLEtBQUtDLFdBSjVCLEVBSTBDO0FBQ2hEO0FBQ0EsWUFBWSxLQUFLQyxjQUFlO0FBQ2hDLFNBUE0sRUFRR0MsUUFSSCxDQVFZLElBUlosRUFTR0MsS0FUSCxDQVNTZixZQVRULEVBVUdlLEtBVkgsQ0FVU2QsZ0JBVlQsRUFXR2UsT0FYSCxDQVdZO0FBQ2xCLDZCQUE2QixLQUFLSCxjQUFlO0FBQ2pELFNBYk0sRUFjR0ksV0FkSCxDQWNnQjtBQUN0QjtBQUNBLFlBQVksS0FBS0osY0FBZTtBQUNoQyxTQWpCTTtBQWtCRDs7QUF4QnNELEdBZGhDLFVBZVJLLFVBZlEsR0FlS0EsVUFmTCxVQWdCVkMsTUFoQlUsR0FnQkQsRUFoQkMsMkVBZXRCeEIsTUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFnQnRCQyxJQWhCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtaXhpbiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IFVQR1JBREVfUkVRVUlSRUQgPSBzdGF0dXNlcygndXBncmFkZSByZXF1aXJlZCcpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIE1vZGVsaW5nQnVsa0RlbGV0ZUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnBhdGhQYXJhbSgndicsIHRoaXMudmVyc2lvblNjaGVtYSlcbiAgICAgICAgLmhlYWRlcignQXV0aG9yaXphdGlvbicsIGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLCBgXG4gICAgICAgICAgQXV0aG9yaXphdGlvbiBoZWFkZXIgZm9yIGludGVybmFsIHNlcnZpY2VzLlxuICAgICAgICBgKVxuICAgICAgICAucXVlcnlQYXJhbSgncXVlcnknLCB0aGlzLnF1ZXJ5U2NoZW1hLCBgXG4gICAgICAgICAgVGhlIHF1ZXJ5IGZvciBmaW5kaW5nXG4gICAgICAgICAgJHt0aGlzLmxpc3RFbnRpdHlOYW1lfS5cbiAgICAgICAgYClcbiAgICAgICAgLnJlc3BvbnNlKG51bGwpXG4gICAgICAgIC5lcnJvcihVTkFVVEhPUklaRUQpXG4gICAgICAgIC5lcnJvcihVUEdSQURFX1JFUVVJUkVEKVxuICAgICAgICAuc3VtbWFyeShgXG4gICAgICAgICAgSGlkZSBvZiBmaWx0ZXJlZCAke3RoaXMubGlzdEVudGl0eU5hbWV9XG4gICAgICAgIGApXG4gICAgICAgIC5kZXNjcmlwdGlvbihgXG4gICAgICAgICAgSGlkZSBhIGxpc3Qgb2YgZmlsdGVyZWRcbiAgICAgICAgICAke3RoaXMubGlzdEVudGl0eU5hbWV9IGJ5IHVzaW5nIHF1ZXJ5LlxuICAgICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==