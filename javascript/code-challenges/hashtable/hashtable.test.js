'use strict';

let HashMap = require('./hashtable');


describe('Hash Map', () => {
  it('should add a key and value to the hash map', () => {
    let newMap = new HashMap(51);
    newMap.set('dog', 'soup');
    newMap.set('bob', 'loop');
    newMap.set('lob', 'nope');
    newMap.set('sob', 'poke');
    expect(newMap.get('dog')).toEqual('soup');
  });
});
