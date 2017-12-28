// Instantiate a new graph
var Graph = function() {
  //create nodes obj
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //assign edges object to each nodes
  this.nodes[node] = {edges: {}};
  //console.log(this.nodes);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
   return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //removeNode function should remove edges connected to node too

  for (edge in this.nodes[node].edges) {
    this.removeEdge(node, edge);
  }
  delete this.nodes[node];
  //console.log('removed:', this.nodes);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this.nodes[fromNode].edges[toNode]
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function( fromNode , toNode) {
  //since it's undirected graph
  this.nodes[toNode].edges[fromNode] = fromNode;
  this.nodes[fromNode].edges[toNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  console.log('before rm_edg:',this.nodes);
  delete this.nodes[toNode].edges[fromNode];
  delete this.nodes[fromNode].edges[toNode];
  console.log('after rm_edg:',this.nodes);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};
var graph = new Graph();
graph.addNode(1);
// graph.addNode(2);
// graph.addNode(3);
// graph.addEdge(1,2);
// graph.addEdge(3,2);
// console.log(graph.hasEdge(1,2));
// console.log(graph.contains(2));
// graph.removeNode(1);
// console.log(graph.contains(1));
// graph.addNode(7);
// graph.forEachNode(function(val){console.log(val);})

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: Constant O(1)
 contains: Constant O(1)
 removeNode: Linear O(n)
 hasEdge: Constant O(1)
 addEdge: Constant O(1)
 removeEdge: Constant O(1)
 forEachNode: Linear O(n)
 */
