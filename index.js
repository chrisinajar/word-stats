var CMUDict = require('cmudict').CMUDict;
var pos = require('pos');

var cmudict = new CMUDict();

module.exports = wordStats;

function wordStats (word) {
  return calculate(word);

  function calculate (word) {
    var pronounce = cmudict.get(word);
    if (!pronounce) {
      return null;
    }

    var syllables = pronounce.match(/[0-9]/g);

    var susus = syllables.map(function (stress) {
      if (Number(stress) === 0) {
        return 'u';
      }
      return 's';
    }).join('');

    return {
      word: word,
      cmu: pronounce,
      syllables: syllables.length,
      stress: susus,
      pos: partOfSpeach(word),
      rhyme: rhymingPart(pronounce)
    };
  }
}

function partOfSpeach (word) {
  var words = new pos.Lexer().lex(word);
  var tagger = new pos.Tagger();
  var tagged = tagger.tag(words);

  tagged = tagged
    .filter(function (tag) {
      return tag[0] === word;
    })
    .map(function (tag) {
      return tag[1];
    });

  return tagged.length ? tagged[0] : null;
}

function rhymingPart (pronounce) {
  var parts = pronounce.split(' ');
  var rhyme = '';
  var part;
  if (parts[parts.length - 1].match(/^[SZ]$/)) {
    parts.pop();
  }
  while (parts.length) {
    part = parts.pop();
    if (part.match(/[0-9]/)) {
      part = part.replace(/[0-9]/, '');
      rhyme = part + rhyme;
      break;
    }
    rhyme = part + rhyme;
  }
  return rhyme;
}
