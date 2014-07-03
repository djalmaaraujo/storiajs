var _ = require('../src/helper');

var ROUTE_REGEX = /[+a-zA-Z0-9.-]/;

var Storia = function () {
  this.defaults = { bar: "baz" };
  this.handlers = [];
  this.routes = [];

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

  this.route = function (name, options) {
    var self = this;

    if (name === undefined) return false;
    if (name === null) return false;
    if (typeof name !== "string") return false;

    options = (options) ? options : {};

    self.routes.push({name: "about", options: options});

    return self;
  };
};

module.exports = Storia;
