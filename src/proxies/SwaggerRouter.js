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
    Router,
    initialize, partOf, nameBy, meta, method,
  } = Module.NS;

  @initialize
  @partOf(Module)
  class SwaggerRouter extends Router {
    @nameBy static __filename = __filename;
    @meta static object = {};
    @method map() {
      this.namespace('swagger', {module: '', prefix: "swagger"}, function () {
        this.get('/', {to: 'swagger#index', recordName: null})
        this.get('/swagger.json', {to: 'swagger#spec', recordName: null})
        this.get('/*', {to: 'swagger#static', recordName: null})
      })
    }
  }
}
