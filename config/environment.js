/* eslint-env node */
"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "frontend",
    environment,
    rootURL: "/",
    locationType: "auto",
    flashMessageDefaults: {
      // flash message defaults
      timeout: 3000,
      // service defaults
      types: ["error", "success", "info"],
      destroyOnClick: false
    },
    "ember-cli-string-helpers": {
      only: ["lowercase", "camelize"]
    },
    intl: [
      {
        locales: ["en-us", "ro-ro"]
      }
    ],

    EmberENV: {
      DEBUG_TASKS: true, //TODO remove
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    ENV["ember-qunit-nice-errors"] = {
      showFileInfo: true,
      completeExistingMessages: true
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
