

const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');

const appRoot = __dirname + '/src';

const dev = esTranspiler(appRoot, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  sourceMap: 'inline',
  exclude: "node_modules/**",
  presets: [
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    ["flow-runtime", {
      "assert": true,
      "annotate": true
    }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});

const prod = esTranspiler(appRoot, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  exclude: "node_modules/**",
  presets: [
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    ["flow-runtime", {
      "assert": false,
      "annotate": false
    }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});

module.exports = options => {
  if (options.env == 'production') {
    return mergeTrees([prod], { annotation: "Final output", overwrite: true });
  } else if (options.env == 'development') {
    return mergeTrees([dev], { annotation: "Final output", overwrite: true });
  }
};
