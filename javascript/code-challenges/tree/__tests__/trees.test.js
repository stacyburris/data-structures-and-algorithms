'use strict';

//const treeModule = require('../tree.js');

//const Node = treeModule.Node;
//const BinaryTree = treeModule.BinaryTree;
//const BinarySearchTree = treeModule.BinarySearchTree;

'use strict';
const { Node, BinarySearchTree } = require('../tree.js');
//let node = new Node(3);
//let tree = new BinarySearchTree();
// // Since BinarySearchTree extended BinaryTree we can:
// tree.add(9);
// tree.contains(9);
// tree.preOrder();
// tree.inOrder();
// tree.postOrder();

describe('Tree test', () => {
  it('1. Can successfully instantiate an empty tree', () => {
    let newTree = new BinarySearchTree();
    expect(newTree.rootNode.value).toEqual(null);
  });
  it('2. Can successfully instantiate a tree with a single root node.', () => {
    let newTree = new BinarySearchTree(5);

    expect(newTree.rootNode.value).toEqual(5);
  });
  it('3.Can successfully add a left child and right child to a single root node.', () => {
    let node = new Node(2);
    let newTree = new BinarySearchTree(node);
    newTree.add(1);
    newTree.add(3);
    console.log(newTree);
    expect(newTree.rootNode.value).toEqual(2);
    expect(newTree.rootNode.left.value).toEqual(1);
    expect(newTree.rootNode.right.value).toEqual(3);
  });
  it('4.Can successfully return a collection from a preOrder traversal.', () => {
    let node = new Node(5);
    let newTree = new BinarySearchTree(node);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(3);
    //newTree.add(6);
    //newTree.add(7);
    console.log(newTree);
    expect(newTree.preOrder()).toEqual([5, 2, 1, 4, 3]);
  });
  it('5.Can successfully return a collection from an inOrder traversal.', () => {
    let node = new Node(5);
    let newTree = new BinarySearchTree(node);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(3);
    console.log(newTree);
    expect(newTree.inOrder()).toEqual([1, 2, 5, 4, 3]);
  });
  it('6.Can successfully return a collection from a postOrder traversal.', () => {
    let node = new Node(5);
    let newTree = new BinarySearchTree(node);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(3);
    console.log(newTree);
    expect(newTree.postOrder()).toEqual([1, 4, 2, 3, 5]);
  });
  it('Returns an array of the breadth first BinaryTree', () => {
    let node = new Node(5);
    let newTree = new BinarySearchTree(node);
    newTree.add(3);
    newTree.add(8);
    newTree.add(2);
    newTree.add(6);
    newTree.add(1);
    console.log('this is my tree', newTree.breadthFirst());
    expect(newTree.breadthFirst()).toEqual([6, 3, 8, 2, 5, 1]);
  });
});


