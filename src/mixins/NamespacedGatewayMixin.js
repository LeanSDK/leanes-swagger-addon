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
    initializeMixin, meta, property, method,
    Utils: { inflect }
  } = Module.NS;

  Module.defineMixin(__filename, (BaseClass) => {
    @initializeMixin
    class Mixin extends BaseClass {
      @meta static object = {};

      @method namespaces(): string[] {
        return [
          'admining',
          'globaling',
          'guesting',
          'modeling',
          'personing',
          'sharing'
        ];
      }

      @property get joinedNamespacesMask(): RegExp {
        return new RegExp(`^(${this.namespaces().join('|')})_`);
      }

      @method getTrimmedEndpointName(asResourse: string, asAction: string): string {
        const vsPath = `${inflect.underscore(asResourse)}_${asAction}_endpoint`
          .replace(/\//g, '_')
          .replace(/\_+/g, '_')
          .replace(this.joinedNamespacesMask, '');
        return inflect.camelize(vsPath);
      }

      @method getEndpoint(asResourse: string, asAction: string): Class<*> {
        return this.getEndpointByName(
          this.getEndpointName(asResourse, asAction)
        ) ||
        this.getEndpointByName(
          this.getTrimmedEndpointName(asResourse, asAction)
        ) ||
        this.getStandardActionEndpoint(asResourse, asAction);
      }
    }
    return Mixin;
  });
}
