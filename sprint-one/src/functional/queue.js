var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    //increase end by 1 after each enqueue
    end++;
    //console.log(storage);
  };
  
  someInstance.dequeue = function() {
    var dequeued = storage[start];
    
    
    if(someInstance.size()){
      delete storage[start];
      //increase start by 1 after each dequeue 
      start++;
    }
   
    return dequeued;

  };

  someInstance.size = function() {
    //size = end - start
    return end - start;
  };

  return someInstance;
};

//FIFO

// var q =  Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.dequeue();
// q.enqueue('c');
// console.log(q.size());
