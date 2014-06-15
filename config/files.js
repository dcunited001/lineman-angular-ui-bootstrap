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
        "vendor/bower/underscore/underscore.js",
        "vendor/bower/underscore.string/lib/underscore.string.js",
        "vendor/bower/angular/angular.js",
        "vendor/bower/angular-cookies/angular-cookies.js",
        "vendor/bower/angular-route/angular-route.js",
        "vendor/bower/angular-resource/angular-resource.js",
        "vendor/bower/angular-bootstrap/ui-bootstrap-tpls.js",
        "vendor/bower/angular-ui-router/release/angular-ui-router.js"
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
          paths: ["vendor/bower/normalize-css/normalize.css", "vendor/bower/font-awesome/css/font-awesome.css", "app/css/**/*.less"]
        }
      }
    }
  };
};
