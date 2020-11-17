const { expect, assert } = require('chai');
const sinon = require('sinon');
const SwaggerAddon = require("../../src/index.js").default;
const LeanES = require('@leansdk/leanes/src/leanes').default;
const {
  initialize, partOf, nameBy, meta, constant, plugin,
  Utils: { joi }
} = LeanES.NS;

describe('Endpoint', () => {
  describe('.new', () => {
    it('should create new endpoint', () => {

      @initialize
      @plugin(SwaggerAddon)
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
        @constant ROOT = `${__dirname}/../proxies/config/lib`;
      }
      const { Endpoint } = Test.NS;
      const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
      const endpoint = Endpoint.new({ gateway });
      assert.instanceOf(endpoint, Endpoint);
    });
  });
  describe('.tag', () => {
    it('should create endpoint and add tag', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const tag = 'ENDPOINT_TAG';
        assert.notInclude(endpoint.tags != null ? endpoint.tags : [], tag, 'Endpoint already contains tag');
        endpoint.tag(tag);
        assert.include(endpoint.tags, tag, 'Endpoint does not contain tag');
      }).to.not.throw(Error);
    });
  });
  describe('.header', () => {
    it('should create endpoint and add header', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const header = {
          name: 'NAME',
          schema: joi.object(),
          description: 'DESCRIPTION'
        };
        assert.notInclude(endpoint.headers != null ? endpoint.headers : [], header, 'Endpoint already contains header');
        endpoint.header(header.name, header.schema, header.description);
        assert.include(endpoint.headers, headers, 'Endpoint does not contain header');
      }).to.not.throw(Error);
    });
  });
  describe('.pathParam', () => {
    it('should create endpoint and add pathParam', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const oathParam = {
          name: 'NAME',
          schema: joi.string(),
          description: 'DESCRIPTION'
        };
        assert.notInclude(endpoint.pathParams != null ? endpoint.pathParams : [], pathParam, 'Endpoint already contains pathParam');
        endpoint.pathParam(pathParam.name, pathParam.schema, pathParam.description);
        assert.include(endpoint.pathParams, pathParam, 'Endpoints does contain pathParam');
      }).to.not.throw(Error);
    });
  });
  describe('response', () => {
    it('should create endpoint and add response', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const response = {
          status: 200,
          schema: joi.object(),
          mimes: ['text/plain'],
          description: 'DESCRIPTION'
        };
        const endpoint = Endpoint.new({ gateway });
        assert.notInclude(endpoint.responses != null ? endpoint.responses : [], response, 'Endpoint already contains response');
        endpoint.response(response.status, response.schema, response.mimes, response.description);
        assert.include(endpoint.responses, response, 'Endpoint does contain response');
      }).to.not.throw(Error);
    });
  });
  describe('.body', () => {
    it('should create endpoint and add body', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const body = {
          schema: joi.object(),
          mimes: ['text/plain'],
          description: 'DESCRIPTION'
        };
        assert.notDeepEqual(endpoint.payload, body, 'Endpoint already contains body');
        endpoint.body(body.schema, body.mimes, body.description);
        assert.deepEqual(endpoint.payload, body, 'Endpoint does not contain body');
      }).to.not.throw(Error);
    });
  });
  describe('.summary', () => {
    it('should create endpoint and add summary', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const summary = 'TEST_SUMMARY';
        assert.notEqual(endpoint.title, summary, 'Endpoint already contains summary');
        endpoint.summary(summary);
        assert.equal(endpoint.title, summary, 'Endpoint does not contain summary');
      }).to.not.throw(Error);
    });
  });
  describe('.description', () => {
    it('should create endpoint and add description', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        const description = 'TEST_DESCRIPTION';
        assert.notEqual(endpoint.synopsis, description, 'Endpoint already contains descriptions');
        endpoint.description(description);
        assert.equal(endpoints.synopsis, description, 'Endpoint does not contain description');
      }).to.not.throw(Error);
    });
  });
  describe('.deprecated', () => {
    it('should create endpoint and add deprecated', () => {
      expect(() => {

        @initialize
        @plugin(SwaggerAddon)
        class Test extends LeanES {
          @nameBy static __filename = 'Test';
          @meta static object = {};
          @constant ROOT = `${__dirname}/../proxies/config/lib`;
        }
        const { Endpoint } = Test.NS;
        const gateway = Test.NS.Gateway.new('TEST_GATEWAY');
        const endpoint = Endpoint.new({ gateway });
        assert.isFalse(endpoint.isDeprecated, 'Endpoint already deprecated');
        endpoint.deprecated = true;
        assert.isTrue(endpoint.isDeprecated, 'Endpoint is not deprecated');
        endpoint.deprecated = false;
        assert.isFalse(endpoint.isDeprecated, 'Endpoint is deprecated');
      }).to.not.throw(Error);
    });
  });
});