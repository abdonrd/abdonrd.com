/**
 * @license
 *
 * Copyright (c) 2018-present, Abdón Rodríguez Davila (@abdonrd).
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

/* eslint-env node */
/* eslint-disable no-console */

const replace = require('replace-in-file');

const options = {
  files: [
    'src/app-shell.html',
    'sw-precache-config.js'
  ],
  from: 'abdonrd-develop',
  to: 'abdonrd'
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

const options2 = {
  files: 'index.html',
  from: '<!-- google-analytics-tracking-code -->',
  to: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-72184997-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-72184997-1');
    </script>`
};

replace(options2)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
