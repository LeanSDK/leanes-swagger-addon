"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SwaggerGatewayInterface = void 0;

var _JoiT2 = require("../types/JoiT");

var _SwaggerEndpointStruct2 = require("./SwaggerEndpointStruct");

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
const SwaggerEndpointStruct = _flowRuntime.default.tdz(() => _SwaggerEndpointStruct2.SwaggerEndpointStruct);

const JoiT = _flowRuntime.default.tdz(() => _JoiT2.JoiT);

const SwaggerGatewayInterface = _flowRuntime.default.type("SwaggerGatewayInterface", SwaggerGatewayInterface => {
  const Endpoint = SwaggerGatewayInterface.typeParameter("Endpoint", undefined, _flowRuntime.default.ref(SwaggerEndpointStruct));
  return _flowRuntime.default.object(_flowRuntime.default.property("getEndpointByName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.Class(_flowRuntime.default.existential()))))), _flowRuntime.default.property("getEndpointName", _flowRuntime.default.function(_flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("getStandardActionEndpoint", _flowRuntime.default.function(_flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential())))), _flowRuntime.default.property("getEndpoint", _flowRuntime.default.function(_flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential())))), _flowRuntime.default.property("swaggerDefinitionFor", _flowRuntime.default.function(_flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.param("opts", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.return(Endpoint))), _flowRuntime.default.property("getSchema", _flowRuntime.default.function(_flowRuntime.default.param("asRecordName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref(JoiT)))));
});

exports.SwaggerGatewayInterface = SwaggerGatewayInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS087QUFBQSxnRkFDTSwrQ0FETjtBQUFBLFNBRUwsNEJBQ0EsaUZBQWtCLHFDQUFRLDZCQUFSLENBQWxCLDhCQUFtQyw4QkFBQywyQkFBTSxrQ0FBTixDQUFELENBQW5DLEdBREEsRUFHQSwrRUFBZ0IseUNBQVksNkJBQVosQ0FBaEIsRUFBb0MsdUNBQVUsNkJBQVYsQ0FBcEMsOEJBQXVELDZCQUF2RCxHQUhBLEVBS0EseUZBQTBCLHlDQUFZLDZCQUFaLENBQTFCLEVBQThDLHVDQUFVLDZCQUFWLENBQTlDLDhCQUFpRSwyQkFBTSxrQ0FBTixDQUFqRSxHQUxBLEVBT0EsMkVBQVkseUNBQVksNkJBQVosQ0FBWixFQUFnQyx1Q0FBVSw2QkFBVixDQUFoQyw4QkFBbUQsMkJBQU0sa0NBQU4sQ0FBbkQsR0FQQSxFQVNBLG9GQUFxQix5Q0FBWSw2QkFBWixDQUFyQixFQUF5Qyx1Q0FBVSw2QkFBVixDQUF6QyxFQUEyRCxtQ0FBTSw4QkFBQyxrQ0FBRCxDQUFOLENBQTNELDhCQUEyRSxRQUEzRSxHQVRBLEVBV0EseUVBQVUsMkNBQWMsNkJBQWQsQ0FBViw4QkFBaUMsOEJBQWpDLEdBWEEsQ0FGSztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgSm9pVCB9IGZyb20gJy4uL3R5cGVzL0pvaVQnO1xuaW1wb3J0IHR5cGUgeyBTd2FnZ2VyRW5kcG9pbnRTdHJ1Y3QgfSBmcm9tICcuL1N3YWdnZXJFbmRwb2ludFN0cnVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dhZ2dlckdhdGV3YXlJbnRlcmZhY2U8XG4gIEVuZHBvaW50ID0gU3dhZ2dlckVuZHBvaW50U3RydWN0XG4+IHtcbiAgZ2V0RW5kcG9pbnRCeU5hbWUoYXNOYW1lOiBzdHJpbmcpOiA/Q2xhc3M8Kj47XG5cbiAgZ2V0RW5kcG9pbnROYW1lKGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZyk6IHN0cmluZztcblxuICBnZXRTdGFuZGFyZEFjdGlvbkVuZHBvaW50KGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZyk6IENsYXNzPCo+O1xuXG4gIGdldEVuZHBvaW50KGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZyk6IENsYXNzPCo+O1xuXG4gIHN3YWdnZXJEZWZpbml0aW9uRm9yKGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZywgb3B0czogP29iamVjdCk6IEVuZHBvaW50O1xuXG4gIGdldFNjaGVtYShhc1JlY29yZE5hbWU6IHN0cmluZyk6IEpvaVQ7XG59XG4iXX0=