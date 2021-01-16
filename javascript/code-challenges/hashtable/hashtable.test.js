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

  it('boolean if contains key', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('bob', 'loop');
    newMap.set('lob', 'nope');
    newMap.set('1', 'a');
    newMap.set('2', 'b');
    newMap.set('3', 'c');
    newMap.set('4', 'd');
    newMap.set('5', 'e');
    newMap.set('6', 'f');
    newMap.set('7', 'g');
    newMap.set('8', 'h');
    newMap.set('9', 'i');
    newMap.set('0', 'j');
    console.log({ newMap });
    expect(newMap.contains('dog')).toBe(true);
    expect(newMap.contains('bob')).toBe(true);
    expect(newMap.contains('lob')).toBe(true);
    expect(newMap.contains('1')).toBe(true);
    expect(newMap.contains('2')).toBe(true);
    expect(newMap.contains('3')).toBe(true);
    expect(newMap.contains('4')).toBe(true);
    expect(newMap.contains('5')).toBe(true);
    expect(newMap.contains('6')).toBe(true);
    expect(newMap.contains('7')).toBe(true);
    expect(newMap.contains('8')).toBe(true);
    expect(newMap.contains('9')).toBe(true);
    expect(newMap.contains('0')).toBe(true);
    expect(newMap.contains('14')).toBe(false);
  });
});
