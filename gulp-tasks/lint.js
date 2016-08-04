/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

// Lint JavaScript
gulp.task('lint', () => {
  let filesToLint = [
    'gulpfile.js',
    'gulp-tasks/**/*.js',
    'index.html',
    'src/**/*.{js,html}',
    'test/**/*.{js,html}'
  ];

  return gulp.src(filesToLint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
