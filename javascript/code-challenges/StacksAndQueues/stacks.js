'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    // this.next = null;
    this.size = 0; // to set the size 
  }


  peek() { //returns the value of the node located on top of the stack, without removing it from the stack.
    if (!this.top) return false;
    return this.top;
  }

  push(value) { // nodes items that are put into the stack are pushed
    if (!value) { throw new Error('Stack is empty - cannot push'); }
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }


  pop() { //returns the element in the top position of the stack and then decrements the top variable
    if (!this.top) return false; //needs error testing
    let item = this.top;
    this.top = this.top.next;
    item.next = null;
    this.size--;
    return item;
  }


  isEmpty() { //returns when stack is empty or will return false - O(1)
    if (this.top === null) {
      return true;
    }
    return false;
  }
}



module.exports = Stack;

