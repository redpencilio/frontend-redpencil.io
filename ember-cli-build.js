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
                  options: {
                    outputPath: 'assets/fonts/', // Change the output path as needed
                    name: '[name].[ext]',       // Define the file name pattern
                  },
                },
              ],
            },
            {
              test: /\.svg$/, // Include SVG file extension
              use: [
                {
                  loader: 'file-loader', // Use 'file-loader' for SVG files
                  options: {
                    outputPath: 'assets/svg/', // Change the output path as needed
                    name: '[name].[ext]',       // Define the file name pattern
                  },
                },
              ],
            },
          ],
        },
      },
    },
  });
};
