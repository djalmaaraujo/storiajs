var expect = chai.expect;
var api = new StoriaAPI();
var historyAPI = {
  pushState: function(data, title, path) {}
};


describe("StoriaClient", function() {
  var m = {};

  beforeEach(function () {
    m.client = new StoriaClient(api, historyAPI);
  });

  afterEach(function() {
    $("#sandbox").html('');
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

      expect(m.client.hasNoHandlers()).true;
      expect(spy.called).true;
    });

    it("expect to bind have globalHandler option with default content as A", function() {
      expect(m.client.api.defaults.globalHandler).equal("a");
    });

    it("expect to add click handler to all links that matches with globalHandler", function() {
      var spy = sinon.spy(document, 'querySelector');

      m.client.setup();

      expect(spy.calledWith('body')).true
    });
  });

  describe("#changeState", function() {
    it("expect to receive the route name", function() {
      var spy = sinon.spy(m.client, 'changeState');

      m.client.setup();

      m.client.changeState('about');

      expect(spy.calledWith('about')).true
    });

    it("expect to call history.pushState with the pre-defined pattern of a id", function() {
      var spy = sinon.spy(historyAPI, 'pushState');

      m.client.setup();
      m.client.changeState('about');

      expect(spy.calledWith(null, 'about', '/about')).true
    });
  });
});
