/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const htmlmin = require('gulp-htmlmin');

function minify() {
  return htmlmin({
    collapseWhitespace: true
  });
}

module.exports = {
  minify: minify
};
