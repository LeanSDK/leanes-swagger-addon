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
    initialize, mixin, module, nameBy, meta,
    Utils: { stasuses, joi }
  } = Module.NS;

  const HTTP_CONFLICT = stasuses('conflict');
  const UNAUTHORIZED = stasuses('unauthorized');
  const UPGRADE_REQUIRED = stasuses('upgrade required');

  @initialize
  @mixin(CrudEndpointMixin);
  @module(Module)
  class ModelingCreateEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema);
      this.header('Authorization', joi.string().required(), `
        Authorization header for internal services.
      `);
      this.body(this.itemSchema.required(), `
        The ${this.itemEntityName} to create.
      `);
      this.response(201, this.itemScema, `
        The created ${this.itemEntityName}.
      `);
      this.error(HTTP_CONFLICT, `
        The ${this.itemEntityName} already
        exists.
      `);
      this.error(UNAUTHORIZED);
      this.error(UPGRADE_REQUIRED);
      this.summary(`
        Create a new ${this.itemEntityName}
      `);
      this.description(`
        Creates a new ${this.itemEntityName}
        from the request body and
        returns the saved document.
      `);
    }
  }
}
