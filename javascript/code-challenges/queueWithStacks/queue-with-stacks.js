'use strict';


const Stack = require('route');

class PuesdoQueue {
  constructor(value) {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let currentNode = new Node(value);
    currentNode = this.front;
    if (this.rear) { this.rear.next = currentNode; }
    this.rear = currentNode;
  }

}

