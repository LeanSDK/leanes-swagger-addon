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

import type { JoiT } from '../types/JoiT';

export default (Module) => {
  const {
    SwaggerEndpoint,
    initializeMixin, meta, property, method,
    Utils: {_, joi, inflect}
  } = Module.NS;

  Module.defineMixin(__filename, (BaseClass) => {
    @initializeMixin
    class Mixin extends BaseClass {
      @meta static object = {};

      @property _keyName: ?string = null;

      @property _entityName: ?string = null;

      @property _recordName: ?string = null;

      @property _schema: ?object = null;

      @property get keyName(): string {
        const name = this._keyName || this._entityName;
        if (SwaggerEndpoint.keyNames[name] == null) {
          SwaggerEndpoint.keyNames[name] = inflect.singularize(inflect.underscore(name));
        }
        return SwaggerEndpoint.keyNames[name];
      }

      @property get itemEntityName(): string {
        const name = this._entityName;
        if (SwaggerEndpoint.itemEntityNames[name] == null) {
          SwaggerEndpoint.itemEntityNames[name] = inflect.singularize(inflect.underscore(name));
        }
        return SwaggerEndpoint.itemEntityNames[name];
      }

      @property get listEntityName(): string {
        const name = this._entityName;
        if (SwaggerEndpoint.listEntityNames[name] == null) {
          SwaggerEndpoint.listEntityNames[name] = inflect.pluralize(inflect.underscore(name));
        }
        return SwaggerEndpoint.listEntityNames[name];
      }

      @property get schema(): JoiT {
        return this._schema;
      }

      @property get listSchema(): JoiT {
        const name = `${this._entityName}|${this._recordName}`;
        if (SwaggerEndpoint.listSchemas[name] == null) {
          SwaggerEndpoint.listSchemas[name] = joi.object({
            meta: joi.object(),
            [`${this.listEntityName}`]: joi.array().items(this.schema)
          });
        }
        return SwaggerEndpoint.listSchemas[name];
      }

      @property get itemSchema(): JoiT {
        const name = `${this._entityName}|${this._recordName}`;
        if (SwaggerEndpoint.itemSchemas[name] == null) {
          SwaggerEndpoint.itemSchemas[name] = joi.object({
            [`${this.itemEntityName}`]: this.schema
          });
        }
        return SwaggerEndpoint.itemSchemas[name];
      }

      @property get keySchema(): JoiT {
        return joi.string().required().description('The key of the objects.');
      }

      @property get querySchema(): JoiT {
        return joi.string().empty('{}').optional().default('{}');
      }

      @property get executeQuerySchema(): JoiT {
        return joi.object({
          query: joi.object().required()
        }).required();
      }

      @property get bulkResponseSchema(): JoiT {
        return joi.object({
          success: joi.boolean()
        });
      }

      @property get versionSchema(): JoiT {
        return joi.string().required().description('The version of api endpoint in semver format `^x.x`');
      }

      @property get ApplicationModule(): Class<*> {
        return (this.gateway && this.gateway.ApplicationModule) || this.Module;
      }

      constructor(...args) {
        super(... args);
        const [ options ] = args;
        const { keyName, entityName, recordName } = options;
        this._keyName = keyName;
        this._entityName = entityName;
        this._recordName = recordName;
        if ((recordName != null) && _.isString(recordName)) {
          const vsRecordName = ((rn) => {
            if (!/Record$/.test(rn)) {
              rn += 'Record';
            }
            return rn;
          })(inflect.camelize(recordName));
          const voSchema = this.gateway != null
            ? this.gateway.getSchema(vsRecordName)
            : this.ApplicationModule.NS[vsRecordName].schema;
          this._schema = voSchema;
        }
        if (this._schema == null) {
          this._schema = joi.object();
        }
      }
    }
    return Mixin;
  });
}
