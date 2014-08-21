(function (global) {
  var ROUTE_ELEMENT_ID_TEMPLATE_NAME = '{route}-template-content';
  var WRAPPER_TEMPLATE_NAME          = 'data-storia-wrapper';
  var HANDLER_ATTRIBUTE_NAME         = 'data-storia';
  var A_TAG                          = 'A';
  var _                              = StoriaHelper;

  var StoriaClient = function(HistoryAPI) {
    if (HistoryAPI !== undefined) {
      this.historyAPI = HistoryAPI;
    }

    this.setup();
  };

  StoriaClient.prototype.setup = function() {
    this.bindHandlers();
  };

  StoriaClient.prototype.bindHandlers = function() {
    var self = this;

    document.querySelector('body').addEventListener('click', function (e) {
      var el     = e.target;
      var target = (_.isAnAnchor(el) && _.hasHandlerAttribute(el)) ? el : _.findFirstParentOf(el, A_TAG);

      if (target) {
        self.changeState(target);
        e.preventDefault();
      }
    });

    return self;
  };

  StoriaClient.prototype.changeState = function(target) {
    var routeName = target.pathname.replace('/', '');

    this.historyAPI.pushState(null, routeName, '/' + routeName);
    this.writeWrapperContentFor(routeName);
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
    var element = document.getElementById(this.getRouteElementId(routeName));

    if (!element) {
      console.log('You need to create an element with this pattern ID: #' + ROUTE_ELEMENT_ID_TEMPLATE_NAME.replace('{route}', routeName));
      return false;
    }

    return element.innerHTML;
  };

  StoriaClient.prototype.getWrapper = function() {
    var wrapper = document.querySelector('[' + WRAPPER_TEMPLATE_NAME + ']');

    if (!wrapper) {
      console.log('You need at least one element with the attribute: ' + WRAPPER_TEMPLATE_NAME);
      return false;
    }

    return wrapper;
  };

  StoriaClient.prototype.writeWrapperContentFor = function(routeName) {
    return this.getWrapper().innerHTML = this.getRouteContentFor(routeName);
  };

  global.StoriaClient = StoriaClient;
}(window));
