'use strict';

const Graph = require('./breadth-first');

describe('BreadthFirstSearch traversal in a Graph', () => {
  it('Successfully returns a collection of vertices', () => {
    let graph = new Graph();
    graph.addVertex('Pandora');
    graph.addVertex('Arendelle');
    graph.addVertex('Metroville');
    graph.addVertex('Monstropolis');
    graph.addVertex('Naboo');
    graph.addVertex('Narnia');
    graph.addDirectedEdge('Pandora', 'Arendelle', 1);
    graph.addDirectedEdge('Arendelle', 'Metroville', 2);
    graph.addDirectedEdge('Arendelle', 'Monstropolis', 3);
    graph.addDirectedEdge('Metroville', 'Monstropolis', 4);
    graph.addDirectedEdge('Metroville', 'Naboo', 5);
    graph.addDirectedEdge('Metroville', 'Narnia', 6);
    graph.addDirectedEdge('Monstropolis', 'Narnia', 7);
    graph.addDirectedEdge('Naboo', 'Narnia', 8);
    expect([...graph.breadthFirstSearch('Pandora')]).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Naboo', 'Narnia']);
  });
});
