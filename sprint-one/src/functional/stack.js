var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    //move the pointer after each push
    count++;
    //console.log(storage)
  };

  someInstance.pop = function() {

    if (count > 0) {
      //move the pointer backward before pop
      count--;
    }
    var popped = storage[count];
    delete storage[count];
    return popped;

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

//LIFO

// var a =  Stack();
// a.push('a');
// a.push('b');
// a.pop();
// a.push('c');
// console.log(a.size());