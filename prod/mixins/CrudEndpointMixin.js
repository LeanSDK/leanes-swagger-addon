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
    var _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

    return initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      get keyName() {
        const name = this._keyName || this._entityName;

        if (SwaggerEndpoint.keyNames[name] == null) {
          SwaggerEndpoint.keyNames[name] = inflect.singularize(inflect.underscore(name));
        }

        return SwaggerEndpoint.keyNames[name];
      }

      get itemEntityName() {
        const name = this._entityName;

        if (SwaggerEndpoint.itemEntityNames[name] == null) {
          SwaggerEndpoint.itemEntityNames[name] = inflect.singularize(inflect.underscore(name));
        }

        return SwaggerEndpoint.itemEntityNames[name];
      }

      get listEntityName() {
        const name = this._entityName;

        if (SwaggerEndpoint.listEntityNames[name] == null) {
          SwaggerEndpoint.listEntityNames[name] = inflect.pluralize(inflect.underscore(name));
        }

        return SwaggerEndpoint.listEntityNames[name];
      }

      get schema() {
        return this._schema;
      }

      get listSchema() {
        const name = `${this._entityName}|${this._recordName}`;

        if (SwaggerEndpoint.listSchemas[name] == null) {
          SwaggerEndpoint.listSchemas[name] = joi.object({
            meta: joi.object(),
            [`${this.listEntityName}`]: joi.array().items(this.schema)
          });
        }

        return SwaggerEndpoint.listSchemas[name];
      }

      get itemSchema() {
        const name = `${this._entityName}|${this._recordName}`;

        if (SwaggerEndpoint.itemSchemas[name] == null) {
          SwaggerEndpoint.itemSchemas[name] = joi.object({
            [`${this.itemEntityName}`]: this.schema
          });
        }

        return SwaggerEndpoint.itemSchemas[name];
      }

      get keySchema() {
        return joi.string().required().description('The key of the objects.');
      }

      get querySchema() {
        return joi.string().empty('{}').optional().default('{}');
      }

      get executeQuerySchema() {
        return joi.object({
          query: joi.object().required()
        }).required();
      }

      get bulkResponseSchema() {
        return joi.object({
          success: joi.boolean()
        });
      }

      get versionSchema() {
        return joi.string().required().description('The version of api endpoint in semver format `^x.x`');
      }

      get ApplicationModule() {
        return this.gateway && this.gateway.ApplicationModule || this.Module;
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
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_keyName", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_entityName", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_recordName", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_schema", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "keyName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keyName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "itemEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemEntityName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listEntityName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "schema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "schema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "itemSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "keySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "querySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "querySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "executeQuerySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "executeQuerySchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "bulkResponseSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "bulkResponseSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "versionSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "versionSchema"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ApplicationModule", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "ApplicationModule"), _class2.prototype)), _class2)) || _class;
  });
};

exports.default = _default;