var Struct = require('nhg/struct');
var h = require('nhg/h');
var WordEntry = require('./components/word-entry');

module.exports = App;

function App () {
  var state = Struct({
    wordEntry: WordEntry()
  });

  return state;
}

App.render = function (state) {
  return h('.app', {
    style: {
      width: '600px',
      margin: '0 auto',
      padding: '20px 100px',
      'background-color': '#efefef'
    }
  }, [
    h('h1', 'Word Stats'),
    WordEntry.render(state.wordEntry)
  ]);
};
