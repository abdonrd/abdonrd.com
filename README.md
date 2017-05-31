[![Build Status](https://travis-ci.org/abdonrd/abdonrd.com.svg?branch=develop)](https://travis-ci.org/abdonrd/abdonrd.com)

# [abdonrd.com](https://abdonrd.com)

My little personal website built with Polymer.

Deployed in Firebase with Travis CI.

## Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[yarn](https://yarnpkg.com) (we assume you have pre-installed [node.js](https://nodejs.org)):

    yarn global add polymer-cli

Second, install [Bower](https://bower.io):

    yarn global add bower

And install the dependencies:

    yarn install && bower install

## Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    polymer serve --open

## Build

The included `gulpfile.js` relies on [the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Out of the box it will clean the
`build` directory, and provide image minification. Follow the comments in the
`gulpfile.js` to add additional steps like JS transpilers or CSS preprocessors.

Also, generates a service-worker.js file with code to pre-cache the dependencies
based on the entrypoint and fragments specified in `polymer.json`.

Command for development build:

    yarn run build

Command for production build:

    yarn run build:production

## Preview the build

This command serves the minified version of the app at `http://127.0.0.1:8081`:

    polymer serve build/ --open

## Run lint

This command will run [ESLint](https://github.com/eslint/eslint) with the
[IBM Research ESLint shareable config](https://github.com/IBMResearch/eslint-config-ibmresearch):

    yarn run lint

## Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    yarn run test

This command will build the project to verify the integration:

    yarn run test:integration
