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

import SwaggerEndpoint from './endpoints/SwaggerEndpoint';
import SwaggerResource from './resources/SwaggerResource';
import SwaggerGateway from './proxies/SwaggerGateway';
import SwaggerRouter from './proxies/SwaggerRouter';

import CrudEndpointMixin from './mixins/CrudEndpointMixin';
import ModelingGatewayMixin from './mixins/ModelingGatewayMixin';
import NamespacedGatewayMixin from './mixins/NamespacedGatewayMixin';

import CreateEndpoint from './endpoints/CreateEndpoint';
import ListEndpoint from './endpoints/ListEndpoint';
import DetailEndpoint from './endpoints/DetailEndpoint';
import UpdateEndpoint from './endpoints/UpdateEndpoint';
import DeleteEndpoint from './endpoints/DeleteEndpoint';
import DestroyEndpoint from './endpoints/DestroyEndpoint';

import CountEndpoint from './endpoints/CountEndpoint';
import LengthEndpoint from './endpoints/LengthEndpoint';

import BulkDeleteEndpoint from './endpoints/BulkDeleteEndpoint';
import BulkDestroyEndpoint from './endpoints/BulkDestroyEndpoint';

import ModelingCreateEndpoint from './endpoints/ModelingCreateEndpoint';
import ModelingListEndpoint from './endpoints/ModelingListEndpoint';
import ModelingDetailEndpoint from './endpoints/ModelingDetailEndpoint';
import ModelingUpdateEndpoint from './endpoints/ModelingUpdateEndpoint';
import ModelingDeleteEndpoint from './endpoints/ModelingDeleteEndpoint';
import ModelingDestroyEndpoint from './endpoints/ModelingDestroyEndpoint';

import ModelingQueryEndpoint from './endpoints/ModelingQueryEndpoint';

import ModelingBulkDeleteEndpoint from './endpoints/ModelingBulkDeleteEndpoint';
import ModelingBulkDestroyEndpoint from './endpoints/ModelingBulkDestroyEndpoint';

import SwaggerFacadeMixin from './mixins/SwaggerFacadeMixin';

export type { SwaggerEndpointStruct } from './interfaces/SwaggerEndpointStruct';
export type { SwaggerEndpointInterface } from './interfaces/SwaggerEndpointInterface';
export type { SwaggerGatewayInterface } from './interfaces/SwaggerGatewayInterface';

export default (Module) => {
  const {
    initializeMixin, meta, constant, method, extend
  } = Module.NS;

  return ['SwaggerAddon', (BaseClass) => {
    return @extend('SwaggerFacadeMixin', 'Facade')

    @SwaggerFacadeMixin

    @CreateEndpoint
    @ListEndpoint
    @DetailEndpoint
    @UpdateEndpoint
    @DeleteEndpoint
    @DestroyEndpoint
    @CountEndpoint
    @LengthEndpoint
    @BulkDeleteEndpoint
    @BulkDestroyEndpoint
    @ModelingCreateEndpoint
    @ModelingListEndpoint
    @ModelingDetailEndpoint
    @ModelingUpdateEndpoint
    @ModelingDeleteEndpoint
    @ModelingDestroyEndpoint
    @ModelingQueryEndpoint
    @ModelingBulkDeleteEndpoint
    @ModelingBulkDestroyEndpoint

    @ModelingGatewayMixin
    @NamespacedGatewayMixin
    @CrudEndpointMixin

    @SwaggerEndpoint
    @SwaggerResource
    @SwaggerGateway
    @SwaggerRouter

    @initializeMixin
    class Mixin extends BaseClass {
      @meta static object = {};

      @constant SWAGGER_ROUTER = 'SwaggerRouter';
      @constant SWAGGER_GATEWAY = 'SwaggerGateway';
    }
  }]
}
