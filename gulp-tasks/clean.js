/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
 */

'use strict';

const del = require('del');

// Returns a function that returns a Promise to delete directories
function clean(directories) {
  return function clean() {
    return del(directories);
  }
}

module.exports = clean;
