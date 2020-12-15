'use strict';

const Node = require('../library/node'); // brings in node class

class LinkedList { // creates a linked list class
  constructor() {
    this.head = null; // this.head to null for each new instance
  }

  insert(value) { // creates a method for inserting a new node at the beginning of a list
    const node = new Node(value); // makes a new node class instance
    node.next = this.head; // assigns current head to a new node next value
    this.head = node; // reassigns value to the new node

  }

  includes(discoverValue) { // any value as an argument and returns a boolean result // creates a method for searching the linked list for a value
    let current = this.head; // sets var to the current head
    while (current) { // loops through current value
      if (current.value === discoverValue) { return true; } // logic while looping if current value equals include value return it true
      current = current.next; // use next to keep going
      //return 'no value exists';
    }
    return false; // if it doesn't return true return false outside the while loop
  }

  // list of 1 2 3 4

  toString() {
    let newString = ''; // create an empty string because that is what you want the output to be
    let currentItem = this.head; // initialize a variable set to the current head
    while (currentItem !== null) { // loop through current list until it get to the next part of null
      let linked = `{ ${currentItem.value} } ->`; // initialize a variable to look like output string
      newString += linked; // combining together (+=)
      currentItem = currentItem.next; // set current node to equal and go next
      //return 'no value exists';
    }
    newString += `NULL`; // outside of the while loop let the final node equal null
    return newString; // return all so that it is in a string

  }

}

module.exports = LinkedList;


// throw a custom semantic error
// if (!value) throw new Error('no head was found');
















// append(value) {
//   const node = new Node(value);
//   // traverse the entire list until finding the one who's next is null
//   let currentNode = this.head;
//   while (currentNode.next !== null) {
//     currentNode = currentNode.next;
//   }
//   // when I find that one make next my new node
//   currentNode.next = node;

//   // make my new node next null
// }




//insert node at beginning of LinkedList
//Two options:
// 1. the list is empty
// make a new Node with the value given
// assign this.head to that new node
// 2. the list is NOT empty
// make a new Node with the value given
// make the new Node's .next point at the current head
// reassign the head to the new node
