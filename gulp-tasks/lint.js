/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

function lint() {
  return gulp.src(global.config.filesToLint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

module.exports = lint;
