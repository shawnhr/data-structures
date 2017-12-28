
var HashTable = function() {
  this._count = 0;  
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
//converts storage index key into integer according to maximum size
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieve a bucket using get method
  //if bucket doesn't exist
    //create a new bucket using set method 
  //else
    //iterate through bucket
      //if key already exist
        //update the value of the key
      //else
        //create a new tuple 
  var bucket = this._storage.get(index);
  if(!bucket){
    bucket = [];
    //without helper: this._storage[index] = [];
    this._storage.set(index, bucket);
  }
  for(var i = 0; i < bucket.length; i++){
  //bucket[i][0]=> key of each tuple 
  if(bucket[i][0] === k){
    bucket[i][1] = v;
    return;
  }
  }
  bucket.push([k,v]);
  //increase count only when new tuple is created
  this._count++;
  if(this._count > this._limit * 0.75){
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(!bucket){
    return undefined;
  }
  for( var i = 0; i < bucket.length; i++){
      //check if a tuple with corresponding key exist
      if(bucket[i][0] === k){
        return bucket[i][1];
      }
    }
    return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //without helper: this._storage[index];
  var bucket = this._storage.get(index);
  if(!bucket){
    return [];
  }
  for(var i = 0; i < bucket.length; i++){
  var tuple = bucket[i]
  if(tuple[0] === k){
    bucket.splice(i,1);
    //decrease the count only when a tuple is removed
    this._count--;
      if(this._count < this._limit * 0.25){
        this.resize(this._limit / 2);
      }
    return tuple[1];
  }
  }
  return undefined;
};

//advanced
HashTable.prototype.resize = function(newLimit){
  var removedStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit)
  this._count = 0;
 
  //use either context = this or bind(this) to look outside this context;
  var context = this;
  removedStorage.each(function(bucket){
    //insert old tuples with new index
    if(!bucket){
      return;
    }
    for(var i = 0; i < bucket.length; i++){
      context.insert(bucket[i][0], bucket[i][1]);
    }
  });
};
// hash = new HashTable();
// hash.insert('val1', 'val2');

/*
 * Complexity: What is the time complexity of the above functions?
  insert: Constant O(1)
  retrieve: Constant O(1)
  remove: Constant O(1)
  resize: Linear O(n)
 */


