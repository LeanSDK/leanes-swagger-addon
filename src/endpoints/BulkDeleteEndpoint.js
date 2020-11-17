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
    initialize, partOf, mixin, nameBy, meta,
    Utils: { statuses }
  } = Module.NS;

  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');

  @initialize
  @partOf(Module)
  @mixin(CrudEndpointMxin)
  class BulkDeleteEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionShema)
        .queryParam('query', this.querySchema, `
          The query for finding
          ${this.listEntityName}.
        `)
        .response(null)
        .error(UNAUTHORIZED)
        .error(UPGRADE_REQUIRED)
        .summary(`
          Hide of filtered ${this.listEntityName}
        `)
        .description(`
          Hide a list of filtered
          ${this.listEntityName} by using query.
        `);
    }
  }
}
