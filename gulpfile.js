/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.com/LICENSE.txt
 */

'use strict';

const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const jsonmin = require('gulp-jsonmin');
const mergeStream = require('merge-stream');
const polymer = require('polymer-build');

const polymerJSON = require('./polymer.json');
const project = new polymer.PolymerProject(polymerJSON);
const buildPath = 'build';

gulp.task('lint', () => {
  let filesToLint = [
    'scripts/**/*.js',
    '!scripts/google-analytics.js',
    'src/**/*.{js,html}',
    'test/**/*.{js,html}',
    'gulpfile.js',
    'index.html'
  ];

  return gulp.src(filesToLint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', () => {
  return del(buildPath);
});

gulp.task('build', ['clean'], (cb) => {
  // process source files in the project
  const sources = project.sources()
    .pipe(project.splitHtml())
    // add compilers or optimizers here!
    .pipe(gulpif('**/*.{png,gif,jpg,svg}', imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulpif('**/*.json', jsonmin()))
    .pipe(project.rejoinHtml());

  // process dependencies
  const dependencies = project.dependencies()
    .pipe(project.splitHtml())
    // add compilers or optimizers here!
    .pipe(project.rejoinHtml());

  // merge the source and dependencies streams to we can analyze the project
  const mergedFiles = mergeStream(sources, dependencies)
    .pipe(project.analyzer);

  // this fork will vulcanize the project
  polymer.forkStream(mergedFiles)
    .pipe(project.bundler)
    // write to the bundled folder
    .pipe(gulp.dest(buildPath + '/bundled'));

  polymer.forkStream(mergedFiles)
    // write to the unbundled folder
    .pipe(gulp.dest(buildPath + '/unbundled'));

  cb();
});

gulp.task('service-worker', ['build'], () => {
  const swConfig = {
    navigateFallback: '/index.html',
  };

  // Once the unbundled build stream is complete, create a service worker for the build
  polymer.addServiceWorker({
    project: project,
    buildRoot: buildPath + '/unbundled',
    swConfig: swConfig,
    serviceWorkerPath: 'service-worker.js',
  });

  // Once the bundled build stream is complete, create a service worker for the build
  polymer.addServiceWorker({
    project: project,
    buildRoot: buildPath + '/bundled',
    swConfig: swConfig,
    bundled: true,
  });
});

gulp.task('polymer-build', ['service-worker']);
