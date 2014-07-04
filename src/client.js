(function (global) {
  var StoriaClient = function(storiaAPI) {
    if (StoriaAPI !== undefined) {
      this.api = storiaAPI;
    }

    this.setup();
  };

  StoriaClient.prototype.setup = function() {
    this.api.setup();

    if (this.hasNoHandlers()) {
      this.bindGlobalHandler();
    }
  };

  StoriaClient.prototype.hasNoHandlers = function() {
    return (this.api.handlers.length == 0);
  };

  StoriaClient.prototype.bindGlobalHandler = function() {
    var self = this;

    document.querySelector('body').addEventListener('click', function (e) {
      if (e.target && e.target.nodeName == "A") {
        self.changeState(e.target.href);
      }

      e.preventDefault();
    });
  };

  StoriaClient.prototype.changeState = function(name) {
    history.pushState(null, name, '/' + name);
  };


  global.StoriaClient = StoriaClient;
}(window));
