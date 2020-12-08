"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _JoiT2 = require("../types/JoiT");

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
const JoiT = _flowRuntime.default.tdz(() => _JoiT2.JoiT);

var _default = Module => {
  const {
    SwaggerEndpoint,
    initializeMixin,
    meta,
    property,
    method,
    Utils: {
      _,
      joi,
      inflect
    }
  } = Module.NS;
  Module.defineMixin(__filename, BaseClass => {
    var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_keyName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("_entityName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("_recordName", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("_schema", _flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _flowRuntime.default.method("keyName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("itemEntityName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("listEntityName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("schema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("listSchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("itemSchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("keySchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("querySchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("executeQuerySchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("bulkResponseSchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("versionSchema", _flowRuntime.default.return(_flowRuntime.default.ref(JoiT))), _flowRuntime.default.method("ApplicationModule", _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())))), _dec2 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec4 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec5 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.ref("object"))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      get keyName() {
        const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

        const name = this._keyName || this._entityName;

        if (SwaggerEndpoint.keyNames[name] == null) {
          SwaggerEndpoint.keyNames[name] = inflect.singularize(inflect.underscore(name));
        }

        return _returnType.assert(SwaggerEndpoint.keyNames[name]);
      }

      get itemEntityName() {
        const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

        const name = this._entityName;

        if (SwaggerEndpoint.itemEntityNames[name] == null) {
          SwaggerEndpoint.itemEntityNames[name] = inflect.singularize(inflect.underscore(name));
        }

        return _returnType2.assert(SwaggerEndpoint.itemEntityNames[name]);
      }

      get listEntityName() {
        const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

        const name = this._entityName;

        if (SwaggerEndpoint.listEntityNames[name] == null) {
          SwaggerEndpoint.listEntityNames[name] = inflect.pluralize(inflect.underscore(name));
        }

        return _returnType3.assert(SwaggerEndpoint.listEntityNames[name]);
      }

      get schema() {
        const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType4.assert(this._schema);
      }

      get listSchema() {
        const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        const name = `${this._entityName}|${this._recordName}`;

        if (SwaggerEndpoint.listSchemas[name] == null) {
          SwaggerEndpoint.listSchemas[name] = joi.object({
            meta: joi.object(),
            [`${this.listEntityName}`]: joi.array().items(this.schema)
          });
        }

        return _returnType5.assert(SwaggerEndpoint.listSchemas[name]);
      }

      get itemSchema() {
        const _returnType6 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        const name = `${this._entityName}|${this._recordName}`;

        if (SwaggerEndpoint.itemSchemas[name] == null) {
          SwaggerEndpoint.itemSchemas[name] = joi.object({
            [`${this.itemEntityName}`]: this.schema
          });
        }

        return _returnType6.assert(SwaggerEndpoint.itemSchemas[name]);
      }

      get keySchema() {
        const _returnType7 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType7.assert(joi.string().required().description('The key of the objects.'));
      }

      get querySchema() {
        const _returnType8 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType8.assert(joi.string().empty('{}').optional().default('{}'));
      }

      get executeQuerySchema() {
        const _returnType9 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType9.assert(joi.object({
          query: joi.object().required()
        }).required());
      }

      get bulkResponseSchema() {
        const _returnType10 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType10.assert(joi.object({
          success: joi.boolean()
        }));
      }

      get versionSchema() {
        const _returnType11 = _flowRuntime.default.return(_flowRuntime.default.ref(JoiT));

        return _returnType11.assert(joi.string().required().description('The version of api endpoint in semver format `^x.x`'));
      }

      get ApplicationModule() {
        const _returnType12 = _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential()));

        return _returnType12.assert(this.gateway && this.gateway.ApplicationModule || this.Module);
      }

      constructor(...args) {
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "_keyName", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "_entityName", _descriptor2, this);
        (0, _initializerDefineProperty2.default)(this, "_recordName", _descriptor3, this);
        (0, _initializerDefineProperty2.default)(this, "_schema", _descriptor4, this);
        const [options] = args;
        const {
          keyName,
          entityName,
          recordName
        } = options;
        this._keyName = keyName;
        this._entityName = entityName;
        this._recordName = recordName;

        if (recordName != null && _.isString(recordName)) {
          const vsRecordName = (rn => {
            if (!/Record$/.test(rn)) {
              rn += 'Record';
            }

            return rn;
          })(inflect.camelize(recordName));

          const voSchema = this.gateway != null ? this.gateway.getSchema(vsRecordName) : this.ApplicationModule.NS[vsRecordName].schema;
          this._schema = voSchema;
        }

        if (this._schema == null) {
          this._schema = joi.object();
        }
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_keyName", [_dec2, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_entityName", [_dec3, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_recordName", [_dec4, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_schema", [_dec5, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "keyName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keyName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "itemEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemEntityName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listEntityName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "schema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "schema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "itemSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "keySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "querySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "querySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "executeQuerySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "executeQuerySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "bulkResponseSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "bulkResponseSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "versionSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "versionSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ApplicationModule", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "ApplicationModule"), _class2.prototype)), _class2)) || _class) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9DcnVkRW5kcG9pbnRNaXhpbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTd2FnZ2VyRW5kcG9pbnQiLCJpbml0aWFsaXplTWl4aW4iLCJtZXRhIiwicHJvcGVydHkiLCJtZXRob2QiLCJVdGlscyIsIl8iLCJqb2kiLCJpbmZsZWN0IiwiTlMiLCJkZWZpbmVNaXhpbiIsIl9fZmlsZW5hbWUiLCJCYXNlQ2xhc3MiLCJNaXhpbiIsImtleU5hbWUiLCJuYW1lIiwiX2tleU5hbWUiLCJfZW50aXR5TmFtZSIsImtleU5hbWVzIiwic2luZ3VsYXJpemUiLCJ1bmRlcnNjb3JlIiwiaXRlbUVudGl0eU5hbWUiLCJpdGVtRW50aXR5TmFtZXMiLCJsaXN0RW50aXR5TmFtZSIsImxpc3RFbnRpdHlOYW1lcyIsInBsdXJhbGl6ZSIsInNjaGVtYSIsIl9zY2hlbWEiLCJsaXN0U2NoZW1hIiwiX3JlY29yZE5hbWUiLCJsaXN0U2NoZW1hcyIsIm9iamVjdCIsImFycmF5IiwiaXRlbXMiLCJpdGVtU2NoZW1hIiwiaXRlbVNjaGVtYXMiLCJrZXlTY2hlbWEiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicXVlcnlTY2hlbWEiLCJlbXB0eSIsIm9wdGlvbmFsIiwiZGVmYXVsdCIsImV4ZWN1dGVRdWVyeVNjaGVtYSIsInF1ZXJ5IiwiYnVsa1Jlc3BvbnNlU2NoZW1hIiwic3VjY2VzcyIsImJvb2xlYW4iLCJ2ZXJzaW9uU2NoZW1hIiwiQXBwbGljYXRpb25Nb2R1bGUiLCJnYXRld2F5IiwiY29uc3RydWN0b3IiLCJhcmdzIiwib3B0aW9ucyIsImVudGl0eU5hbWUiLCJyZWNvcmROYW1lIiwiaXNTdHJpbmciLCJ2c1JlY29yZE5hbWUiLCJybiIsInRlc3QiLCJjYW1lbGl6ZSIsInZvU2NoZW1hIiwiZ2V0U2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RzdCLElBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FJR0MsUUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFJZ0MsSUFKaEM7QUFBQTtBQUFBLHlHQU1HQSxRQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU1tQyxJQU5uQztBQUFBO0FBQUEseUdBUUdBLFFBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUW1DLElBUm5DO0FBQUE7QUFBQSxxR0FVR0EsUUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFVK0IsSUFWL0I7QUFBQTtBQUFBLCtFQVlHQSxRQVpILG9LQW9CR0EsUUFwQkgsMktBNEJHQSxRQTVCSCxtS0FvQ0dBLFFBcENILCtKQXdDR0EsUUF4Q0gsbUtBbURHQSxRQW5ESCxrS0E2REdBLFFBN0RILG1LQWlFR0EsUUFqRUgsNEtBcUVHQSxRQXJFSCxtTEEyRUdBLFFBM0VILDhLQWlGR0EsUUFqRkgsNktBcUZHQSxRQXJGSDtBQWlIRCxHQWxIRDtBQW1IRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXN3YWdnZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc3dhZ2dlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgSm9pVCB9IGZyb20gJy4uL3R5cGVzL0pvaVQnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLFxuIMKgIMKgVXRpbHM6IHtfLCBqb2ksIGluZmxlY3R9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgTW9kdWxlLmRlZmluZU1peGluKF9fZmlsZW5hbWUsIChCYXNlQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gQGluaXRpYWxpemVNaXhpblxuICAgIGNsYXNzIE1peGluIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgICAgQHByb3BlcnR5IF9rZXlOYW1lOiA/c3RyaW5nID0gbnVsbDtcblxuICAgICAgQHByb3BlcnR5IF9lbnRpdHlOYW1lOiA/c3RyaW5nID0gbnVsbDtcblxuICAgICAgQHByb3BlcnR5IF9yZWNvcmROYW1lOiA/c3RyaW5nID0gbnVsbDtcblxuICAgICAgQHByb3BlcnR5IF9zY2hlbWE6ID9vYmplY3QgPSBudWxsO1xuXG4gICAgICBAcHJvcGVydHkgZ2V0IGtleU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2tleU5hbWUgfHwgdGhpcy5fZW50aXR5TmFtZTtcbiAgICAgICAgaWYgKFN3YWdnZXJFbmRwb2ludC5rZXlOYW1lc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgU3dhZ2dlckVuZHBvaW50LmtleU5hbWVzW25hbWVdID0gaW5mbGVjdC5zaW5ndWxhcml6ZShpbmZsZWN0LnVuZGVyc2NvcmUobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTd2FnZ2VyRW5kcG9pbnQua2V5TmFtZXNbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBnZXQgaXRlbUVudGl0eU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2VudGl0eU5hbWU7XG4gICAgICAgIGlmIChTd2FnZ2VyRW5kcG9pbnQuaXRlbUVudGl0eU5hbWVzW25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICBTd2FnZ2VyRW5kcG9pbnQuaXRlbUVudGl0eU5hbWVzW25hbWVdID0gaW5mbGVjdC5zaW5ndWxhcml6ZShpbmZsZWN0LnVuZGVyc2NvcmUobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTd2FnZ2VyRW5kcG9pbnQuaXRlbUVudGl0eU5hbWVzW25hbWVdO1xuICAgICAgfVxuXG4gICAgICBAcHJvcGVydHkgZ2V0IGxpc3RFbnRpdHlOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9lbnRpdHlOYW1lO1xuICAgICAgICBpZiAoU3dhZ2dlckVuZHBvaW50Lmxpc3RFbnRpdHlOYW1lc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgU3dhZ2dlckVuZHBvaW50Lmxpc3RFbnRpdHlOYW1lc1tuYW1lXSA9IGluZmxlY3QucGx1cmFsaXplKGluZmxlY3QudW5kZXJzY29yZShuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN3YWdnZXJFbmRwb2ludC5saXN0RW50aXR5TmFtZXNbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBnZXQgc2NoZW1hKCk6IEpvaVQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICAgICAgfVxuXG4gICAgICBAcHJvcGVydHkgZ2V0IGxpc3RTY2hlbWEoKTogSm9pVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHt0aGlzLl9lbnRpdHlOYW1lfXwke3RoaXMuX3JlY29yZE5hbWV9YDtcbiAgICAgICAgaWYgKFN3YWdnZXJFbmRwb2ludC5saXN0U2NoZW1hc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgU3dhZ2dlckVuZHBvaW50Lmxpc3RTY2hlbWFzW25hbWVdID0gam9pLm9iamVjdCh7XG4gICAgICAgICAgICBtZXRhOiBqb2kub2JqZWN0KCksXG4gICAgICAgICAgICBbYCR7dGhpcy5saXN0RW50aXR5TmFtZX1gXTogam9pLmFycmF5KCkuaXRlbXModGhpcy5zY2hlbWEpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN3YWdnZXJFbmRwb2ludC5saXN0U2NoZW1hc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgQHByb3BlcnR5IGdldCBpdGVtU2NoZW1hKCk6IEpvaVQge1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7dGhpcy5fZW50aXR5TmFtZX18JHt0aGlzLl9yZWNvcmROYW1lfWA7XG4gICAgICAgIGlmIChTd2FnZ2VyRW5kcG9pbnQuaXRlbVNjaGVtYXNbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIFN3YWdnZXJFbmRwb2ludC5pdGVtU2NoZW1hc1tuYW1lXSA9IGpvaS5vYmplY3Qoe1xuICAgICAgICAgICAgW2Ake3RoaXMuaXRlbUVudGl0eU5hbWV9YF06IHRoaXMuc2NoZW1hXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN3YWdnZXJFbmRwb2ludC5pdGVtU2NoZW1hc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgQHByb3BlcnR5IGdldCBrZXlTY2hlbWEoKTogSm9pVCB7XG4gICAgICAgIHJldHVybiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5kZXNjcmlwdGlvbignVGhlIGtleSBvZiB0aGUgb2JqZWN0cy4nKTtcbiAgICAgIH1cblxuICAgICAgQHByb3BlcnR5IGdldCBxdWVyeVNjaGVtYSgpOiBKb2lUIHtcbiAgICAgICAgcmV0dXJuIGpvaS5zdHJpbmcoKS5lbXB0eSgne30nKS5vcHRpb25hbCgpLmRlZmF1bHQoJ3t9Jyk7XG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBnZXQgZXhlY3V0ZVF1ZXJ5U2NoZW1hKCk6IEpvaVQge1xuICAgICAgICByZXR1cm4gam9pLm9iamVjdCh7XG4gICAgICAgICAgcXVlcnk6IGpvaS5vYmplY3QoKS5yZXF1aXJlZCgpXG4gICAgICAgIH0pLnJlcXVpcmVkKCk7XG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBnZXQgYnVsa1Jlc3BvbnNlU2NoZW1hKCk6IEpvaVQge1xuICAgICAgICByZXR1cm4gam9pLm9iamVjdCh7XG4gICAgICAgICAgc3VjY2Vzczogam9pLmJvb2xlYW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgQHByb3BlcnR5IGdldCB2ZXJzaW9uU2NoZW1hKCk6IEpvaVQge1xuICAgICAgICByZXR1cm4gam9pLnN0cmluZygpLnJlcXVpcmVkKCkuZGVzY3JpcHRpb24oJ1RoZSB2ZXJzaW9uIG9mIGFwaSBlbmRwb2ludCBpbiBzZW12ZXIgZm9ybWF0IGBeeC54YCcpO1xuICAgICAgfVxuXG4gICAgICBAcHJvcGVydHkgZ2V0IEFwcGxpY2F0aW9uTW9kdWxlKCk6IENsYXNzPCo+IHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdhdGV3YXkgJiYgdGhpcy5nYXRld2F5LkFwcGxpY2F0aW9uTW9kdWxlKSB8fCB0aGlzLk1vZHVsZTtcbiAgICAgIH1cblxuICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi4gYXJncyk7XG4gICAgICAgIGNvbnN0IFsgb3B0aW9ucyBdID0gYXJncztcbiAgICAgICAgY29uc3QgeyBrZXlOYW1lLCBlbnRpdHlOYW1lLCByZWNvcmROYW1lIH0gPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9rZXlOYW1lID0ga2V5TmFtZTtcbiAgICAgICAgdGhpcy5fZW50aXR5TmFtZSA9IGVudGl0eU5hbWU7XG4gICAgICAgIHRoaXMuX3JlY29yZE5hbWUgPSByZWNvcmROYW1lO1xuICAgICAgICBpZiAoKHJlY29yZE5hbWUgIT0gbnVsbCkgJiYgXy5pc1N0cmluZyhyZWNvcmROYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHZzUmVjb3JkTmFtZSA9ICgocm4pID0+IHtcbiAgICAgICAgICAgIGlmICghL1JlY29yZCQvLnRlc3Qocm4pKSB7XG4gICAgICAgICAgICAgIHJuICs9ICdSZWNvcmQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJuO1xuICAgICAgICAgIH0pKGluZmxlY3QuY2FtZWxpemUocmVjb3JkTmFtZSkpO1xuICAgICAgICAgIGNvbnN0IHZvU2NoZW1hID0gdGhpcy5nYXRld2F5ICE9IG51bGxcbiAgICAgICAgICAgID8gdGhpcy5nYXRld2F5LmdldFNjaGVtYSh2c1JlY29yZE5hbWUpXG4gICAgICAgICAgICA6IHRoaXMuQXBwbGljYXRpb25Nb2R1bGUuTlNbdnNSZWNvcmROYW1lXS5zY2hlbWE7XG4gICAgICAgICAgdGhpcy5fc2NoZW1hID0gdm9TY2hlbWE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NjaGVtYSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fc2NoZW1hID0gam9pLm9iamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==