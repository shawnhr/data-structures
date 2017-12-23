
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node
    //if there is no head
      //set new node as head
    //if there is tail
      //add new node to that tail
    //else
      //set new node as tail
    var newNode = Node(value);

    if(!list.head) {
      list.head = newNode;
    }
    if(list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };


  list.removeHead = function() {
    //if head is null
      //return null;
    //store former head in temp var
    //set head.next as head
    //return removed head

    //if list.head === null
      //return null
    //else
      //removedHead = list.head
      //list.head = removedHead.next
      //return removedHead.value
    if (!list.head) {
      return null;
    } else {
      var removedHead = list.head;
      list.head = removedHead.next;
      return removedHead.value;
    }
  };

  list.contains = function(target) {
    //loop through list from head to tail
      //if there is any node matechs with target
        //return true;
      //else
        //move to next node
      //return flase if there is no match
      
    var node = list.head;
    while(node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

