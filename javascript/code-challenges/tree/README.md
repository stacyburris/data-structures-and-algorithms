# Trees

+ Create a Node class, BinaryTree class and BinarySearchTree class

## Challenge

+ Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
+ Create a BinaryTree class and define a method for each of the depth first traversals called preOrder, inOrder and postOrder which returns an array of the values ordered appropriately.
+ Create a BinarySearchTree class that defines a method named add that accepts a value, and adds a new node with the value in the correct location in the binary search tree. Also define a method named contains that accepts a value, and returns a boolean indicating whether the value is in the tree at least once.

## Approach & Efficiency

+ BigO:
  + O(n) time
  + O(h) complexity

## API

**BinaryTree**

- preOrder = root, left, right
- inOrder = left, root, right
- postOrder = left, right, root 
