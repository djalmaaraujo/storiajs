var expect = require("chai").expect;

var StoriaAPI = require("../src/api.js");
var defaults = {
  bar: "baz"
};

describe("Api", function(){
  describe("#constructor", function () {
    it("expect to have a list of default options", function () {
      var Storia = new StoriaAPI();
      expect(Storia.defaults).to.deep.equal(defaults);
    });
  });

  describe("#setup", function(){
    it("expect to have the setup method", function(){
      var Storia = new StoriaAPI();
      expect(typeof Storia.setup).to.be.eq("function");
    });

    it("expect to pass options and overwrite the default options", function () {
      var Storia = new StoriaAPI();
      Storia.setup({bar: "gud"});

      expect(Storia.defaults).to.deep.equal({bar: "gud"});
    });

    it("expect that addHandlerTo returns the instance of Storia library", function () {
      var Storia = new StoriaAPI();

      expect(Storia.setup({bar: "gud"})).to.be.an.instanceof(StoriaAPI);
    });
  });

  describe("#addHandlerTo", function(){
    it("expect to have the addHandlerTo method", function () {
      var Storia = new StoriaAPI();
      expect(typeof Storia.addHandlerTo).to.be.eq("function");
    });

    it("expect to have and array of handlers", function () {
      var Storia = new StoriaAPI();
      expect(Storia.handlers).to.be.an.instanceof(Array);
    });

    it("expect to add an item to the list of handlers", function () {
      var Storia = new StoriaAPI();
      Storia.addHandlerTo(".my-element");

      expect(Storia.handlers).to.deep.equal([".my-element"]);
    });

    it("expect to dont add if handler parameter is empty", function () {
      var Storia = new StoriaAPI();
      Storia.addHandlerTo();

      expect(Storia.handlers).to.deep.equal([]);
    });

    it("expect that addHandlerTo returns the instance of Storia library", function () {
      var Storia = new StoriaAPI();
      expect(Storia.addHandlerTo()).to.be.an.instanceof(StoriaAPI);
    });
  });
});
