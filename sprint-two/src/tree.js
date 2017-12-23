//var extend = require('extend');
var Tree = function(value) {
  //instead of node.next, tree store children in array
  var newTree = {};
  newTree.value = value;
  
  // your code here
  //add all child to children array
  newTree.children = [];  // fix me
  //functional-shared style
  //extend(newTree, treeMethods);
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //Instantiate new child without using 'new' keyword
  //push new child to children array	
  var child = Tree(value);
  this.children.push(child);
  console.log(this);
  return child;
};

treeMethods.contains = function(target) {
  //create inner function
  //loop through each child of tree
  //check if any child matches with target

  var contains = false;

  var search = function(target, tree) {
    //base
    if (tree.value === target) {
      contains = true;
    }
    //recurs
    if (tree.children) {
      tree.children.forEach( (child) => search(target, child) )
    }
  };

  search(target, this);
  return contains;
};

// var tree = Tree(1);
// var branch1 = tree.addChild(2);
// var branch2 = tree.addChild(3);
// branch1.addChild(5);
// branch2.addChild(7).addChild(8);
// console.log(tree);

/*
 * Complexity: What is the time complexity of the above functions?
 */
