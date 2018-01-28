/**
 * @license
 *
 * Copyright (c) 2018-present, Abdón Rodríguez Davila (@abdonrd).
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    'bower_components/webcomponentsjs/webcomponents-loader.js',
    'images/*',
    'images/manifest/*',
    'images/open-graph/*',
    'manifest.json'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
      handler: 'fastest',
      options: {
        cache: {
          name: 'webcomponentsjs-polyfills-cache'
        }
      }
    },
    {
      urlPattern: /abdonrd-develop\.firebaseio\.com/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-cache'
        }
      }
    }
  ]
};
