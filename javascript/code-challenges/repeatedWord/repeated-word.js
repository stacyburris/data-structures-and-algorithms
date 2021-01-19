'use strict';
const Map = require('../hashtable/hashtable');


function repeatedWord(string) {
  const arr = string.split(' ');
  const hash = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v)
      result.push(k);
  });
  return result[0];
}
module.exports = repeatedWord;







