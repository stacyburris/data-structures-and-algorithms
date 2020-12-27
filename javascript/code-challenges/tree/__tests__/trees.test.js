'use strict';

const Tree = require('../tree.js');

describe('Tree test', () => {
  it('1. Can successfully instantiate an empty tree', () => {
    let newTree = new Tree.BinaryTree();
    expect(newTree.rootNode.value).toEqual(null);
  });
  it('2. Can successfully instantiate a tree with a single root node.', () => {
    let newTree = new Tree.BinaryTree(5);

    expect(newTree.rootNode.value).toEqual(5);
  });
  it('3.Can successfully add a left child and right child to a single root node.', () => {
    let newTree = new Tree.BinarySearchTree(2);
    newTree.add(1);
    newTree.add(3);
    console.log(newTree);
    expect(newTree.rootNode.value).toEqual(2);
    expect(newTree.rootNode.left.value).toEqual(1);
    expect(newTree.rootNode.right.value).toEqual(3);
  });
  it('4.Can successfully return a collection from a preOrder traversal.', () => {
    let newTree = new Tree.BinarySearchTree(3);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(5);
    console.log(newTree);
    expect(newTree.preOrder()).toEqual([3, 2, 1, 4, 5]);
  });
  it('5.Can successfully return a collection from an inOrder traversal.', () => {
    let newTree = new Tree.BinaryTree(3);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(5);
    console.log(newTree);
    expect(newTree.inOrder()).toEqual([1, 2, 3, 4, 5]);
  });
  it('6.Can successfully return a collection from a postOrder traversal.', () => {
    let newTree = new Tree.BinaryTree(3);
    newTree.add(1);
    newTree.add(2);
    newTree.add(4);
    newTree.add(5);
    console.log(newTree);
    expect(newTree.postOrder()).toEqual([1, 4, 2, 5, 3]);
  });
});


