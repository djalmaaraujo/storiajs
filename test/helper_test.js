var expect = chai.expect;
var Helper = StoriaHelper;

describe("Helper", function(){
  describe("#extend", function () {
    it("expect overwrite the properties of the source object", function () {
      var obj = Helper.extend({foo: "bar"}, {foo: "beh"});
      expect(obj).to.deep.equal({foo: "beh"});
    });
  });
});
