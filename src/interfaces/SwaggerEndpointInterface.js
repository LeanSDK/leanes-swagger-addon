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
import type { SwaggerGatewayInterface } from './SwaggerGatewayInterface';

export interface SwaggerEndpointInterface<
  Gateway = SwaggerGatewayInterface
> {
  gateway: Gateway;

  tag(asName: string): SwaggerEndpointInterface;

  header(
    name: string,
    schema: JoiT,
    description: ?string
  ): SwaggerEndpointInterface;

  pathParam(
    name: string,
    schema: JoiT,
    description: ?string
  ): SwaggerEndpointInterface;

  queryParam(
    name: string,
    schema: JoiT,
    description: ?string
  ): SwaggerEndpointInterface;

  body(
    schema: JoiT,
    mimes: ?(Array | string),
    description: ?string
  ): SwaggerEndpointInterface;

  response(
    status: (number | string | JoiT | null),
    schema: ?(JoiT | string | Array),
    mimes: ?(Array | string),
    description: ?string
  ): SwaggerEndpointInterface;

  error(
    status: string | number,
    description: ?string
  ): SwaggerEndpointInterface;

  summary(asSummary: string): SwaggerEndpointInterface;

  description(asDescription: string): SwaggerEndpointInterface;

  deprecated(abDeprecated: boolean): SwaggerEndpointInterface;
}
