'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {

    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight) {

    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('error: need a start or end vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }

  breadthFirstSearch(startNode) {
    const queue = [];
    // a Set is an object that will only store unique keys
    const visitedNodes = new Set();
    // creating me a record of where I have been visitedNodes
    queue.push(startNode);
    visitedNodes.add(startNode);
    while (queue.length) {

      const currentNode = queue.shift();
      // get all thr neighbors of the node that I took off of the queue
      const neighbors = this.getNeighbors(currentNode);
      // loop over all of the neighbors
      for (let neighbor of neighbors) { // another way to write a for loop returns elements 
        const neighborNode = neighbor.vertex;
        // if the Set has the node that I'm looking for
        if (visitedNodes.has(neighborNode)) {
          // stop looking at this node and go to the next one
          continue;
        } else {
          // otherwise, I haven't been there. I need to add it to the Set
          visitedNodes.add(neighborNode);
        }
        // put it into the queue
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  depthFirstSearch(startNode) {
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      // add node to Set
      visitedNodes.add(node);
      const neighbors = this.getNeighbors(node);
      for (let edge of neighbors) {
        if (!visitedNodes.has(edge.vertex)) {
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return visitedNodes;
  }

  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map(); // Map = object
    stack.push(startNode);
    visitedNodes.add(startNode);
    // iterate through
    while (stack.length) {
      const currentNode = stack.pop();
      // make sure that our currentNode is not out end
      if (currentNode === endNode) {
        return parentPath;
      }
      // get all the neighbors
      const neighbors = this.getNeighbors(currentNode);
      // loop over the edges
      for (let neighbor of neighbors) {
        // find vertex node
        const neighborNode = neighbor.vertex;
        // check if the Set contains that node
        if (visitedNodes.has(neighborNode)) {
          // stop looking at this node and move along
          continue;
        } else {
          // otherwise add the node to the Set
          visitedNodes.add(neighborNode);
        }
        // add it to the stack
        stack.push(neighborNode);
        // in the parentPath Map, set a path with this as the key and currentNode as the value
        parentPath.set(neighborNode, currentNode);
      }
    }
    return parentPath;
  }

  size(startNode) {
    let count = 0;
    if (!startNode) return count;
    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      visitedNodes.add(node);
      count++;

      const neighbors = this.getNeighbors(node);
      for (let edge of neighbors) {
        if (!visitedNodes.has(edge.vertex)) {
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return count;
  }
}


module.exports = { Vertex, Edge, Graph };
