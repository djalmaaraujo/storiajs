var expect = chai.expect;
var api = new StoriaAPI();

describe("StoriaClient", function() {
  var m = {};

  beforeEach(function () {
    m.client = new StoriaClient(api);
  });

  describe("#constructor", function() {

    it("expect to exists (dumb)", function() {
      expect(m.client).to.be.an.instanceof(StoriaClient);
    });

    it("expect to receive StoriaAPI as the default parameter", function() {
      expect(m.client.api).to.be.an.instanceof(StoriaAPI);
    });
  });

  describe("#bindGlobalHandler", function() {
    it("call bindGlobalHandler if handlers array is empty", function() {
      var spy = sinon.spy(m.client, 'bindGlobalHandler');

      m.client.setup();

      expect(spy.called).true
    });

    it("expect to bind have globalHandler option with default content as A", function() {
      expect(m.client.api.defaults.globalHandler).equal("a");
    });
  });

  describe("#searchForHandlers", function() {
    it("expect to have a empty handlers array for no data-storia elements found");
    it("expect to add handlers to handlers array based on the amount of data-storia elements in the dom");
  });

  describe("#bindHandlers", function() {
    it("expect to add delegate click event to the parent element of a data-storia element");
  });

  describe("#getTemplate", function() {
  });

  describe("#appendTemplate", function() {
  });

  describe("#changeState", function() {
  });

  describe("#getTargetElement", function() {
  });
});
