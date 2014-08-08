(function (global) {
  var ROUTE_ELEMENT_ID_TEMPLATE_NAME = '{route}-template-content';
  var WRAPPER_TEMPLATE_NAME = 'data-storia-wrapper';

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
        if (self.changeState(e.target) !== false) {
          e.preventDefault();
        }
      }
    });
  };

  StoriaClient.prototype.changeState = function(target) {
    var routeName = target.pathname.replace('/', '');

    if (this.isValidRoute(routeName)) {
      this.historyAPI.pushState(null, routeName, '/' + routeName);
      this.writeWrapperContentFor(routeName);
    } else {
      return false;
    }
  };

  StoriaClient.prototype.isValidRoute = function(routeName) {
    return (this.api.routesNames.indexOf(routeName) > -1);
  };

  StoriaClient.prototype.getRouteElementId = function(routeName) {
    if (!routeName) {
      return false;
    }

    return ROUTE_ELEMENT_ID_TEMPLATE_NAME.replace('{route}', routeName);
  };

  StoriaClient.prototype.getRouteContentFor = function(routeName) {
    return document.getElementById(this.getRouteElementId(routeName)).innerHTML;
  };

  StoriaClient.prototype.getWrapper = function() {
    return document.querySelector('[' + WRAPPER_TEMPLATE_NAME + ']');
  };

  StoriaClient.prototype.writeWrapperContentFor = function(routeName) {
    return this.getWrapper().innerHTML = this.getRouteContentFor(routeName);
  };

  global.StoriaClient = StoriaClient;
}(window));
