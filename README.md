[![Build status][travis-image]][travis-url]

# [abdonrd.com](https://abdonrd.com)

My little personal website built with Polymer.

Deployed in Firebase with Travis CI.

## Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using [npm](https://www.npmjs.com)
(we assume you have pre-installed [node.js](https://nodejs.org)).

```
npm install -g polymer-cli
```

Install dependencies:

```
npm install && bower install
```

## Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

```
polymer serve
```

## Build

```
npm run build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

The included `gulpfile.js` relies on [the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Follow the comments in the
`gulpfile.js` to add additional steps.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
polymer serve build/bundled
```

## Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

```
polymer test
```

[travis-image]: https://travis-ci.org/abdonrd/abdonrd.com.svg?branch=master
[travis-url]: https://travis-ci.org/abdonrd/abdonrd.com
