'use strict';

const Stack = require('../stacks-and-queues');
const Queue = require('../stacks-and-queues');


describe('stacks', () => {
  it('creates an instance', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBe(true);
  });
  describe('stacks and Queues', () => {
    describe('Stacks', () => {
      it('can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push('one');
        stack.push('two');
        stack.push('three');
        expect(stack.peek().value).toEqual('two');
      });
    });
    describe('Stacks and Queues', () => {
      describe('push()', () => {
        it('can successfully push onto a stack', () => {
          let stack = new Stack();
          stack.push('one');
          expect(stack.peek().value).toEqual('one');
        });
      });

      describe('push()', () => {
        it('can successfully push multiple values onto a stack', () => {
          let stack = new Stack();
          stack.push('one');
          stack.push('two');
          stack.push('three');
          expect(stack.size).toEqual('three');
        });
      });

      describe('pop()', () => {
        it('can successfully pop off the stack', () => {
          let stack = new Stack();
          stack.push('one');
          stack.push('two');
          stack.push('three');
          expect(stack.pop().value).toEqual('three');
          expect(stack.pop().value).toEqual('two');
          expect(stack.pop().value).toEqual('one');
        });
      });
      it('can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push('one');
        stack.push('two');
        stack.push('three');
        stack.push('four');

        expect(stack.pop().value).toEqual('four');
        expect(stack.pop().value).toEqual('three');
        expect(stack.pop().value).toEqual('two');
        expect(stack.pop().value).toEqual('one');
        expect(stack.top).toEqual(null);

      });

      describe('peek() or pop()', () => {
        it('can successfully instantiate a new stack', () => {
          let stack = new Stack();
          expect(stack.peek()).toEqual(false);
        });

        it('calling pop or peek on empty stack raises exception', () => {
          let stack = new Stack();
          expect(stack.peek()).toEqual(false);
          expect(stack.pop()).toEqual(false);
        });

      });


      describe('Queue', () => {
        it('can successfully enqueue into a queue', () => {
          let queue = new Queue();
          queue.enqueue('one');
          expect(queue.front.value).toEqual('one');
        });

        it('can successfully enqueue multiple values into a queue', () => {
          let queue = new Queue();
          queue.enqueue('one');
          queue.enqueue('two');
          queue.enqueue('three');
          expect(queue.size).toEqual(3);
        });

      });
    });
  });
});
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception
