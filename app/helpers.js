var Showdown = require('showdown')
  , converter = new Showdown.converter()
;

module.exports = function(Handlebars) {

  var helpers = {
    // Example Handlebars helper
    log: function(obj) {
      console.log(obj);
    },

    markdown: function(source) {
      return converter.makeHtml(source);
    },
  };

  function register() {
    for (var key in helpers) {
      if (helpers.hasOwnProperty(key)) {
        Handlebars.registerHelper(key, helpers[key]);
      }
    }
  }

  return {
    helpers: helpers,
    register: register
  };
};
