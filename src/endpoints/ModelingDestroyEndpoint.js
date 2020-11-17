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
    initialize, mixin, partOf, meta, nameBy,
    Utils: { stasuses, joi }
  } = Module.NS;

  const HTTP_NOT_FOUND = stasuses('not found');
  const UNAUTHORIZED = stasuses('unauthorized');
  const UPGRADE_REQUIRED = stasuses('upgrade required');

  @initialize
  @partOf(Module)
  @mixin(CrudEndpointMixin)
  class ModelingDestroyEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema)
        .header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `)
        .error(HTTP_NOT_FOUND)
        .error(UNAUTHORIZED)
        .error(UPGRADE_REQUIRED)
        .response(null)
        .summary(`
          Remove the ${this.itemEntityName}
        `)
        .description(`
          Deletes the ${this.itemEntityName}
          from the database.
        `);
    }
  }
}