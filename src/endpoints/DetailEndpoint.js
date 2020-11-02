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
    CrudEndpointMxin,
    initialize, module, mixin, nameBy, meta,
    Utils: { statuses }
  } = Module.NS;

  const HTTP_NOT_FOUND = statuses('not found');
  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');

  @initialize
  @mixin(CrudEndpointMxin)
  @module(Module)
  class DetailEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema);
      this.response(this.itemSchema, `
        The ${this.itemEntityName}.
      `);
      this.error(HTTP_NOT_FOUND);
      this.error(UNAUTHORIZED);
      this.error(UPGRADE_REQUIRED);
      this.summary(`
        Fetch the ${this.itemEntityName}
      `);
      this.description(`
        Retrieves the
        ${this.itemEntityName} by its key.
      `);
    }
  }
}
