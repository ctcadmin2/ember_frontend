module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["ember", "hbs", "compat", "html", "ember-es6-class"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:compat/recommended"
  ],
  env: {
    browser: true
  },
  rules: {
    "ember/named-functions-in-promises": [
      2,
      {
        allowSimpleArrowFunction: true
      }
    ],
    "hbs/check-hbs-template-literals": 2
    // 'ember/no-jquery': 2 TODO can't remove yet
  },
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "ember-cli-build.js",
        "config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ["node"],
      rules: Object.assign(
        {},
        require("eslint-plugin-node").configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here

          // this can be removed once the following is fixed
          // https://github.com/mysticatea/eslint-plugin-node/issues/77
          "node/no-unpublished-require": "off"
        }
      )
    }
  ]
};
