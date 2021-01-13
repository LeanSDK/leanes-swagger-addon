const { expect, assert } = require('chai');
const sinon = require('sinon');
const SwaggerAddon = require("../../../src/index.js").default;
const LeanES = require('leanes/src/leanes').default;
const {
  initialize, partOf, nameBy, meta, constant, mixin, property, method, attribute, action, plugin,
  Utils: { joi, filesListSync }
} = LeanES.NS;

describe('Gateway', () => {
  describe('.new', () => {
    expect(() => {
      it('should create new gateway', () => {

        @initialize
        @pligin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/config/lib`;
        }
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY', {
          endpoints: {}
        });
      });
    });
  });
  describe('.swaggerDefinitionFor', () => {
    it('should get swagger definition for action', () => {

      @initialize
      @pligin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
        @constant ROOT = `${__dirname}/config/lib`;
      }

      @initialize
      @partOf(Test)
      class ApplicationGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'ApplicationGateway';
        @meta static object = {};
      }
      const gateway = ApplicationGateway.new('TEST_GATEWAY');
      gateway.initializeNotifier('TEST_GATEWAY123');
      const voEndpointForDetailAction = gateway.swaggerDefinitionFor('test', 'detail', {
        keyName: 'test',
        entityName: 'test',
        recordName: null
      }, true);
      assert.instanceOf(voEndpointForDetailAction, Test.NS.DetailEndpoint);
      const voEndpointForUndoAction = gateway.swaggerDefinitionFor('test', 'undo', {
        keyName: 'test',
        entityName: 'test',
        recordName: null,
      }, true);
      assert.isDefined(Test.NS.TestUndoEndpoint);
      assert.instanceOf(voEndpointForUndoAction, Test.NS.TestUndoEndpoint);
      const voEndpointForTestAction = gateway.swaggerDefinitionFor('test/', 'test', {
        keyName: 'test',
        entityName: 'test',
        recordName: null
      }, false);
      assert.isDefined(Test.NS.TestTestEndpoint);
      assert.instanceOf(voEndpointForTestAction, Test.NS.TestTestEndpoint);
      const voEndpointForAnyAction = gateway.swaggerDefinitionFor('test/', 'any', {
        keyName: 'test',
        entityName: 'test',
        recordName: null
      }, false);
      assert.instanceOf(voEndpointForAnyAction, Test.NS.Endpoint);
      const voEndpointForTestListAction = gateway.swaggerDefinitionFor('test/', 'list', {
        keyName: 'test',
        entityName: 'test',
        recordName: null
      }, false);
      assert.instanceOf(voEndpointForTestListAction, Test.NS.TestListEndpoint);
    });
  });
});