var test = require('tape');

var wordsToTest = {
  indeed: {
    word: 'indeed',
    cmu: 'IH0 N D IY1 D',
    syllables: 2,
    stress: 'us',
    pos: 'RB',
    rhyme: 'IYD'
  },
  elbow: {
    cmu: 'EH1 L B OW2',
    pos: 'NN',
    rhyme: 'OW',
    stress: 'ss',
    syllables: 2,
    word: 'elbow'
  }
};

test('basic word stats', function (t) {
  var stats = require('./index');

  var words = Object.keys(wordsToTest);
  t.ok(words.length, 'test at least 1 word');

  words.forEach(function (word) {
    t.deepEqual(stats(word), wordsToTest[word], 'word stats for ' + word + ' are accurate');
  });
  t.end();
});
