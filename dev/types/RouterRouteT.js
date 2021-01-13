"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RouterRouteT = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-restful-addon.
//
// leanes-restful-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-restful-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-restful-addon.  If not, see <https://www.gnu.org/licenses/>.
const RouterRouteT = _flowRuntime.default.type("RouterRouteT", _flowRuntime.default.object(_flowRuntime.default.property("method", _flowRuntime.default.string()), _flowRuntime.default.property("path", _flowRuntime.default.string()), _flowRuntime.default.property("resource", _flowRuntime.default.string()), _flowRuntime.default.property("action", _flowRuntime.default.string()), _flowRuntime.default.property("tag", _flowRuntime.default.string()), _flowRuntime.default.property("template", _flowRuntime.default.string()), _flowRuntime.default.property("keyName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("entityName", _flowRuntime.default.string()), _flowRuntime.default.property("recordName", _flowRuntime.default.nullable(_flowRuntime.default.string()))));

exports.RouterRouteT = RouterRouteT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzL1JvdXRlclJvdXRlVC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sK0RBQW9CLDRCQUN6Qix3Q0FBUSw2QkFBUixDQUR5QixFQUV6QixzQ0FBTSw2QkFBTixDQUZ5QixFQUd6QiwwQ0FBVSw2QkFBVixDQUh5QixFQUl6Qix3Q0FBUSw2QkFBUixDQUp5QixFQUt6QixxQ0FBSyw2QkFBTCxDQUx5QixFQU16QiwwQ0FBVSw2QkFBVixDQU55QixFQU96Qix5Q0FBUyw4QkFBQyw2QkFBRCxDQUFULENBUHlCLEVBUXpCLDRDQUFZLDZCQUFaLENBUnlCLEVBU3pCLDRDQUFZLDhCQUFDLDZCQUFELENBQVosQ0FUeUIsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtcmVzdGZ1bC1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtcmVzdGZ1bC1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1yZXN0ZnVsLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1yZXN0ZnVsLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IHR5cGUgUm91dGVyUm91dGVUID0ge1xuICBtZXRob2Q6IHN0cmluZyxcbiAgcGF0aDogc3RyaW5nLFxuICByZXNvdXJjZTogc3RyaW5nLFxuICBhY3Rpb246IHN0cmluZyxcbiAgdGFnOiBzdHJpbmcsXG4gIHRlbXBsYXRlOiBzdHJpbmcsXG4gIGtleU5hbWU6ID9zdHJpbmcsXG4gIGVudGl0eU5hbWU6IHN0cmluZyxcbiAgcmVjb3JkTmFtZTogP3N0cmluZ1xufVxuIl19