'use strict';


const Node = require('./node');


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

  dequeue() { // Removes an node or item from the queue // returns the value
    if (!this.front) return false;
    const newValue = this.front;
    this.front = newValue.next;
    this.size--;
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


module.exports = Queue;



