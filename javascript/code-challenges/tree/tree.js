'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  // define a method for each of the depth first traversals calle preOrder, inOrder and postOrder
  // which returns an array of the values, ordered appropriately
  // preOrder = root, left, right
  // inOrder = left, root, right
  // postOrder = left, right, root 
}

class BinaryTreeSearch {
  constructor()

  // define method named add that accepts a value and adds a new node with the value in the correct location
  // define a mehtod named contains that accepts a value and returns a boolean indicatiing whether or not the value is in the tree at least once
}