var _ = require('../src/helper');

var Storia = function () {
  this.defaults = {
    bar: "baz"
  };

  this.setup = function (options) {
    var self = this;

    self.defaults = _.extend(self.defaults, options);
  };
};

module.exports = Storia;
