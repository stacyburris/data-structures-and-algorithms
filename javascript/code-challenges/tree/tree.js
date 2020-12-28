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
  preOrder() { // root, left, right 
    let newArray = []; // declare empty array for the output
    let currentNode = this.rootNode;

    let traverse = rootNode => {
      newArray.push(rootNode.value);
      if (rootNode.left) traverse(rootNode.left);
      if (rootNode.right) traverse(rootNode.right);
    };
    traverse(currentNode);
    return newArray;
  }

  inOrder() { // left, root, right 
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

  postOrder() { // left, right, root
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

findMaximumValue() {
  let arrayValues = inOrder(root);

  for (i = 0; i <= arrayValues.length; i++) {
    let max = 0;

    if (arrayValues[i] > max)
      max = arrayValues[i];
  }

  return max;
}









//module.exports = { Node, BinaryTree, BinarySearchTree };
module.exports.Node = Node;
module.exports.BinaryTree = BinaryTree;
module.exports.BinarySearchTree = BinarySearchTree;

// 'use strict';
// class Node {
//   constructor(value, leftChild = null, rightChild = null) {
//     this.value = value; this.leftChild = leftChild; this.rightChild = rightChild;
//   }
// }
// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }
//   // preOrder(), inOrder(), postOrder()
// }
// class BinarySearchTree extends BinaryTree {
//   // add(value), contains(value)
// }
// module.exports = { Node, BinaryTree, BinarySearchTree };




//////////////notes from class

// class Node {
//   constructor(value = 0, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }
// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }
//   // this will add a value to a BST
//   add(value) {
//     // if we are adding to a BST, the value has to be an integer
//     if (typeof value !== 'number') {
//       return null;
//     }
//     // make a new node to insert
//     if (!this.root) {
//       this.root = new Node(value);
//       return;
//     }


//     let _insert = (node) => {
//       // if the value is less than the value of the value of the node
//       if (value < node.value) {
//         if (node.left === null) {
//           node.left = new Node(value);
//           return;
//         }
//         // otherwise...
//         else if (node.left !== null) {
//           return _insert(node.left);
//         }
//       }
//       // if the value is greater // if there are equal values go to the right
//       else if (value >= node.value) {
//         // if there is no right node, create a new node - and done!
//         if (node.right === null) {
//           node.right = new Node(value);
//           return;
//         }
//         // if it is not null
//         else if (node.right !== null) {
//           // continue to the right with the _insert function
//           return _insert(node.right);
//         }
//       }
//     }
//     _insert(this.root); // got to kick off function and call outside of function
//   }
//   // Depth First Search
//   // Works with either a BST or just a BT
//   preOrder() { //// root, left, right 
//     // create an array that holds the values
//     const results = [];

//     let _walk = (node) => {
//       results.push(node.value);
//       if (node.left) _walk(node.left);
//       if (node.right) _walk(node.right);
//     }
//     _walk(this.root);
//   }
// }