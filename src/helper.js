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
    }
  };

  if (typeof console === "undefined") {
    window.console = {
      log: function(message) {}
    }
  }
}(window));
