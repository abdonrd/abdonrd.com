/**
 * Usage:
 *   node prpl-server/dedup_assets.js
 */

const fs = require('fs');
const buildPath = require('polymer-cli/lib/build/build').mainBuildDirectoryName;
const pushManifestPath = `${buildPath}/es6-unbundled/push-manifest.json`;
const pushManifest = require(`../${pushManifestPath}`);
const newManifest = {};

/**
 * Dedup assets already pushed by shell
 * https://github.com/Polymer/polymer-build/issues/260
 */
const shell = 'src/app-shell.html';
const shellAssets = pushManifest[shell];

Object.keys(pushManifest).forEach((fragment) => {
  const fragmentAssets = pushManifest[fragment];
  newManifest[fragment] = {};

  Object.keys(fragmentAssets).forEach((asset) => {
    if (!shellAssets[asset]) {
      newManifest[fragment][asset] = fragmentAssets[asset];
    }
  });
});

// Shell assets should not be deduped with itself!
newManifest[shell] = shellAssets;

fs.writeFileSync(pushManifestPath, JSON.stringify(newManifest, null, 2));
