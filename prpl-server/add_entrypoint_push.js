/**
 * Usage:
 *   node prpl-server/add_entrypoint_push.js
 */

/* eslint-disable quotes, quote-props, indent */

const fs = require('fs');
const buildPath = require('polymer-cli/lib/build/build').mainBuildDirectoryName;
const pushManifestPath = `${buildPath}/es6-unbundled/push-manifest.json`;
const pushManifest = require(`../${pushManifestPath}`);
const newManifest = {};

const navigateRequestPreloads = {
  "bower_components/webcomponentsjs/webcomponents-loader.js": {
    "type": "script",
    "weight": 1
  }
};

newManifest['/'] = Object.assign(
  {
    "src/app-shell.html": {
      "type": "document",
      "weight": 1
    },
    "src/pages/page-home.html": {
      "type": "document",
      "weight": 1
    }
  },
  pushManifest['/'],
  pushManifest['src/app-shell.html'],
  pushManifest['src/pages/page-home.html'],
  navigateRequestPreloads
);

newManifest['/talks'] = Object.assign(
  {
    "src/app-shell.html": {
      "type": "document",
      "weight": 1
    },
    "src/pages/page-talks.html": {
      "type": "document",
      "weight": 1
    }
  },
  pushManifest['/talks'],
  pushManifest['src/app-shell.html'],
  pushManifest['src/pages/page-talks.html'],
  navigateRequestPreloads
);

/**
 * Dedup assets already pushed by shell
 * https://github.com/Polymer/polymer-build/issues/260
 */
const dedupedLazyResourcesAssets = {};
const lazyResourcesAssets = pushManifest['src/lazy-resources.html'];
Object.keys(lazyResourcesAssets).forEach((asset) => {
  if (!newManifest['/'][asset]) {
    dedupedLazyResourcesAssets[asset] = lazyResourcesAssets[asset];
  }
});
newManifest['src/lazy-resources.html'] = dedupedLazyResourcesAssets;

fs.writeFileSync(pushManifestPath, JSON.stringify(newManifest, null, 2));
