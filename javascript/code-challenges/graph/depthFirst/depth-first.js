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
}

module.exports = { Vertex, Edge, Graph };
