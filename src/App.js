import React, { Component } from 'react';
import myGraph from './my-graph.js';

export default class App extends Component {
  render() {
    var g = myGraph();
    var arr = [];
    for (var it = g.vertices(), kv; !(kv = it.next()).done;) {
      var key   = kv.value[0],
          value = kv.value[1];
      arr.push({key: key, val: value});
    }
    var li = arr.map((e)=>(<li key={e.key}>{e.key} -> {e.val.population} </li>));
//     var li = arr.map(function(e) { return <li key={e.key}>{e.key}: {e.val.population} </li>});
    return (
      <ul>{li}</ul>
    );
  }
}
