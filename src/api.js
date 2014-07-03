var _ = require('../src/helper');

var Storia = function () {
  this.defaults = { bar: "baz" };
  this.handlers = [];

  this.setup = function (options) {
    var self = this;

    self.defaults = _.extend(self.defaults, options);

    return self;
  };

  this.addHandlerTo = function (handler) {
    var self = this;

    if (handler === undefined) return self;

    self.handlers.push(handler);

    return self;
  };
};

module.exports = Storia;
