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

export type { SwaggerEndpointStruct } from './interfaces/SwaggerEndpointStruct';
export type { SwaggerEndpointInterface } from './interfaces/SwaggerEndpointInterface';
export type { SwaggerGatewayInterface } from './interfaces/SwaggerGatewayInterface';

export default (Module) => {
  const {
    initializeMixin, meta, constant, method, patch
  } = Module.NS;

  return ['SwaggerAddon', (BaseClass: Class<Module.NS.Module>) => {
    @initializeMixin
    class Mixin extends BaseClass {
      @meta static object = {};

      @constant SWAGGER_ROUTER = 'SwaggerRouter';
      @constant SWAGGER_GATEWAY = 'SwaggerGateway';

      @method static including() {
        patch(this.NS.Facade, this.NS.FacadePatch);
      }
    }
    require('./endpoints/SwaggerEndpoint').default(Mixin);
    require('./resources/SwaggerResource').default(Mixin);
    require('./proxies/SwaggerGateway').default(Mixin);
    require('./proxies/SwaggerRouter').default(Mixin);

    require('./mixins/ConfigurableMixin').default(Mixin);
    require('./mixins/MemoryConfigurationMixin').default(Mixin);
    require('./mixins/MemoryConfigurationMixin').default(Mixin);

    require('./endpoints/CreateEndpoint').default(Mixin);
    require('./endpoints/ListEndpoint').default(Mixin);
    require('./endpoints/DetailEndpoint').default(Mixin);
    require('./endpoints/UpdateEndpoint').default(Mixin);
    require('./endpoints/DeleteEndpoint').default(Mixin);
    require('./endpoints/DestroyEndpoint').default(Mixin);

    require('./endpoints/CountEndpoint').default(Mixin);
    require('./endpoints/LengthEndpoint').default(Mixin);

    require('./endpoints/BulkDeleteEndpoint').default(Mixin);
    require('./endpoints/BulkDestroyEndpoint').default(Mixin);

    require('./endpoints/ModelingCreateEndpoint').default(Mixin);
    require('./endpoints/ModelingListEndpoint').default(Mixin);
    require('./endpoints/ModelingDetailEndpoint').default(Mixin);
    require('./endpoints/ModelingUpdateEndpoint').default(Mixin);
    require('./endpoints/ModelingDeleteEndpoint').default(Mixin);
    require('./endpoints/ModelingDestroyEndpoint').default(Mixin);

    require('./endpoints/ModelingQueryEndpoint').default(Mixin);

    require('./endpoints/ModelingBulkDeleteEndpoint').default(Mixin);
    require('./endpoints/ModelingBulkDestroyEndpoint').default(Mixin);

    require('./patches/FacadePatch').default(Mixin);

    return Mixin;
  }]
}
