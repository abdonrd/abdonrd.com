/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const jsonmin = require('gulp-jsonmin');

// Returns a WriteableStream to process json
function minify() {
  return jsonmin();
}

module.exports = {
  minify: minify
};
