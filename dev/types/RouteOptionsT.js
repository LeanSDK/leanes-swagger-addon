"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RouteOptionsT = void 0;

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
const RouteOptionsT = _flowRuntime.default.type("RouteOptionsT", _flowRuntime.default.object(_flowRuntime.default.property("to", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("at", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.string("collection"), _flowRuntime.default.string("member")))), _flowRuntime.default.property("resource", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("action", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("tag", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("template", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("keyName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("entityName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("recordName", _flowRuntime.default.nullable(_flowRuntime.default.string()))));

exports.RouteOptionsT = RouteOptionsT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzL1JvdXRlT3B0aW9uc1QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLGlFQUFxQiw0QkFDMUIsb0NBQUksOEJBQUMsNkJBQUQsQ0FBSixDQUQwQixFQUUxQixvQ0FBSSw4QkFBRSxzRUFBZSxxQ0FBZixDQUFGLENBQUosQ0FGMEIsRUFHMUIsMENBQVUsOEJBQUMsNkJBQUQsQ0FBVixDQUgwQixFQUkxQix3Q0FBUSw4QkFBQyw2QkFBRCxDQUFSLENBSjBCLEVBSzFCLHFDQUFLLDhCQUFDLDZCQUFELENBQUwsQ0FMMEIsRUFNMUIsMENBQVUsOEJBQUMsNkJBQUQsQ0FBVixDQU4wQixFQU8xQix5Q0FBUyw4QkFBQyw2QkFBRCxDQUFULENBUDBCLEVBUTFCLDRDQUFZLDhCQUFDLDZCQUFELENBQVosQ0FSMEIsRUFTMUIsNENBQVksOEJBQUMsNkJBQUQsQ0FBWixDQVQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1yZXN0ZnVsLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1yZXN0ZnVsLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXJlc3RmdWwtYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXJlc3RmdWwtYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgdHlwZSBSb3V0ZU9wdGlvbnNUID0ge1xuICB0bzogP3N0cmluZyxcbiAgYXQ6ID8oJ2NvbGxlY3Rpb24nIHwgJ21lbWJlcicpLFxuICByZXNvdXJjZTogP3N0cmluZyxcbiAgYWN0aW9uOiA/c3RyaW5nLFxuICB0YWc6ID9zdHJpbmcsXG4gIHRlbXBsYXRlOiA/c3RyaW5nLFxuICBrZXlOYW1lOiA/c3RyaW5nLFxuICBlbnRpdHlOYW1lOiA/c3RyaW5nLFxuICByZWNvcmROYW1lOiA/c3RyaW5nXG59XG4iXX0=