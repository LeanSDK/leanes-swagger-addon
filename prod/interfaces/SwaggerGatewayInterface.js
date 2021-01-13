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