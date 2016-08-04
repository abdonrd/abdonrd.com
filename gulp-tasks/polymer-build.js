/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

require('./service-worker.js');

const gulp = require('gulp');

gulp.task('polymer-build', ['service-worker']);
