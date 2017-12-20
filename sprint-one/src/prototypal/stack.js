var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var protoStack = Object.create(stackMethods);
  protoStack.storage = {};
  protoStack.count = 0;

  return protoStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

stackMethods.pop = function() {

	if(this.size()){
		this.count--;	
	}
	var popped = this.storage[this.count];
	delete this.storage[this.count];
	
	return popped; 
};

stackMethods.size = function() {
	return this.count;
}

