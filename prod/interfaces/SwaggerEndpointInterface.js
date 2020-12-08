"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SwaggerEndpointInterface = void 0;

var _JoiT2 = require("../types/JoiT");

var _SwaggerGatewayInterface2 = require("./SwaggerGatewayInterface");

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
const SwaggerGatewayInterface = _flowRuntime.default.tdz(() => _SwaggerGatewayInterface2.SwaggerGatewayInterface);

const JoiT = _flowRuntime.default.tdz(() => _JoiT2.JoiT);

const SwaggerEndpointInterface = _flowRuntime.default.type("SwaggerEndpointInterface", SwaggerEndpointInterface => {
  const Gateway = SwaggerEndpointInterface.typeParameter("Gateway", undefined, _flowRuntime.default.ref(SwaggerGatewayInterface));
  return _flowRuntime.default.object(_flowRuntime.default.property("gateway", Gateway), _flowRuntime.default.property("tag", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("header", _flowRuntime.default.function(_flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("pathParam", _flowRuntime.default.function(_flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("queryParam", _flowRuntime.default.function(_flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("body", _flowRuntime.default.function(_flowRuntime.default.param("schema", _flowRuntime.default.ref(JoiT)), _flowRuntime.default.param("mimes", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()))), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("response", _flowRuntime.default.function(_flowRuntime.default.param("status", _flowRuntime.default.union(_flowRuntime.default.number(), _flowRuntime.default.string(), _flowRuntime.default.ref(JoiT), _flowRuntime.default.null())), _flowRuntime.default.param("schema", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.ref(JoiT), _flowRuntime.default.string(), _flowRuntime.default.array()))), _flowRuntime.default.param("mimes", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.array(), _flowRuntime.default.string()))), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("error", _flowRuntime.default.function(_flowRuntime.default.param("status", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.param("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("summary", _flowRuntime.default.function(_flowRuntime.default.param("asSummary", _flowRuntime.default.string()), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("description", _flowRuntime.default.function(_flowRuntime.default.param("asDescription", _flowRuntime.default.string()), _flowRuntime.default.return(SwaggerEndpointInterface))), _flowRuntime.default.property("deprecated", _flowRuntime.default.function(_flowRuntime.default.param("abDeprecated", _flowRuntime.default.boolean()), _flowRuntime.default.return(SwaggerEndpointInterface))));
});

exports.SwaggerEndpointInterface = SwaggerEndpointInterface;