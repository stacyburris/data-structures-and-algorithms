'use strict';

const repeatedWord = require('../repeatedWord');
//const result = require('../../code-challenges/hashtable/hashtable');

// describe('repeat word hash map', () => {
//   it('will return the first repeated word', () => {
//     const string = 'Once upon a time, there was a brave princess who';
//     const hash = new obj.HashMap(100);
//     const something = repeatedWord();
//     console.log(something.repeatedWord(string));
//     console.log(hash.repeatedWord.contain('Once upon a time, there was a brave princess who'));
//     expect(hash.repeatedWord('Once upon a time, there was a brave princess who’)).toBe(‘string');
//     expect(something.repeatedWord(string)).toBe('something');
//   });
// });


describe('repeat word hash map', () => {
  it('will return the first repeated word', () => {
    const string = 'Once upon a time, there was a brave princess who';
    let result = repeatedWord(string);
    expect(result).toBe('a');
  });
});