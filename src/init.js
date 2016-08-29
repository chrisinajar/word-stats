var insertStylesheet = require('json-stylesheets');
var App = require('./app');
var RunApp = require('nhg/app');
var document = require('nhg/document');

module.exports = Init;

function Init () {
  var state = App();
  insertStylesheet(require('json-stylesheets/normalize'));

  RunApp(document.body, state, App.render);
}
