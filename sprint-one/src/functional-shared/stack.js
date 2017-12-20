//var extend = require('extend');
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //create stack obj to share
  var sharedStack = {};
  //stack props
  sharedStack.storage = {};
  sharedStack.count = 0;
  //extend
  _.extend(sharedStack, stackMethods);
  //extend(sharedStack, stackMethods);

  return sharedStack;
};

//create another obj to extend
var stackMethods = {};
//obj props
stackMethods.push = function (value) {
	this.storage[this.count] = value;
	this.count++;
	console.log(this.storage);
};

stackMethods.pop = function () {
	if (this.count){
		this.count--;
	}
	var popped = this.storage[this.count];
	delete this.storage[this.count];

	return popped;
};

stackMethods.size = function() {
	return this.count;
};

//LIFO

// var a = Stack();
// a.push('a');
// a.push('b');
// a.pop();
// a.push('c');
// console.log(a.size());
