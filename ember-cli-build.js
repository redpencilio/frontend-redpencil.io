'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          {
            module: autoprefixer,
            options: {},
          },
          require('tailwindcss')('./config/tailwind.js'),
        ],
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.config\.js$/],
      },
    },
  });

  return app.toTree();
};
