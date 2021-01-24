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
  // {
  // Node: []
  // }
  // add a new vertex to this graph
  addVertex(vertex) {
    // .set(key, value) puts a key/value (aka node)  in the Map// when you add a node(vertex) for the first time, the value is an empty array because it will eventually hold a list of all of the nodes that it is connected too.
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    // error checking: we must have a starting ann ending node
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('error: need a start or end vertex');
    }
    // get startVertex from the Map (all of vertices)
    // push a new Edge that will connect the start to the nd into the array along with the weight
    // adjacencies is an array
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }
  ////////////////////////////////////////////////////////////////////
  breadthFirstSearch(startNode) {
    const queue = [];
    // a Set is an object that will only store unique keys
    const visitedNodes = new Set();
    // creating me a record of where I have been visitedNodes
    queue.push(startNode);
    visitedNodes.add(startNode);
    while (queue.length) {
      // remove the first item from the queue
      // .shift takes off a node and saves it in currentNode
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
  /////////////////////////////////////////////////////////////////
  depthFirstSearch(startNode) {
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      // add node to Set
      visitedNodes.add(node);
      // get all neighbors
      const neighbors = this.getNeighbors(node);
      // loop over those neighbors
      for (let edge of neighbors) {
        // if the set doesn't have the node
        if (!visitedNodes.has(edge.vertex)) {
          // then I want to run this function again which will add it to the set and get the neighbor node and loop and run the whole thing again...
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return visitedNodes;
  }
  ///////////////////////////////////////////////////////////
  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map(); // Map = object
    stack.push(startNode);
    visitedNodes.add(startNode);
    // iterate through
    while (stack.length) {
      // remove the top/last thing from the stack
      const currentNode = stack.pop(); // returns the thing that was popped off
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
// tests and size
//time: o(n^2) - nested loops

// create new graph
// add vertex
// add edges
// travel along
// expect last one to have weight

module.exports = { Vertex, Edge, Graph };
