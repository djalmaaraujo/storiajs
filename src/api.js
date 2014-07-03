(function (global) {
  var _ = StoriaHelper;

  var StoriaAPI = function () {
     this.defaults = { bar: "baz" };
    this.handlers = [];
    this.routes = [];
  };

  StoriaAPI.prototype.setup = function (options) {
    var self = this;

    self.defaults = _.extend(self.defaults, options);

    return self;
  };

  StoriaAPI.prototype.addHandlerTo = function (handler) {
    var self = this;

    if (handler === undefined) return self;

    self.handlers.push(handler);

    return self;
  };

  StoriaAPI.prototype.route = function (name, options) {
    var self = this;

    if (name === undefined) return false;
    if (name === null) return false;
    if (typeof name !== "string") return false;

    options = (options) ? options : {};

    self.routes.push({name: "about", options: options});

    return self;
  };

  global.StoriaAPI = StoriaAPI;
}(window));
