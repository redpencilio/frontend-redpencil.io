'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    minifyCSS: {
      enabled: false
    },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      config: 'postcss.config.js',
                    },
                  },
                },
              ],
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/, // Include font file extensions here
              use: [
                {
                  loader: 'file-loader', // Use 'file-loader' for font files
                },
              ],
            },
            {
              test: /\.svg$/, // Include SVG file extension
              use: [
                {
                  loader: 'file-loader', // Use 'file-loader' for SVG files
                },
              ],
            },
          ],
        },
      },
    },
  });
};
