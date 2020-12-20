'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    // this.next = null;
    this.size = 0;
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


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;

  }
  enqueue(value) { // Nodes or items that are added to the queue. // add to the back
    if (!value) return false;
    let newNode = new Node(value);
    if (this.back) {
      this.back.next = newNode;

    } else {
      this.front = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() { // Removes an node or item from the queue
    if (!this.front) return false;
    const newValue = this.front;
    this.front = newValue.next;
    return newValue;
  }


  peek() { // When you peek you will view the value of the front Node in the queue
    if (!this.size) return false;
    return this.front;
  }

  isEmpty() { // returns true when queue is empty otherwise returns false
    if (this.front === null) {
      return true;
    }
    return false;
  }
}
module.exports = Stack;
module.exports = Queue;
