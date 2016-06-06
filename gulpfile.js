/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

// Lint JavaScript
gulp.task('lint', function() {
  var filesToLint = [
    'gulpfile.js',
    'index.html',
    'service-worker.js',
    'sw-precache-config.js',
    'src/**/*.html'
  ];

  return gulp.src(filesToLint)
             .pipe(eslint())
             .pipe(eslint.format())
             .pipe(eslint.failAfterError());
});
