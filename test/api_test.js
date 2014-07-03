var expect = require("chai").expect;

var StoriaAPI = require("../src/api.js");
var defaults = {
  bar: "baz"
};

describe("Api", function() {
  var m = {};

  beforeEach(function () {
    m.Storia = new StoriaAPI();
  });

  describe("#constructor", function() {
    it("expect to have a list of default options", function() {
      expect(m.Storia.defaults).to.deep.equal(defaults);
    });
  });

  describe("#setup", function() {
    it("expect to have the setup method", function() {
      expect(typeof m.Storia.setup).to.be.eq("function");
    });

    it("expect to pass options and overwrite the default options", function() {
      m.Storia.setup({bar: "gud"});

      expect(m.Storia.defaults).to.deep.equal({bar: "gud"});
    });

    it("expect that addHandlerTo returns the instance of Storia library", function() {
      expect(m.Storia.setup({bar: "gud"})).to.be.an.instanceof(StoriaAPI);
    });
  });

  describe("#addHandlerTo", function() {
    it("expect to have the addHandlerTo method", function() {
      expect(typeof m.Storia.addHandlerTo).to.be.eq("function");
    });

    it("expect to have and array of handlers", function() {
      expect(m.Storia.handlers).to.be.an.instanceof(Array);
    });

    it("expect to add an item to the list of handlers", function() {
      m.Storia.addHandlerTo(".my-element");

      expect(m.Storia.handlers).to.deep.equal([".my-element"]);
    });

    it("expect to dont add if handler parameter is empty", function() {
      m.Storia.addHandlerTo();

      expect(m.Storia.handlers).to.deep.equal([]);
    });

    it("expect that addHandlerTo returns the instance of Storia library", function() {
      expect(m.Storia.addHandlerTo()).to.be.an.instanceof(StoriaAPI);
    });
  });

  describe("#route", function() {
    it("expect to have the route method", function() {
      expect(typeof m.Storia.route).to.be.eq("function");
    });

    it("expect to have a list of routes in an array", function () {
      expect(m.Storia.routes).to.be.an.instanceof(Array);
    });

    it("expect to return false for a invalid route name", function () {
      expect(m.Storia.route()).to.be.equal(false);
      expect(m.Storia.route(null)).to.be.equal(false);
      expect(m.Storia.route(undefined)).to.be.equal(false);
      expect(m.Storia.routes).to.be.deep.equal([]);
    });

    it("expect to save a new route with inside of routes array", function () {
      m.Storia.route('about');

      expect(m.Storia.routes).to.be.deep.equal([{name: "about", options: {}}]);
    });

    it("expect to save a new route with the options as a options hash", function () {
      var opts = {a: "a", b: "b"};

      m.Storia.route('about', opts);

      expect(m.Storia.routes).to.be.deep.equal([{name: "about", options: opts}]);
    });
  });
});
