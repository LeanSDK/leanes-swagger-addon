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
    initialize, partOf, mixin, meta, nameBy,
    Utils: { statuses, joi }
  } = Module.NS;

  const HTTP_NOT_FOUND = statuses('not found');
  const HTTP_CONFLICT = statuses('conflict');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');

  @initialize
  @partOf(Module)
  @mixin(CrudEndpointMixin)
  class ModelingUpdateEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema)
        .header('Authorization', joi.string().required(), `
          Authorization header for internal services.
        `)
        .body(this.itemSchema.required(), `
          The data to replace the
          ${this.itemEntityName} with.
        `)
        .response(this.itemSchema, `
          The replaced ${this.itemEntityName}.
        `)
        .error(HTTP_NOT_FOUND)
        .error(HTTP_CONFLICT)
        .error(UNAUTHORIZED)
        .error(UPGRADE_REQUIRED)
        .summary(`
          Replace the ${this.itemEntityName}.
        `)
        .description(`
          Replaces an existing
          ${this.itemEntityName} with the
          request body and returns the new document.
        `);
    }
  }
}
