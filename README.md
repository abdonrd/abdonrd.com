[![Build status][travis-image]][travis-url]

# [abdonrd.com](https://abdonrd.com)

My little personal website built with Polymer.

Deployed in Firebase with Travis CI.

## Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

And install the dependencies:

    npm install && bower install

## Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

## Build

The included `gulpfile.js` relies on [the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Out of the box it will clean the
`build` directory, and provide image minification. Follow the comments in the
`gulpfile.js` to add additional steps like JS transpilers or CSS preprocessors.

Also, generates a service-worker.js file with code to pre-cache the dependencies
based on the entrypoint and fragments specified in `polymer.json`.

    npm run build

## Preview the build

This command serves the minified version of the app at `http://localhost:8080`:

    polymer serve build/

## Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

[travis-image]: https://travis-ci.org/abdonrd/abdonrd.com.svg?branch=master
[travis-url]: https://travis-ci.org/abdonrd/abdonrd.com
