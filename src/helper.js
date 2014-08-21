(function (global) {
  global.StoriaHelper = {
    extend: function(obj) {
      if (typeof obj !== "object") return obj;
      var source, prop;
      for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
          obj[prop] = source[prop];
        }
      }
      return obj;
    },

    findFirstParentOf: function (el, tagName) {
      tagName = tagName.toLowerCase();

      while (el && el.parentNode) {
        el = el.parentNode;
        if (el.tagName && el.tagName.toLowerCase() == tagName) {
          return el;
        }
      }

      return null;
    },

    isAnAnchor: function (element) {
      return (element && element.nodeName == 'A');
    },

    hasHandlerAttribute: function (element) {
      return (element.getAttribute('data-storia') !== null);
    }
  };

  if (typeof console === "undefined") {
    window.console = {
      log: function(message) {}
    }
  }
}(window));
