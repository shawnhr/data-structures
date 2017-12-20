var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var protoQueue = Object.create(queueMethods);
  protoQueue.storage = {};
  protoQueue.start = 0;
  protoQueue.end = 0;

  return protoQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.end] = value;
	this.end++;
};

queueMethods.dequeue = function() {
	var dequeued = this.storage[this.start];

	if (this.size()) {
		delete this.storage[this.start];
		this.start++;
	}

	return dequeued;


};

queueMethods.size = function() {
	return this.end - this.start;
}

