/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'ie >= 8']
  }
});

app.import('bower_components/selectivizr/selectivizr.js');

app.import('bower_components/normalize.css/normalize.css');

module.exports = app.toTree();
