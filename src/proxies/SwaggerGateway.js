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
import type { SwaggerGatewayInterface } from '../interfaces/SwaggerGatewayInterface';
import type { SwaggerEndpointInterface } from '../interfaces/SwaggerEndpointInterface';

export default (Module) => {
  const {
    Proxy,
    initialize, partOf, meta, property, method, nameBy,
    Utils: { inflect, assign }
  } = Module.NS;

  @initialize
  @partOf(Module)
  class SwaggerGateway extends Proxy implements SwaggerGatewayInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property _schemas: {[key: string]: ?JoiT} = {};

    @property get _endpointsPath(): string {
      return `${this.ApplicationModule.NS.ROOT}/endpoints`;
    }

    @method getEndpointByName(asName: string): ?Class<*> {
      try {
        return this.ApplicationModule.NS[asName];
      } catch (e) {}
    }

    @method getEndpointName(asResourse: string, asAction: string): string {
      const vsPath = `${asResourse}_${asAction}_endpoint`
        .replace(/\//g, '_')
        .replace(/\_+/g, '_');
      return inflect.camelize(vsPath);
    }

    @method getStandardActionEndpoint(asResourse: string, asAction: string): Class<*> {
      const vsEndpointName = `${inflect.camelize(asAction)}Endpoint`;
      return this.getEndpointByName(vsEndpointName) || this.ApplicationModule.NS.SwaggerEndpoint;
    }

    @method getEndpoint(asResourse: string, asAction: string): Class<*> {
      const vsEndpointName = this.getEndpointName(asResourse, asAction);
      return this.getEndpointByName(vsEndpointName) || this.getStandardActionEndpoint(asResourse, asAction);
    }

    @method swaggerDefinitionFor(asResourse: string, asAction: string, opts: ?object): SwaggerEndpointInterface {
      const vcEndpoint = this.getEndpoint(asResourse, asAction);
      const options = assign({}, opts, {
        gateway: this
      });
      return vcEndpoint.new(options);
    }

    @method getSchema(asRecordName: string): JoiT {
      if (this._schemas[asRecordName] == null) {
        this._schemas[asRecordName] = this.ApplicationModule.NS[asRecordName].schema;
      }
      return this._schemas[asRecordName];
    }
  }
}
