'use strict';

const path = require('path');

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
  prember: {
    urls: [
      '/',
      '/careers',
      '/careers/full-stack-developer',
      '/careers/internship',
      '/contact',
      '/projects',
      '/projects/lblod',
      '/projects/kaleidos',
      '/services',
      '/who-we-are',
    ]
  }
  });

  const { Webpack } = require('@embroider/webpack');
  const compiledApp = require('@embroider/compat').compatBuild(app, Webpack, {
    packagerOptions: {
      babelLoaderOptions: [],
      webpackConfig: {
        module: {
          rules: [
            {
              // When webpack sees an import for a CSS files
              test: /(node_modules(\/|\\)\.embroider(\/|\\)rewritten-app(\/|\\))(.*\.css)$/i,
              use: [
                {
                  // use the PostCSS loader addon
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isProduction() === false,
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
            {
              // Static assets
              test: /(\.ttf|\.svg)$/,
              type: 'asset/resource'
            }
          ],
        },
      },
    }
  });
  return require('prember').prerender(app, compiledApp);
};
