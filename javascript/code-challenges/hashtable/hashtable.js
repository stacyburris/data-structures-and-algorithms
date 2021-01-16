'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  // acc = answerSoFar
  //charCodeAt = returns a single integer between 0  and 65,535
  // hash: takes in an arbitrary key and returns an index in the collection.
  hash(key) {
    return key.split('').reduce((acc, value) => {
      return acc + value.charCodeAt(0);
    }, 0) * 199 % this.size;
  }
  // need method that will allow me to put something into hashmap
  set(key, value) {
    console.log('FROM TEST DOG SOUP', key, ',', value);
    const index = this.hash(key); // get my hash
    const entry = { [key]: value }; // make a value entry // bucket
    // set entry to the hash value in the map
    // check to see if there is a hash there already
    // if not, need to put in a linked list
    console.log('NEW ENTRY', entry);
    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }
    // .add: takes in both the key and value. This method should hash the key,
    //and add the key and value pair to the table, handling collisions as needed.
    this.map[index].add(entry); // add the entry
  }
  // .get - takes in the key
  // hash key for bucket location
  // Traverse Linked List in that bucket to find matching key
  // return it's value
  get(key) {
    const index = this.hash(key);
    console.log('INDEX:', index);
    if (this.map[index]) {
      let current = this.map[index].head;
      console.log('CURRENT', current);
      console.log('CURRENT IN KEY', current.value[key]);

      while (current) {
        let keyOfObject = Object.keys(current.value);
        let valueOfObject = Object.values(current.value);
        console.log({ keyOfObject });
        console.log({ index });
        if (keyOfObject[0] === key) {
          return valueOfObject[0];
        }
        current = current.next;
      }
    }
    //contains(key){
    //}
  }
}

module.exports = HashMap;

// contains: takes in the key and returns a boolean, indicating if the key exists in the table already.