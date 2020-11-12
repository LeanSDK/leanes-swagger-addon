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

import type { JoiT } from '@leansdk/leanes/src/leanes';
import type { SwaggerGatewayInterface } from '../interfaces/SwaggerGatewayInterface';
import type { SwaggerEndpointInterface } from '../interfaces/SwaggerEndpointInterface';

const indexOf = [].indexOf;

export default (Module) => {
  const {
    CoreObject,
    Proxy,
    ConfigurableMixin,
    initialize, module, meta, property, method, nameBy,
    Utils: { inflect, assign }
  } = Module.NS;

  @initialize
  @module(Module)
  @mixin(ConfigurableMixin)
  class SwaggerGateway extends Proxy implements SwaggerGatewayInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    // ipsMultitonKey = Symbol.for '~multitonKey' #PointerT @protected multitonKey: String
    // iplKnownEndpoints = PointerT(Gateway.protected({
    @property _knownEndpoints: string[] = null;

    // ipcApplicationModule = PointerT @protected ApplicationModule: MaybeG SubsetG Module
    // iphSchemas = PointerT(Gateway.protected({
    @property _schemas: {[key: string]: ?JoiT} = null;

    // ipsEndpointsPath = PointerT(Gateway.protected({
    @property get _endpointsPath(): string {
      return `${this.ApplicationModule.NS.ROOT}/endpoints`;
    }

    @method tryLoadEndpoint(asName: string): ?Class<CoreObject> {
      if (indexOf.call(this._knownEndpoints, asName) >= 0) {
        const vsEndpointPath = `${this._endpointsPath}/${asName}`;
        try {
          return require(vsEndpointPath)(this.ApplicationModule);
        } catch (error) {}
      }
    }

    @method getEndpointByName(asName: string): ?Class<CoreObject> {
      return this.ApplicationModule.NS[asName] || this.tryLoadEndpoint(asName);
    }

    @method getEndpointName(asResourse: string, asAction: string): string {
      const vsPath = `${asResourse}_${asAction}_endpoint`
        .replace(/\//g, '_')
        .replace(/\_+/g, '_');
      return inflect.camelize(vsPath);
    }

    @method getStandardActionEndpoint(asResourse: string, asAction: string): Class<CoreObject> {
      const vsEndpointName = `${inflect.camelize(asAction)}Endpoint`;
      return this.ApplicationModule.NS[vsEndpointName] || this.ApplicationModule.NS.Endpoint;
    }

    @method getEndpoint(asResourse: string, asAction: string): Class<CoreObject> {
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

    constructor() {
      super(... arguments);
      this._schemas = {};
      const vPostfixMask = /\.js$/;
      const vlKnownEndpoints = (()=> {
        try {
          return filesListSync(this._endpointsPath);
        } catch (error) {}
      })();
      this._knownEndpoints = vlKnownEndpoints != null ? vlKnownEndpoints.filter((asFileName) =>
        vPostfixMask.test(asFileName)
      ).map((asFileName) =>
        asFileName.replace(vPostfixMask, '')
      ) : [];
    }
  }
}
