/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function (lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "bower_components/underscore/underscore.js",
        "bower_components/underscore.string/lib/underscore.string.js",
        "bower_components/angular/angular.js",
        "bower_components/angular-cookies/angular-cookies.js",
        "bower_components/angular-route/angular-route.js",
        "bower_components/angular-resource/angular-resource.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
        "bower_components/angular-ui-router/release/angular-ui-router.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js",

        // TODO: appending the template-cache location is a hack
        // - files.ngtemplates.dest no longer resolves in application.js
        // - i think this is because of the lineman-angular plugin changes
        "generated/angular/template-cache.js"
      ]
    },

    webfonts: {
      root: "fonts"
    },

    less: {
      compile: {
        options: {
          paths: ["bower_components/normalize-css/normalize.css", "bower_components/font-awesome/css/font-awesome.css", "app/css/**/*.less"]
        }
      }
    }
  };
};
