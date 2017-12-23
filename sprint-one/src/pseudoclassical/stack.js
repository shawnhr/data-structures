var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
	this.storage[this.count] = value;
	this.count++;
	console.log(this.storage);
};

Stack.prototype.pop = function() {
	if (this.size()) {
		this.count--;
	}
	var popped = this.storage[this.count];
	delete this.storage[this.count];

	return popped;
};

Stack.prototype.size = function() {
	return this.count;
};

//create instance using new keyword

// var a = new Stack();
// a.push('a');
