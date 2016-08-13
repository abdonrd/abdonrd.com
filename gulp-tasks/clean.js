/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const del = require('del');

// Returns a Promise to delete the build directory
function clean() {
  return del(global.config.build.rootDirectory);
}

module.exports = {
  build: clean
};
