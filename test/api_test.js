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
  });
});
