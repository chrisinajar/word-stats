# word-stats
Analyze a list of words fetching pronunciation, stress, rhymes, and other useful data points.

## Install
```
npm install --save word-stats
```

## Usage
```js
var stats = require('word-stats');

var data = stats('elbow');
console.log(data);
/*
{
  cmu: 'EH1 L B OW2',
  pos: 'NN',
  rhyme: 'OW',
  stress: 'ss',
  syllables: 2,
  word: 'elbow'
}
*/
```

# License
MIT
