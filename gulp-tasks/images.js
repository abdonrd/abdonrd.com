/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const imagemin = require('gulp-imagemin');

// Returns a WriteableStream to process images
function minify() {
  return imagemin({
    progressive: true,
    interlaced: true
  });
}

module.exports = {
  minify: minify
};
