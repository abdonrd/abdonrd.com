/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
 */

/* eslint-disable no-console */

'use strict';

const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const jsonmin = require('gulp-jsonmin');
const mergeStream = require('merge-stream');
const polymerBuild = require('polymer-build');
const uglify = require('gulp-uglify');

const swPrecacheConfig = require('./sw-precache-config.js');
const polymerJson = require('./polymer.json');
const polymerProject = new polymerBuild.PolymerProject(polymerJson);
const sourcesHtmlSplitter = new polymerBuild.HtmlSplitter();
const buildDirectory = 'build';

/**
 * Waits for the given ReadableStream
 */
function waitFor(stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

function build() {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    // Okay, so first thing we do is clear the build directory
    console.log(`Deleting ${buildDirectory} directory...`);
    del([buildDirectory])
      .then(() => {
        // Okay, now let's get your source files
        let sourcesStream = polymerProject.sources()
          .pipe(sourcesHtmlSplitter.split())
          .pipe(gulpif(/\.js$/, uglify()))
          // .pipe(gulpif(/\.css$/, cssSlam()))
          .pipe(gulpif(/\.html$/, htmlmin({
            collapseWhitespace: true
          })))
          .pipe(gulpif(/\.(png|gif|jpg|svg)$/, imagemin()))
          .pipe(gulpif(/\.json$/, jsonmin()))
          .pipe(sourcesHtmlSplitter.rejoin());

        // Okay, now let's do the same to your dependencies
        let dependenciesStream = polymerProject.dependencies();

        // Okay, now let's merge them into a single build stream
        let buildStream = mergeStream(sourcesStream, dependenciesStream)
          .once('data', () => {
            console.log('Analyzing build dependencies...');
          });

        // If you want bundling, pass the stream to polymerProject.bundler.
        // This will bundle dependencies into your fragments so you can lazy
        // load them.
        buildStream = buildStream.pipe(polymerProject.bundler);

        // Okay, time to pipe to the build directory
        buildStream = buildStream.pipe(gulp.dest(buildDirectory));

        // Wait for the buildStream to complete
        return waitFor(buildStream);
      })
      .then(() => {
        console.log('Generating the Service Worker...');
        return polymerBuild.addServiceWorker({
          project: polymerProject,
          buildRoot: buildDirectory,
          bundled: true,
          swPrecacheConfig: swPrecacheConfig
        });
      })
      .then(() => {
        console.log('Build complete!');
        resolve();
      });
  });
}

gulp.task('build', build);
