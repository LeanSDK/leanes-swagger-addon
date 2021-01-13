"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.JoiT = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of LeanES.
//
// LeanES is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// LeanES is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with LeanES.  If not, see <https://www.gnu.org/licenses/>.
const Types = _flowRuntime.default.type("Types", _flowRuntime.default.union(_flowRuntime.default.string("any"), _flowRuntime.default.string("alternatives"), _flowRuntime.default.string("array"), _flowRuntime.default.string("boolean"), _flowRuntime.default.string("binary"), _flowRuntime.default.string("date"), _flowRuntime.default.string("function"), _flowRuntime.default.string("link"), _flowRuntime.default.string("number"), _flowRuntime.default.string("object"), _flowRuntime.default.string("string"), _flowRuntime.default.string("symbol")));

const JoiT = _flowRuntime.default.type("JoiT", _flowRuntime.default.object(_flowRuntime.default.property("$_super", _flowRuntime.default.ref("object")), _flowRuntime.default.property("$_terms", _flowRuntime.default.ref("object")), _flowRuntime.default.property("$_root", _flowRuntime.default.ref("object")), _flowRuntime.default.property("_flags", _flowRuntime.default.ref("object")), _flowRuntime.default.property("type", _flowRuntime.default.union(Types, _flowRuntime.default.string()))));

exports.JoiT = JoiT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzL0pvaVQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlEQUNFLDJCQUFFLGtDQUFGLEVBQ0UsMkNBREYsRUFFRSxvQ0FGRixFQUdFLHNDQUhGLEVBSUUscUNBSkYsRUFLRSxtQ0FMRixFQU1FLHVDQU5GLEVBT0UsbUNBUEYsRUFRRSxxQ0FSRixFQVNFLHFDQVRGLEVBVUUscUNBVkYsRUFXRSxxQ0FYRixDQURGOztBQWNPLCtDQUFZLDRCQUNqQix5Q0FBUyxrQ0FBVCxDQURpQixFQUVqQix5Q0FBUyxrQ0FBVCxDQUZpQixFQUdqQix3Q0FBUSxrQ0FBUixDQUhpQixFQUlqQix3Q0FBUSxrQ0FBUixDQUppQixFQUtqQixzQ0FBTSwyQkFBQSxLQUFLLEVBQUcsNkJBQUgsQ0FBWCxDQUxpQixDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgTGVhbkVTLlxuLy9cbi8vIExlYW5FUyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIExlYW5FUyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBMZWFuRVMuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG50eXBlIFR5cGVzID1cbiAgfCAnYW55J1xuICB8ICdhbHRlcm5hdGl2ZXMnXG4gIHwgJ2FycmF5J1xuICB8ICdib29sZWFuJ1xuICB8ICdiaW5hcnknXG4gIHwgJ2RhdGUnXG4gIHwgJ2Z1bmN0aW9uJ1xuICB8ICdsaW5rJ1xuICB8ICdudW1iZXInXG4gIHwgJ29iamVjdCdcbiAgfCAnc3RyaW5nJ1xuICB8ICdzeW1ib2wnO1xuXG5leHBvcnQgdHlwZSBKb2lUID0ge1xuICAkX3N1cGVyOiBvYmplY3QsXG4gICRfdGVybXM6IG9iamVjdCxcbiAgJF9yb290OiBvYmplY3QsXG4gIF9mbGFnczogb2JqZWN0LFxuICB0eXBlOiBUeXBlcyB8IHN0cmluZyxcbn1cbiJdfQ==