"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _JoiT2 = require("../types/JoiT");

var _SwaggerGatewayInterface2 = require("../interfaces/SwaggerGatewayInterface");

var _SwaggerEndpointInterface2 = require("../interfaces/SwaggerEndpointInterface");

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
const SwaggerEndpointInterface = _flowRuntime.default.tdz(() => _SwaggerEndpointInterface2.SwaggerEndpointInterface);

const SwaggerGatewayInterface = _flowRuntime.default.tdz(() => _SwaggerGatewayInterface2.SwaggerGatewayInterface);

const JoiT = _flowRuntime.default.tdz(() => _JoiT2.JoiT);

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    Proxy,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    Utils: {
      inflect,
      assign
    }
  } = Module.NS;
  let SwaggerGateway = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SwaggerGateway", _flowRuntime.default.extends(Proxy), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_schemas", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_endpointsPath", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("getEndpointByName", _flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.Class(_flowRuntime.default.existential())))), _flowRuntime.default.method("getEndpointName", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("getStandardActionEndpoint", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()))), _flowRuntime.default.method("getEndpoint", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()))), _flowRuntime.default.method("swaggerDefinitionFor", _flowRuntime.default.param("asResourse", _flowRuntime.default.string()), _flowRuntime.default.param("asAction", _flowRuntime.default.string()), _flowRuntime.default.param("opts", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface))), _flowRuntime.default.method("getSchema", _flowRuntime.default.param("asRecordName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.nullable(_flowRuntime.default.ref(JoiT))))), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SwaggerGateway extends Proxy {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_schemas", _descriptor, this);

      _flowRuntime.default.ref(SwaggerGatewayInterface).assert(this);
    }

    get _endpointsPath() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert(`${this.ApplicationModule.NS.ROOT}/endpoints`);
    }

    getEndpointByName(asName) {
      let _asNameType = _flowRuntime.default.string();

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.Class(_flowRuntime.default.existential())));

      _flowRuntime.default.param("asName", _asNameType).assert(asName);

      try {
        return _returnType2.assert(this.ApplicationModule.NS[asName]);
      } catch (e) {}
    }

    getEndpointName(asResourse, asAction) {
      let _asResourseType = _flowRuntime.default.string();

      let _asActionType = _flowRuntime.default.string();

      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

      _flowRuntime.default.param("asResourse", _asResourseType).assert(asResourse);

      _flowRuntime.default.param("asAction", _asActionType).assert(asAction);

      const vsPath = `${asResourse}_${asAction}_endpoint`.replace(/\//g, '_').replace(/\_+/g, '_');
      return _returnType3.assert(inflect.camelize(vsPath));
    }

    getStandardActionEndpoint(asResourse, asAction) {
      let _asResourseType2 = _flowRuntime.default.string();

      let _asActionType2 = _flowRuntime.default.string();

      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()));

      _flowRuntime.default.param("asResourse", _asResourseType2).assert(asResourse);

      _flowRuntime.default.param("asAction", _asActionType2).assert(asAction);

      const vsEndpointName = `${inflect.camelize(asAction)}Endpoint`;
      return _returnType4.assert(this.getEndpointByName(vsEndpointName) || this.ApplicationModule.NS.SwaggerEndpoint);
    }

    getEndpoint(asResourse, asAction) {
      let _asResourseType3 = _flowRuntime.default.string();

      let _asActionType3 = _flowRuntime.default.string();

      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()));

      _flowRuntime.default.param("asResourse", _asResourseType3).assert(asResourse);

      _flowRuntime.default.param("asAction", _asActionType3).assert(asAction);

      const vsEndpointName = this.getEndpointName(asResourse, asAction);
      return _returnType5.assert(this.getEndpointByName(vsEndpointName) || this.getStandardActionEndpoint(asResourse, asAction));
    }

    swaggerDefinitionFor(asResourse, asAction, opts) {
      let _asResourseType4 = _flowRuntime.default.string();

      let _asActionType4 = _flowRuntime.default.string();

      let _optsType = _flowRuntime.default.nullable(_flowRuntime.default.ref("object"));

      const _returnType6 = _flowRuntime.default.return(_flowRuntime.default.ref(SwaggerEndpointInterface));

      _flowRuntime.default.param("asResourse", _asResourseType4).assert(asResourse);

      _flowRuntime.default.param("asAction", _asActionType4).assert(asAction);

      _flowRuntime.default.param("opts", _optsType).assert(opts);

      const vcEndpoint = this.getEndpoint(asResourse, asAction);
      const options = assign({}, opts, {
        gateway: this
      });
      return _returnType6.assert(vcEndpoint.new(options));
    }

    getSchema(asRecordName) {
      let _asRecordNameType = _flowRuntime.default.string();

      const _returnType7 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

      _flowRuntime.default.param("asRecordName", _asRecordNameType).assert(asRecordName);

      if (this._schemas[asRecordName] == null) {
        this._schemas[asRecordName] = this.ApplicationModule.NS[asRecordName].schema;
      }

      return _returnType7.assert(this._schemas[asRecordName]);
    }

  }, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_schemas", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_endpointsPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_endpointsPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpointByName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointByName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpointName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpoint"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "swaggerDefinitionFor", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerDefinitionFor"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getSchema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getSchema"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvU3dhZ2dlckdhdGV3YXkuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiUHJveHkiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiVXRpbHMiLCJpbmZsZWN0IiwiYXNzaWduIiwiTlMiLCJTd2FnZ2VyR2F0ZXdheSIsIl9lbmRwb2ludHNQYXRoIiwiQXBwbGljYXRpb25Nb2R1bGUiLCJST09UIiwiZ2V0RW5kcG9pbnRCeU5hbWUiLCJhc05hbWUiLCJlIiwiZ2V0RW5kcG9pbnROYW1lIiwiYXNSZXNvdXJzZSIsImFzQWN0aW9uIiwidnNQYXRoIiwicmVwbGFjZSIsImNhbWVsaXplIiwiZ2V0U3RhbmRhcmRBY3Rpb25FbmRwb2ludCIsInZzRW5kcG9pbnROYW1lIiwiU3dhZ2dlckVuZHBvaW50IiwiZ2V0RW5kcG9pbnQiLCJzd2FnZ2VyRGVmaW5pdGlvbkZvciIsIm9wdHMiLCJ2Y0VuZHBvaW50Iiwib3B0aW9ucyIsImdhdGV3YXkiLCJuZXciLCJnZXRTY2hlbWEiLCJhc1JlY29yZE5hbWUiLCJfc2NoZW1hcyIsInNjaGVtYSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFDQTs7OztBQWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O2VBTWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxLQURJO0FBRUpDLElBQUFBLFVBRkk7QUFFUUMsSUFBQUEsTUFGUjtBQUVnQkMsSUFBQUEsSUFGaEI7QUFFc0JDLElBQUFBLFFBRnRCO0FBRWdDQyxJQUFBQSxNQUZoQztBQUV3Q0MsSUFBQUEsTUFGeEM7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUE7QUFBWDtBQUhILE1BSUZW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YXRCQyxRQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhc0IsRUFidEI7QUFBQTtBQUFBLG9GQWV0QkEsUUFmc0IsOEtBbUJ0QkMsTUFuQnNCLCtLQXlCdEJBLE1BekJzQix1TEFnQ3RCQSxNQWhDc0IsbUxBcUN0QkEsTUFyQ3NCLDhLQTBDdEJBLE1BMUNzQiw0S0FrRHRCQSxNQWxEc0I7QUF5RDFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBKb2lUIH0gZnJvbSAnLi4vdHlwZXMvSm9pVCc7XG5pbXBvcnQgdHlwZSB7IFN3YWdnZXJHYXRld2F5SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Td2FnZ2VyR2F0ZXdheUludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFN3YWdnZXJFbmRwb2ludEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvU3dhZ2dlckVuZHBvaW50SW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUHJveHksXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnksXG4gICAgVXRpbHM6IHsgaW5mbGVjdCwgYXNzaWduIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU3dhZ2dlckdhdGV3YXkgZXh0ZW5kcyBQcm94eSBpbXBsZW1lbnRzIFN3YWdnZXJHYXRld2F5SW50ZXJmYWNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IF9zY2hlbWFzOiB7W2tleTogc3RyaW5nXTogP0pvaVR9ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IF9lbmRwb2ludHNQYXRoKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5BcHBsaWNhdGlvbk1vZHVsZS5OUy5ST09UfS9lbmRwb2ludHNgO1xuICAgIH1cblxuICAgIEBtZXRob2QgZ2V0RW5kcG9pbnRCeU5hbWUoYXNOYW1lOiBzdHJpbmcpOiA/Q2xhc3M8Kj4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQXBwbGljYXRpb25Nb2R1bGUuTlNbYXNOYW1lXTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgQG1ldGhvZCBnZXRFbmRwb2ludE5hbWUoYXNSZXNvdXJzZTogc3RyaW5nLCBhc0FjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHZzUGF0aCA9IGAke2FzUmVzb3Vyc2V9XyR7YXNBY3Rpb259X2VuZHBvaW50YFxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgLnJlcGxhY2UoL1xcXysvZywgJ18nKTtcbiAgICAgIHJldHVybiBpbmZsZWN0LmNhbWVsaXplKHZzUGF0aCk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBnZXRTdGFuZGFyZEFjdGlvbkVuZHBvaW50KGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZyk6IENsYXNzPCo+IHtcbiAgICAgIGNvbnN0IHZzRW5kcG9pbnROYW1lID0gYCR7aW5mbGVjdC5jYW1lbGl6ZShhc0FjdGlvbil9RW5kcG9pbnRgO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW5kcG9pbnRCeU5hbWUodnNFbmRwb2ludE5hbWUpIHx8IHRoaXMuQXBwbGljYXRpb25Nb2R1bGUuTlMuU3dhZ2dlckVuZHBvaW50O1xuICAgIH1cblxuICAgIEBtZXRob2QgZ2V0RW5kcG9pbnQoYXNSZXNvdXJzZTogc3RyaW5nLCBhc0FjdGlvbjogc3RyaW5nKTogQ2xhc3M8Kj4ge1xuICAgICAgY29uc3QgdnNFbmRwb2ludE5hbWUgPSB0aGlzLmdldEVuZHBvaW50TmFtZShhc1Jlc291cnNlLCBhc0FjdGlvbik7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludEJ5TmFtZSh2c0VuZHBvaW50TmFtZSkgfHwgdGhpcy5nZXRTdGFuZGFyZEFjdGlvbkVuZHBvaW50KGFzUmVzb3Vyc2UsIGFzQWN0aW9uKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN3YWdnZXJEZWZpbml0aW9uRm9yKGFzUmVzb3Vyc2U6IHN0cmluZywgYXNBY3Rpb246IHN0cmluZywgb3B0czogP29iamVjdCk6IFN3YWdnZXJFbmRwb2ludEludGVyZmFjZSB7XG4gICAgICBjb25zdCB2Y0VuZHBvaW50ID0gdGhpcy5nZXRFbmRwb2ludChhc1Jlc291cnNlLCBhc0FjdGlvbik7XG4gICAgICBjb25zdCBvcHRpb25zID0gYXNzaWduKHt9LCBvcHRzLCB7XG4gICAgICAgIGdhdGV3YXk6IHRoaXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZjRW5kcG9pbnQubmV3KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIEBtZXRob2QgZ2V0U2NoZW1hKGFzUmVjb3JkTmFtZTogc3RyaW5nKTogSm9pVCB7XG4gICAgICBpZiAodGhpcy5fc2NoZW1hc1thc1JlY29yZE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc2NoZW1hc1thc1JlY29yZE5hbWVdID0gdGhpcy5BcHBsaWNhdGlvbk1vZHVsZS5OU1thc1JlY29yZE5hbWVdLnNjaGVtYTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWFzW2FzUmVjb3JkTmFtZV07XG4gICAgfVxuICB9XG59XG4iXX0=