const edge = require('./get-edge');

describe('GetEdge', () => {
  it('If full trip is true, return how much it would cost', () => {
    let graph = new edge.Graph();
    graph.addVertex('Arendelle');
    graph.addVertex('New Monstropolis');
    graph.addVertex('Naboo');
    graph.addDirectedEdge('Arendelle', 'New Monstropolis', 'Naboo', 115);
    expect(graph.getEdge('Arendelle', 'New Monstropolis', 'Naboo')).toBe(true);
  });
});
