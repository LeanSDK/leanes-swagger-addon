"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SwaggerEndpointStruct = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
const SwaggerEndpointStruct = _flowRuntime.default.type("SwaggerEndpointStruct", _flowRuntime.default.object(_flowRuntime.default.property("tags", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.property("headers", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("pathParams", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("queryParams", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("payload", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.property("responses", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("errors", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("title", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("synopsis", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("isDeprecated", _flowRuntime.default.boolean())));

exports.SwaggerEndpointStruct = SwaggerEndpointStruct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvU3dhZ2dlckVuZHBvaW50U3RydWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxpRkFBZ0MsNEJBQ3JDLHNDQUFNLDhCQUFDLDJCQUFNLDZCQUFOLENBQUQsQ0FBTixDQURxQyxFQUdyQyx5Q0FBUyw4QkFBQywyQkFBTSxrQ0FBTixDQUFELENBQVQsQ0FIcUMsRUFLckMsNENBQVksOEJBQUMsMkJBQU0sa0NBQU4sQ0FBRCxDQUFaLENBTHFDLEVBT3JDLDZDQUFhLDhCQUFDLDJCQUFNLGtDQUFOLENBQUQsQ0FBYixDQVBxQyxFQVNyQyx5Q0FBUyw4QkFBQyxrQ0FBRCxDQUFULENBVHFDLEVBV3JDLDJDQUFXLDhCQUFDLDJCQUFNLGtDQUFOLENBQUQsQ0FBWCxDQVhxQyxFQWFyQyx3Q0FBUSw4QkFBQywyQkFBTSxrQ0FBTixDQUFELENBQVIsQ0FicUMsRUFlckMsdUNBQU8sOEJBQUMsNkJBQUQsQ0FBUCxDQWZxQyxFQWlCckMsMENBQVUsOEJBQUMsNkJBQUQsQ0FBVixDQWpCcUMsRUFtQnJDLDhDQUFjLDhCQUFkLENBbkJxQyxDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgaW50ZXJmYWNlIFN3YWdnZXJFbmRwb2ludFN0cnVjdCB7XG4gIHRhZ3M6ID9BcnJheTxzdHJpbmc+O1xuXG4gIGhlYWRlcnM6ID9BcnJheTxvYmplY3Q+O1xuXG4gIHBhdGhQYXJhbXM6ID9BcnJheTxvYmplY3Q+O1xuXG4gIHF1ZXJ5UGFyYW1zOiA/QXJyYXk8b2JqZWN0PjtcblxuICBwYXlsb2FkOiA/b2JqZWN0O1xuXG4gIHJlc3BvbnNlczogP0FycmF5PG9iamVjdD47XG5cbiAgZXJyb3JzOiA/QXJyYXk8b2JqZWN0PjtcblxuICB0aXRsZTogP3N0cmluZztcblxuICBzeW5vcHNpczogP3N0cmluZztcblxuICBpc0RlcHJlY2F0ZWQ6IGJvb2xlYW47XG59XG4iXX0=