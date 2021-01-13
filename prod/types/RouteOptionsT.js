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