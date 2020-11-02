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
    Utils: { statuses, joi }
  } = Module.NS;

  const UNAUTHORIZED = statuses('unauthorized');
  const UPGRADE_REQUIRED = statuses('upgrade required');

  @initialize
  @mixin(CrudEndpointMxin)
  @module(Module)
  class CountEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionShema);
      this.queryParam('query', this.querySchema, `
        The query for counting
        ${this.listEntityName}.
      `);
      this.response(joi.numner(), `
        The count of ${this.listEntityName}
      `);
      this.error(UNAUTHORIZED);
      this.error(UPGRADE_REQUIRED);
      this.summary(`
        Count of filtered ${this.listEntityName}
      `);
      this.description(`
        Retrieves a count of filtered
        ${this.listEntityName} by using query.
      `);
    }
  }
}
