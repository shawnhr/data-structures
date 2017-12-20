var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sharedQueue = {};
  sharedQueue.storage = {};
  sharedQueue.start = 0;
  sharedQueue.end = 0;

  _.extend(sharedQueue, queueMethods);

  return sharedQueue;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.end] = value;
	this.end++;
};

queueMethods.dequeue = function() {
	var dequeued = this.storage[this.start];
	

	if(this.size()) {
		delete this.storage[this.start];
		this.start++;
	}
	return dequeued;
};

queueMethods.size = function(){
	return this.end - this.start;
};

