'use strict';

class Node {
  //constructor(value = null, left = null, right = null) {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(rootNode = null) {
    this.rootNode = new Node(rootNode);
  }
  preOrder() {
    let newArray = []; // declare empty array for the output
    let currentNode = this.rootNode;

    let traverse = rootNode => {
      newArray.push[rootNode.value];
      if (rootNode.left) traverse(rootNode.left);
      if (rootNode.right) traverse(rootNode.right);
    };
    traverse(currentNode);
    return newArray;
  }

  inOrder() {
    let newArray = [];
    let currentNode = this.rootNode;

    let traverse = rootNode => {
      if (rootNode.left) traverse(rootNode.left);
      newArray.push(rootNode.value);
      if (rootNode.right) traverse(rootNode.right);
    };
    traverse(currentNode);
    return newArray;
  }

  postOrder() {
    let newArray = [],
      currentNode = this.rootNode;

    let traverse = rootNode => {
      if (rootNode.left) traverse(rootNode.left);
      if (rootNode.right) traverse(rootNode.right);
      newArray.push(rootNode.value);
    };
    traverse(currentNode);
    return newArray;
  }

}

class BinarySearchTree {
  constructor(rootNode = null) {
    this.rootNode = new Node(rootNode);
  }

  add(newNodeValue) { // creates the add method
    let newNode = new Node(newNodeValue);

    if (!this.rootNode) {
      this.rootNode = newNode;

    } else {
      this.add(this.rootNode, newNode);

    }
    return this.rootNode;
  }

  contains(searchValue) {
    let node = this.rootNode;
    let traverse = node => {
      if (!node) return false;
      if (searchValue === node.searchValue) {
        return true;
      } else if (searchValue > node.searchValue) {
        return traverse(node.right);
      } else if (searchValue < node.searchValue) {
        return traverse(node.left);
      }
    };
    return traverse(node);
  }
}





module.exports = { Node, BinaryTree, BinarySearchTree };
