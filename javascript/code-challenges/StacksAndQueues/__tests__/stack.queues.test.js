'use strict';

const Stack = require('../stacks');
const Queue = require('../queues');


describe('Stacks and Queues', () => {
  describe('push()', () => {
    it('1. can successfully push onto a stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
    });
  });
  describe('push()', () => {
    it('2. can successfully push multiple values onto a stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size).toEqual(3);
      //expect(stack.size).toEqual('three');
    });
  });
  describe('pop()', () => {
    it('3. can successfully pop off the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.pop().value).toEqual(1);
    });
  });
  it('4. can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop().value).toEqual(3);
    expect(stack.pop().value).toEqual(2);
    expect(stack.pop().value).toEqual(1);
    expect(stack.top).toEqual(null);
  });

  it('5. can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek().value).toEqual(3);
  });
});
describe('peek() or pop()', () => {
  it('6. can successfully instantiate a new stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toEqual(false);
  });

  it('7. calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.peek()).toEqual(false);
    expect(stack.pop()).toEqual(false);
  });
});

describe('Queue', () => {
  it('8. can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it('9. can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toEqual(3);
  });
  it('10. can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue().value).toEqual(1);
  });
  it('11. can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek().value).toEqual(2);
  });
  it('12. can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
  });
  it('13. can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.peek()).toEqual(false);
  });
  it('14. calling dequeue or peek on an empty stack raises an exception', () => {
    let queue = new Queue();
    expect(queue.peek()).toBe(false);
    expect(queue.dequeue()).toBe(false);
  });
});


