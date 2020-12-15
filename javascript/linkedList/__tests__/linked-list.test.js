'use strict';


let Link = require('../library/linked-list');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new Link();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    const list = new Link();
    list.insert('tigers');
    expect(list.head.value).toEqual('tigers');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new Link();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new Link();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
    let nextNode = list.head.next;
    expect(nextNode.value).toEqual('b');
    nextNode = nextNode.next;
    expect(nextNode.value).toEqual('a');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new Link();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insert('d');
    list.insert('findMe');
    //expect(list.includes('findMe')).toBeTruthy();
    expect(list.includes('d')).toBe(true);
  });



  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new Link();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insert('d');
    list.insert('findMe');
    expect(list.includes('whatList')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new Link();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insert('d');
    list.insert('findMe');
    expect(list.toString()).toEqual('{ findMe } ->{ d } ->{ c } ->{ b } ->{ a } ->NULL');
  });


  //Code Challenge Day 7 kthFromEnd Below/////////////////////////
  it('Should return false where the given value is greater than the length of the list', () => {
    const list = new Link();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('four');
    list.insert('five');
    expect(list.kthFromEnd(7)).toEqual(false);
  });
  it('Should return the head.value if the given position is equal to the length of the list', () => {
    const list = new Link();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('four');
    list.insert('five');
    expect(list.kthFromEnd(4)).toEqual('five');
  });
  it('Should return false if given value is negative', () => {
    const list = new Link();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('four');
    list.insert('five');
    expect(list.kthFromEnd(-3)).toEqual(false);
  });
  it('Should return the value of the head node if the list is only one node long and k = 0', () => {
    const list = new Link();
    list.insert('one');
    expect(list.kthFromEnd(0)).toEqual('one');
  });
  it('Should return the value of the node at a given position', () => {
    const list = new Link();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('four');
    list.insert('five');
    expect(list.kthFromEnd(3)).toEqual('four');
  });
});
