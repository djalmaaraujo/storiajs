(function (global) {
  var StoriaClient = function(storiaAPI, HistoryAPI) {
    if (StoriaAPI !== undefined) {
      this.api = storiaAPI;
    }

    if (HistoryAPI !== undefined) {
      this.historyAPI = HistoryAPI;
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
    this.historyAPI.pushState(null, name, '/' + name);
  };


  global.StoriaClient = StoriaClient;
}(window));
