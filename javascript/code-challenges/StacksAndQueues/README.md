# Stacks and Queues

## Author: Stacy Burris

## Challenge

+ Create a class of Stacks and Queues

### Stack

+ Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

+ Create a Stack class that has a top property. It creates an empty Stack when instantiated.

### Queue

+ Create a Queue class that has a front property. It creates an empty Queue when instantiated.

## API, Approach & Efficiency

+ Stack - Last In First Out (LIFO)
  + push() - O(n) - Takes a value and adds to the top of the stack
  + pop() - O(n) - Removes the top value from a stack and returns the value
  + peek() - O(1) - Looks at the top and knows whats there and returns the value of the top of the stack
  + isEmpty() - O(1) - Returns true or false whether the stack is empty 

+ Queues - Firsts In First Out (FIFO)
  + enqueue() - O(1) - Takes a value and adds to the front of the queue
  + dequeue() -O(1) - Removes a node or item from the front of the queue and returns the value
  + peek() - O(1) - Looks at the front and knows whats there and returns the value of the front
  + isEmpty() - O(1) - Returns true or false whether or not the queue is empty

### Resources

+ [Stack overflow](https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript)
+ [Jest Sheet](https://jestjs.io/docs/en/expect.html#reference)