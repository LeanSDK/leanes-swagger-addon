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