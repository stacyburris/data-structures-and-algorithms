'use strict';

const { Vertex, Edge, Graph } = require('./graph');

describe('Graphs', () => {

  it('1. Node can be successfully added to the graph', () => {
    let vertex = new Vertex(5);
    let graph = new Graph();
    graph.addVertex(vertex);
    console.log({ graph });
    expect(graph.getNeighbors(vertex)).toEqual([]);
  });

  it('2. An edge can be successfully added to the graph', () => {
    let vertex = new Vertex(5);
    let secondVertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(secondVertex);
    graph.addDirectedEdge(vertex, secondVertex, 3);
    console.log({ vertex }, { secondVertex }, { graph });
    expect([graph.breadthFirstSearch(vertex)].toEqual([vertex, secondVertex]));

  });
  it('3. A collection of all nodes can be properly retrieved from the graph', () => {

  });
  it('4. All appropriate neighbors can be retrieved from the graph', () => {

  });
  it('5. Neighbors are returned with the weight between nodes included', () => {

  });
  it('6. The proper size is returned, representing the number of nodes in the graph', () => {

  });
  it('7. A graph with only one node and edge can be properly returned', () => {
    let vertex = new Vertex(5);
    let graph = new Graph();
    graph.addVertex(vertex);
    expect(graph.size(vertex)).toEqual(1);
  });
  it('8. An empty graph properly returns null', () => {
    let graph = new Graph();
    console.log({ graph });
    expect(graph.size()).toEqual(0);
  });
});
