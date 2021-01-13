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