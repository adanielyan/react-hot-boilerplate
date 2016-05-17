var Graph = require('graph.js/dist/graph.full.js');

export default function myGraph() {

  var graph = new Graph(
    ['Amsterdam',             { population: 825000 }], // vertex
    ['Leiden',                { population: 122000 }], // vertex
    [['Amsterdam', 'Leiden'], { distance:   "40km" }]  // edge
  );

  return graph;

}