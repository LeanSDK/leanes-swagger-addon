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

export default (Module) => {
  const {
    SwaggerEndpoint,
    CrudEndpointMixin,
    initialize, partOf, meta, nameBy, mixin,
    Utils: { statuses, joi }
  } = Module.NS;

  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');

  @initialize
  @partOf(Module)
  @mixin(CrudEndpointMixin)
  class ModelingQueryEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema)
        .header('Authorization', joi.string().required(), `
          Authorization header is required.
        `)
        .body(this.executeQuerySchema, `
          The query for execute.
        `)
        .response(joi.array().items(joi.any()), `
          Any result.
        `)
        .error(UNAUTHORIZED)
        .error(UPGRADE_REQUIRED)
        .summary(`
          Execute some query
        `)
        .description(`
          This endpoint will been used from HttpCollectionMixin
        `);
    }
  }
}
