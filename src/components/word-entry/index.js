var h = require('nhg/h');
var State = require('nhg/state');
var Value = require('nhg/value');
var SendChange = require('nhg/send-change');
var wordStats = require('word-stats');

module.exports = WordEntry;

function WordEntry () {
  var state = State({
    word: Value(),
    data: Value({}),
    channels: {
      updateWord: updateWord
    }
  });

  return state;
}

function updateWord (state, word) {
  word = word.word;
  state.word.set(word);
  state.data.set(wordStats(word));
  console.log(state.data());
}

WordEntry.render = function (state) {
  return h('.word-entry', [
    h('input', {
      value: state.word,
      name: 'word',
      'ev-input': SendChange(state.channels.updateWord)
    }),
    h('p', [
      'Word found: ', (state.data ? 'X' : ' ')
    ])
  ]);
};
