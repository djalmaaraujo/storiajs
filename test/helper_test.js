var expect = require("chai").expect;

var Helper = require("../src/helper.js");

describe("Helper", function(){
  describe("#extend", function () {
    it("expect overwrite the properties of the source object", function () {
      var obj = Helper.extend({foo: "bar"}, {foo: "beh"});
      expect(obj).to.deep.equal({foo: "beh"});
    });
  });
});
