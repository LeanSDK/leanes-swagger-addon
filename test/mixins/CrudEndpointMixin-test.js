const { expect, assert } = require('chai');
const sinon = require('sinon');
const _ = require('lodash');
const joi = require('joi');
const SwaggerAddon = require("../../../src/index.js").default;
const LeanES = require('leanes/src/leanes').default;
const {
  initialize, partOf, nameBy, meta, mixin, plugin
} = LeanES.NS;

describe('CrudEndpointMixin', () => {
  describe('.new', () => {
    it('should create CRUD endpoint instance', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        gateway: TestCrudGateway.new('TestGateway')
      });
      assert.instanceOf(endpoint, TestCrudEndpoint);
    });
  });
  describe('.keyName', () => {
    it('should get endpoint key name', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        gateway: TestCrudGateway.new('TestGateway')
      });
      const { keyName } = endpoint;
      assert.equal(keyName, 'cucumber');
    });
  });
  describe('.itemEntityName', () => {
    it('should get endpoint item entity name', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        gateway: TestCrudGateway.new('TestGateway')
      });
      const { itemEntityName } = endpoint;
      assert.equal(itemEntityName, 'cucumber');
    });
  });
  describe('.listEntityName', () => {
    it('should get endpoint list entity name', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        gateway: TestCrudGateway.new('TestGateway')
      });
      const { listEntityName } = endpoint;
      assert.equal(listEntityName, 'cucumbers');
    });
  });
  describe('.schema', () => {
    it('should get endpoint schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { schema } = endpoint;
      assert.equal(schema, TestRecord.schema);
    });
  });
  describe('.listSchema', () => {
    it('should get endpoint list schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { listSchema } = endpoint;
      assert.deepEqual(listSchema, joi.object, {
        meta: joi.object(),
        cucumbers: joi.array().items(TestRecord.schema)
      });
    });
  });
  describe('.itemSchema', () => {
    it('should get endpoint item schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { itemSchema } = endpoint;
      assert.deepEqual(itemSchema, joi.object, {
        cucumber: TestRecord.schema
      });
    });
  });
  describe('.querySchema', () => {
    it('should get endpoint query schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { querySchema } = endpoint;
      assert.deepEqual(querySchema, joi.string().empty('{}').optional().default(
        '{}', 'The query for finding objects.'
      ));
    });
  });
  describe('.bulkResponseSchema', () => {
    it('should get endpoint bulk response schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { bulkResponseSchema } = endpoint;
      assert.deepEqual(bulkResponseSchema, joi.object({
        success: joi.boolean()
      }));
    });
  });
  describe('.versionSchema', () => {
    it('should get endpoint version schema', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestRecord extends LeanES.NS.Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      @mixin(Test.NS.CrudEndpointMixin)
      class TestCrudEndpoint extends Test.NS.Endpoint {
        @nameBy static __filename = 'TestCrudEndpoint';
        @meta static object = {};
      }

      @initialize
      @partOf(Test)
      class TestCrudGateway extends Test.NS.Gateway {
        @nameBy static __filename = 'TestCrudGateway';
        @meta static object = {};
      }
      const gateway = TestCrudGateway.new('TestGateway');
      gateway.initializeNotifier('TEST');
      const endpoint = TestCrudEndpoint.new({
        entityName: 'cucumber',
        recordName: 'TestRecord',
        gateway: gateway
      });
      const { versionSchema } = endpoint;
      assert.deepEqual(versionSchema, joi.string().required().description(
        'The version of api endpoint in semver format `^x.x`'
      ));
    });
  });
});