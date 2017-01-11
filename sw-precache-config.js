/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
 */

module.exports = {
  staticFileGlobs: [
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/data/**/*',
    '/images/**/*',
    '/index.html',
    '/manifest.json'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /\/data\/.*json/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'data-cache'
        }
      }
    }
  ]
};
