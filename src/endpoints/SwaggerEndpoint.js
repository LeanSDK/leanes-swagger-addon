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

import type { JoiT } from '../types/JoiT';
import type { SwaggerGatewayInterface } from '../interfaces/SwaggerGatewayInterface';
import type { SwaggerEndpointInterface } from '../interfaces/SwaggerEndpointInterface';

export default (Module) => {
  const {
    CoreObject,
    assert,
    initialize, partOf, meta, property, method, nameBy,
    Utils: { inflect, assign }
  } = Module.NS;

  @initialize
  @partOf(Module)
  class SwaggerEndpoint extends CoreObject implements SwaggerEndpointInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property static keyNames: {[key: string]: ?string} = {};

    @property static itemEntityNames: {[key: string]: ?string} = {};

    @property static listEntityNames: {[key: string]: ?string} = {};

    @property static itemSchemas: {[key: string]: ?JoiT} = {};

    @property static listSchemas: {[key: string]: ?JoiT} = {};

    @property gateway: SwaggerGatewayInterface = null;

    @property tags: ?Array<string> = null;

    @property headers: ?Array<object> = null;

    @property pathParams: ?Array<object> = null;

    @property queryParams: ?Array<object> = null;

    @property payload: ?object = null;

    @property responses: ?Array<object> = null;

    @property errors: ?Array<object> = null;

    @property title: ?string = null;

    @property synopsis: ?string = null;

    @property isDeprecated: boolean = false;

    @method tag(asName: string): SwaggerEndpointInterface {
      if (this.tags == null) {
        this.tags = [];
      }
      this.tags.push(asName);
      return this;
    }

    @method header(
      name: string,
      schema: JoiT,
      description: ?string
    ): SwaggerEndpointInterface {
      if (this.headers == null) {
        this.headers = [];
      }
      this.headers.push({ name, schema, description });
      return this;
    }

    @method pathParam(
      name: string,
      schema: JoiT,
      description: ?string
    ): SwaggerEndpointInterface {
      if (this.pathParams == null) {
        this.pathParams = [];
      }
      this.pathParams.push({ name, schema, description });
      return this;
    }

    @method queryParam(
      name: string,
      schema: JoiT,
      description: ?string
    ): SwaggerEndpointInterface {
      if (this.queryParams == null) {
        this.queryParams = [];
      }
      this.queryParams.push({ name, schema, description });
      return this;
    }

    @method body(
      schema: JoiT,
      mimes: ?(Array | string),
      description: ?string
    ): SwaggerEndpointInterface {
      this.payload = { schema, mimes, description };
      return this;
    }

    @method response(
      status: (number | string | JoiT | null),
      schema: ?(JoiT | string | Array),
      mimes: ?(Array | string),
      description: ?string
    ): SwaggerEndpointInterface {
      if (this.responses == null) {
        this.responses = [];
      }
      this.responses.push({ status, schema, mimes, description });
      return this;
    }

    @method error(
      status: string | number,
      description: ?string
    ): SwaggerEndpointInterface {
      if (this.errors == null) {
        this.errors = [];
      }
      this.errors.push({ status, description });
      return this;
    }

    @method summary(asSummary: string): SwaggerEndpointInterface {
      this.title = asSummary;
      return this;
    }

    @method description(asDescription: string): SwaggerEndpointInterface {
      this.synopsis = asDescription;
      return this;
    }

    @method deprecated(abDeprecated: boolean): SwaggerEndpointInterface {
      this.isDeprecated = abDeprecated;
      return this;
    }

    @method static async restoreObject() {
      return assert.fail(`restoreObject method not supported for ${this.name}`);
    }

    @method static async replicateObject() {
      return assert.fail(`replicateObject method not supported for ${this.name}`);
    }

    constructor(...args) {
      super(... args);
      const [ options ] = args;
      ({ gateway: this.gateway } = options);
    }
  }
}
