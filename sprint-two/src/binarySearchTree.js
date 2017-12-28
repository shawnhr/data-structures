var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreePrototype);
  //constructor
    //value 
    //left
    //right

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  };

  var binaryTreePrototype = {};
  

  binaryTreePrototype.insert = function(val){
  //if value < current
  //if left exist then  if(left) go left
  //  else add new child to left
  //if value > current
  //  if(right)go right
  //  else insert node to right

  //console.log("this is:",this);
  if(val < this.value){
    if(this.left) this.left.insert(val);
    else this.left = BinarySearchTree(val);
  }  
  else{
    if(this.right) this.right.insert(val);
    else this.right = BinarySearchTree(val);
  } 
  };
  binaryTreePrototype.contains = function(val){
    //if value === current
      //return true
    //if value < current
    //if this.left doesn't exist then return false
    //if it does exist, then check if it's subtree contains the value
    if(this.value === val) return true;
    if(this.value > val){
      return !!this.left && this.left.contains(val);
    }
    //if this.right doesn't exist then return false
    //if it does exist, then check if it's subtree contains the value
    if(this.value < val){
      return !!this.right && this.right.contains(val);
    }
  };
  binaryTreePrototype.depthFirstLog = function(cb){
    cb(this.value);
    if(this.left){this.left.depthFirstLog(cb);}
    if(this.right){this.right.depthFirstLog(cb);}
  };




 //====test====
  bst = BinarySearchTree(11);
  //console.log(bst);
  //{value: 11, left: null, right: null}
  bst.insert(15);
  
  //{value: 11, left: null, right: {15}}
  bst.insert(7);
  console.log(bst);

  //{value: 11, left: {7}, right {15}}
  bst.insert(5);
  //{value: 11, left: {v:7, left:{5....}}, right: {15..}}
  //console.log(bst);

  //call stack when recurs
    //insert(val)
      //if value < current 5 < 11
      //  if(left) go left
      //    this.left.insert(val) is same as {value: 7, left..}.insert(val)
      //  else insert on current's left
      //if value > current
      //  if(right)go right
      //  else insert new tree w/ value
      //  add to current's right

/*
 * Complexity: What is the time complexity of the above functions?
   insert: Logarithmic O(logn)
   contains: Logarithmic O(logn)
   depthFirstLog: Logarithmic O(logn)
 */
