(function (global) {
  var StoriaClient = function(storiaAPI) {
    if (StoriaAPI !== undefined) {
      this.api = storiaAPI;
    }

    this.setup();
  };

  StoriaClient.prototype.setup = function() {
    if (this.hasNoHandlers()) {
      this.bindGlobalHandler();
    }
  };

  StoriaClient.prototype.hasNoHandlers = function() {
    return (this.api.handlers.length == 0);
  };

  StoriaClient.prototype.bindGlobalHandler = function() {

  };

  global.StoriaClient = StoriaClient;
}(window));
