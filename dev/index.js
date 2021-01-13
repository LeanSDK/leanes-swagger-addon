"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.SwaggerGatewayInterface = exports.SwaggerEndpointInterface = exports.SwaggerEndpointStruct = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _SwaggerEndpoint = _interopRequireDefault(require("./endpoints/SwaggerEndpoint"));

var _SwaggerResource = _interopRequireDefault(require("./resources/SwaggerResource"));

var _SwaggerGateway = _interopRequireDefault(require("./proxies/SwaggerGateway"));

var _SwaggerRouter = _interopRequireDefault(require("./proxies/SwaggerRouter"));

var _CrudEndpointMixin = _interopRequireDefault(require("./mixins/CrudEndpointMixin"));

var _ModelingGatewayMixin = _interopRequireDefault(require("./mixins/ModelingGatewayMixin"));

var _NamespacedGatewayMixin = _interopRequireDefault(require("./mixins/NamespacedGatewayMixin"));

var _CreateEndpoint = _interopRequireDefault(require("./endpoints/CreateEndpoint"));

var _ListEndpoint = _interopRequireDefault(require("./endpoints/ListEndpoint"));

var _DetailEndpoint = _interopRequireDefault(require("./endpoints/DetailEndpoint"));

var _UpdateEndpoint = _interopRequireDefault(require("./endpoints/UpdateEndpoint"));

var _DeleteEndpoint = _interopRequireDefault(require("./endpoints/DeleteEndpoint"));

var _DestroyEndpoint = _interopRequireDefault(require("./endpoints/DestroyEndpoint"));

var _CountEndpoint = _interopRequireDefault(require("./endpoints/CountEndpoint"));

var _LengthEndpoint = _interopRequireDefault(require("./endpoints/LengthEndpoint"));

var _BulkDeleteEndpoint = _interopRequireDefault(require("./endpoints/BulkDeleteEndpoint"));

var _BulkDestroyEndpoint = _interopRequireDefault(require("./endpoints/BulkDestroyEndpoint"));

var _ModelingCreateEndpoint = _interopRequireDefault(require("./endpoints/ModelingCreateEndpoint"));

var _ModelingListEndpoint = _interopRequireDefault(require("./endpoints/ModelingListEndpoint"));

var _ModelingDetailEndpoint = _interopRequireDefault(require("./endpoints/ModelingDetailEndpoint"));

var _ModelingUpdateEndpoint = _interopRequireDefault(require("./endpoints/ModelingUpdateEndpoint"));

var _ModelingDeleteEndpoint = _interopRequireDefault(require("./endpoints/ModelingDeleteEndpoint"));

var _ModelingDestroyEndpoint = _interopRequireDefault(require("./endpoints/ModelingDestroyEndpoint"));

var _ModelingQueryEndpoint = _interopRequireDefault(require("./endpoints/ModelingQueryEndpoint"));

var _ModelingBulkDeleteEndpoint = _interopRequireDefault(require("./endpoints/ModelingBulkDeleteEndpoint"));

var _ModelingBulkDestroyEndpoint = _interopRequireDefault(require("./endpoints/ModelingBulkDestroyEndpoint"));

var _SwaggerFacadeMixin = _interopRequireDefault(require("./mixins/SwaggerFacadeMixin"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

var _SwaggerEndpointStruct = require("./interfaces/SwaggerEndpointStruct");

exports.SwaggerEndpointStruct = _SwaggerEndpointStruct.SwaggerEndpointStruct;

var _SwaggerEndpointInterface = require("./interfaces/SwaggerEndpointInterface");

exports.SwaggerEndpointInterface = _SwaggerEndpointInterface.SwaggerEndpointInterface;

var _SwaggerGatewayInterface = require("./interfaces/SwaggerGatewayInterface");

exports.SwaggerGatewayInterface = _SwaggerGatewayInterface.SwaggerGatewayInterface;

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
var _default = Module => {
  const {
    initializeMixin,
    meta,
    constant,
    method,
    extend
  } = Module.NS;
  return ['SwaggerAddon', BaseClass => {
    var _dec, _dec2, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("SWAGGER_ROUTER", _flowRuntime.default.any()), _flowRuntime.default.property("SWAGGER_GATEWAY", _flowRuntime.default.any()))), _dec2 = extend('SwaggerFacadeMixin', 'Facade'), _dec(_class = _dec2(_class = (0, _SwaggerFacadeMixin.default)(_class = (0, _CreateEndpoint.default)(_class = (0, _ListEndpoint.default)(_class = (0, _DetailEndpoint.default)(_class = (0, _UpdateEndpoint.default)(_class = (0, _DeleteEndpoint.default)(_class = (0, _DestroyEndpoint.default)(_class = (0, _CountEndpoint.default)(_class = (0, _LengthEndpoint.default)(_class = (0, _BulkDeleteEndpoint.default)(_class = (0, _BulkDestroyEndpoint.default)(_class = (0, _ModelingCreateEndpoint.default)(_class = (0, _ModelingListEndpoint.default)(_class = (0, _ModelingDetailEndpoint.default)(_class = (0, _ModelingUpdateEndpoint.default)(_class = (0, _ModelingDeleteEndpoint.default)(_class = (0, _ModelingDestroyEndpoint.default)(_class = (0, _ModelingQueryEndpoint.default)(_class = (0, _ModelingBulkDeleteEndpoint.default)(_class = (0, _ModelingBulkDestroyEndpoint.default)(_class = (0, _ModelingGatewayMixin.default)(_class = (0, _NamespacedGatewayMixin.default)(_class = (0, _CrudEndpointMixin.default)(_class = (0, _SwaggerEndpoint.default)(_class = (0, _SwaggerResource.default)(_class = (0, _SwaggerGateway.default)(_class = (0, _SwaggerRouter.default)(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      constructor(...args) {
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "SWAGGER_ROUTER", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "SWAGGER_GATEWAY", _descriptor2, this);
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SWAGGER_ROUTER", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 'SwaggerRouter';
      }
    }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SWAGGER_GATEWAY", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 'SwaggerGateway';
      }
    })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class;
  }];
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJjb25zdGFudCIsIm1ldGhvZCIsImV4dGVuZCIsIk5TIiwiQmFzZUNsYXNzIiwiU3dhZ2dlckZhY2FkZU1peGluIiwiQ3JlYXRlRW5kcG9pbnQiLCJMaXN0RW5kcG9pbnQiLCJEZXRhaWxFbmRwb2ludCIsIlVwZGF0ZUVuZHBvaW50IiwiRGVsZXRlRW5kcG9pbnQiLCJEZXN0cm95RW5kcG9pbnQiLCJDb3VudEVuZHBvaW50IiwiTGVuZ3RoRW5kcG9pbnQiLCJCdWxrRGVsZXRlRW5kcG9pbnQiLCJCdWxrRGVzdHJveUVuZHBvaW50IiwiTW9kZWxpbmdDcmVhdGVFbmRwb2ludCIsIk1vZGVsaW5nTGlzdEVuZHBvaW50IiwiTW9kZWxpbmdEZXRhaWxFbmRwb2ludCIsIk1vZGVsaW5nVXBkYXRlRW5kcG9pbnQiLCJNb2RlbGluZ0RlbGV0ZUVuZHBvaW50IiwiTW9kZWxpbmdEZXN0cm95RW5kcG9pbnQiLCJNb2RlbGluZ1F1ZXJ5RW5kcG9pbnQiLCJNb2RlbGluZ0J1bGtEZWxldGVFbmRwb2ludCIsIk1vZGVsaW5nQnVsa0Rlc3Ryb3lFbmRwb2ludCIsIk1vZGVsaW5nR2F0ZXdheU1peGluIiwiTmFtZXNwYWNlZEdhdGV3YXlNaXhpbiIsIkNydWRFbmRwb2ludE1peGluIiwiU3dhZ2dlckVuZHBvaW50IiwiU3dhZ2dlclJlc291cmNlIiwiU3dhZ2dlckdhdGV3YXkiLCJTd2FnZ2VyUm91dGVyIiwiTWl4aW4iLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQXJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBMENnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUNhQyxJQUFBQSxJQURiO0FBQ21CQyxJQUFBQSxRQURuQjtBQUM2QkMsSUFBQUEsTUFEN0I7QUFDcUNDLElBQUFBO0FBRHJDLE1BRUZMLE1BQU0sQ0FBQ00sRUFGWDtBQUlBLFNBQU8sQ0FBQyxjQUFELEVBQWtCQyxTQUFELElBQWU7QUFBQTs7QUFDckMsZ0RBQU8saUVBa0NhQSxTQWxDYixHQW1DTCx5RUFuQ0ssRUFxQ0wsMkVBckNLLEVBc0NMLDRFQXRDSyxDQUFQLFdBQVFGLE1BQU0sQ0FBQyxvQkFBRCxFQUF1QixRQUF2QixDQUFkLG1DQUVDRywyQkFGRCxlQUlDQyx1QkFKRCxlQUtDQyxxQkFMRCxlQU1DQyx1QkFORCxlQU9DQyx1QkFQRCxlQVFDQyx1QkFSRCxlQVNDQyx3QkFURCxlQVVDQyxzQkFWRCxlQVdDQyx1QkFYRCxlQVlDQywyQkFaRCxlQWFDQyw0QkFiRCxlQWNDQywrQkFkRCxlQWVDQyw2QkFmRCxlQWdCQ0MsK0JBaEJELGVBaUJDQywrQkFqQkQsZUFrQkNDLCtCQWxCRCxlQW1CQ0MsZ0NBbkJELGVBb0JDQyw4QkFwQkQsZUFxQkNDLG1DQXJCRCxlQXNCQ0Msb0NBdEJELGVBd0JDQyw2QkF4QkQsZUF5QkNDLCtCQXpCRCxlQTBCQ0MsMEJBMUJELGVBNEJDQyx3QkE1QkQsZUE2QkNDLHdCQTdCRCxlQThCQ0MsdUJBOUJELGVBK0JDQyxzQkEvQkQsV0FpQ0NqQyxlQWpDRCx3Q0FBTyxNQWtDRGtDLEtBbENDLFNBa0NhNUIsU0FsQ2IsQ0FrQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxLQWxDOUIsVUFtQ2U2QixNQW5DZixHQW1Dd0IsRUFuQ3hCLHVFQW1DR2xDLElBbkNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEdBcUNHQyxRQXJDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFxQzZCLGVBckM3QjtBQUFBO0FBQUEsc0dBc0NHQSxRQXRDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFzQzhCLGdCQXRDOUI7QUFBQTtBQUFBO0FBd0NELEdBekNNLENBQVA7QUEwQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgU3dhZ2dlckVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL1N3YWdnZXJFbmRwb2ludCc7XG5pbXBvcnQgU3dhZ2dlclJlc291cmNlIGZyb20gJy4vcmVzb3VyY2VzL1N3YWdnZXJSZXNvdXJjZSc7XG5pbXBvcnQgU3dhZ2dlckdhdGV3YXkgZnJvbSAnLi9wcm94aWVzL1N3YWdnZXJHYXRld2F5JztcbmltcG9ydCBTd2FnZ2VyUm91dGVyIGZyb20gJy4vcHJveGllcy9Td2FnZ2VyUm91dGVyJztcblxuaW1wb3J0IENydWRFbmRwb2ludE1peGluIGZyb20gJy4vbWl4aW5zL0NydWRFbmRwb2ludE1peGluJztcbmltcG9ydCBNb2RlbGluZ0dhdGV3YXlNaXhpbiBmcm9tICcuL21peGlucy9Nb2RlbGluZ0dhdGV3YXlNaXhpbic7XG5pbXBvcnQgTmFtZXNwYWNlZEdhdGV3YXlNaXhpbiBmcm9tICcuL21peGlucy9OYW1lc3BhY2VkR2F0ZXdheU1peGluJztcblxuaW1wb3J0IENyZWF0ZUVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL0NyZWF0ZUVuZHBvaW50JztcbmltcG9ydCBMaXN0RW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTGlzdEVuZHBvaW50JztcbmltcG9ydCBEZXRhaWxFbmRwb2ludCBmcm9tICcuL2VuZHBvaW50cy9EZXRhaWxFbmRwb2ludCc7XG5pbXBvcnQgVXBkYXRlRW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvVXBkYXRlRW5kcG9pbnQnO1xuaW1wb3J0IERlbGV0ZUVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL0RlbGV0ZUVuZHBvaW50JztcbmltcG9ydCBEZXN0cm95RW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvRGVzdHJveUVuZHBvaW50JztcblxuaW1wb3J0IENvdW50RW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvQ291bnRFbmRwb2ludCc7XG5pbXBvcnQgTGVuZ3RoRW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTGVuZ3RoRW5kcG9pbnQnO1xuXG5pbXBvcnQgQnVsa0RlbGV0ZUVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL0J1bGtEZWxldGVFbmRwb2ludCc7XG5pbXBvcnQgQnVsa0Rlc3Ryb3lFbmRwb2ludCBmcm9tICcuL2VuZHBvaW50cy9CdWxrRGVzdHJveUVuZHBvaW50JztcblxuaW1wb3J0IE1vZGVsaW5nQ3JlYXRlRW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTW9kZWxpbmdDcmVhdGVFbmRwb2ludCc7XG5pbXBvcnQgTW9kZWxpbmdMaXN0RW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTW9kZWxpbmdMaXN0RW5kcG9pbnQnO1xuaW1wb3J0IE1vZGVsaW5nRGV0YWlsRW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTW9kZWxpbmdEZXRhaWxFbmRwb2ludCc7XG5pbXBvcnQgTW9kZWxpbmdVcGRhdGVFbmRwb2ludCBmcm9tICcuL2VuZHBvaW50cy9Nb2RlbGluZ1VwZGF0ZUVuZHBvaW50JztcbmltcG9ydCBNb2RlbGluZ0RlbGV0ZUVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL01vZGVsaW5nRGVsZXRlRW5kcG9pbnQnO1xuaW1wb3J0IE1vZGVsaW5nRGVzdHJveUVuZHBvaW50IGZyb20gJy4vZW5kcG9pbnRzL01vZGVsaW5nRGVzdHJveUVuZHBvaW50JztcblxuaW1wb3J0IE1vZGVsaW5nUXVlcnlFbmRwb2ludCBmcm9tICcuL2VuZHBvaW50cy9Nb2RlbGluZ1F1ZXJ5RW5kcG9pbnQnO1xuXG5pbXBvcnQgTW9kZWxpbmdCdWxrRGVsZXRlRW5kcG9pbnQgZnJvbSAnLi9lbmRwb2ludHMvTW9kZWxpbmdCdWxrRGVsZXRlRW5kcG9pbnQnO1xuaW1wb3J0IE1vZGVsaW5nQnVsa0Rlc3Ryb3lFbmRwb2ludCBmcm9tICcuL2VuZHBvaW50cy9Nb2RlbGluZ0J1bGtEZXN0cm95RW5kcG9pbnQnO1xuXG5pbXBvcnQgU3dhZ2dlckZhY2FkZU1peGluIGZyb20gJy4vbWl4aW5zL1N3YWdnZXJGYWNhZGVNaXhpbic7XG5cbmV4cG9ydCB0eXBlIHsgU3dhZ2dlckVuZHBvaW50U3RydWN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzL1N3YWdnZXJFbmRwb2ludFN0cnVjdCc7XG5leHBvcnQgdHlwZSB7IFN3YWdnZXJFbmRwb2ludEludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9Td2FnZ2VyRW5kcG9pbnRJbnRlcmZhY2UnO1xuZXhwb3J0IHR5cGUgeyBTd2FnZ2VyR2F0ZXdheUludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9Td2FnZ2VyR2F0ZXdheUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxpemVNaXhpbiwgbWV0YSwgY29uc3RhbnQsIG1ldGhvZCwgZXh0ZW5kXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgcmV0dXJuIFsnU3dhZ2dlckFkZG9uJywgKEJhc2VDbGFzcykgPT4ge1xuICAgIHJldHVybiBAZXh0ZW5kKCdTd2FnZ2VyRmFjYWRlTWl4aW4nLCAnRmFjYWRlJylcblxuICAgIEBTd2FnZ2VyRmFjYWRlTWl4aW5cblxuICAgIEBDcmVhdGVFbmRwb2ludFxuICAgIEBMaXN0RW5kcG9pbnRcbiAgICBARGV0YWlsRW5kcG9pbnRcbiAgICBAVXBkYXRlRW5kcG9pbnRcbiAgICBARGVsZXRlRW5kcG9pbnRcbiAgICBARGVzdHJveUVuZHBvaW50XG4gICAgQENvdW50RW5kcG9pbnRcbiAgICBATGVuZ3RoRW5kcG9pbnRcbiAgICBAQnVsa0RlbGV0ZUVuZHBvaW50XG4gICAgQEJ1bGtEZXN0cm95RW5kcG9pbnRcbiAgICBATW9kZWxpbmdDcmVhdGVFbmRwb2ludFxuICAgIEBNb2RlbGluZ0xpc3RFbmRwb2ludFxuICAgIEBNb2RlbGluZ0RldGFpbEVuZHBvaW50XG4gICAgQE1vZGVsaW5nVXBkYXRlRW5kcG9pbnRcbiAgICBATW9kZWxpbmdEZWxldGVFbmRwb2ludFxuICAgIEBNb2RlbGluZ0Rlc3Ryb3lFbmRwb2ludFxuICAgIEBNb2RlbGluZ1F1ZXJ5RW5kcG9pbnRcbiAgICBATW9kZWxpbmdCdWxrRGVsZXRlRW5kcG9pbnRcbiAgICBATW9kZWxpbmdCdWxrRGVzdHJveUVuZHBvaW50XG5cbiAgICBATW9kZWxpbmdHYXRld2F5TWl4aW5cbiAgICBATmFtZXNwYWNlZEdhdGV3YXlNaXhpblxuICAgIEBDcnVkRW5kcG9pbnRNaXhpblxuXG4gICAgQFN3YWdnZXJFbmRwb2ludFxuICAgIEBTd2FnZ2VyUmVzb3VyY2VcbiAgICBAU3dhZ2dlckdhdGV3YXlcbiAgICBAU3dhZ2dlclJvdXRlclxuXG4gICAgQGluaXRpYWxpemVNaXhpblxuICAgIGNsYXNzIE1peGluIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgICAgQGNvbnN0YW50IFNXQUdHRVJfUk9VVEVSID0gJ1N3YWdnZXJSb3V0ZXInO1xuICAgICAgQGNvbnN0YW50IFNXQUdHRVJfR0FURVdBWSA9ICdTd2FnZ2VyR2F0ZXdheSc7XG4gICAgfVxuICB9XVxufVxuIl19