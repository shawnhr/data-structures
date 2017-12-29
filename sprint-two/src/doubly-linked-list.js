var DoublyLinkedList = function(value) {
  var list = {};
  list.head = Node(value);
  list.tail = list.head;

  
  list.addToHead = function(value) {
  	//create new node
  	//save current head to temp
  	//set new node as head
  	//set current head as new node's next
  	//set new node as current head's previous
  	var newNode = Node(value);
  	var oldHead = list.head;
  	list.head = newNode;
  	newNode.next = oldHead;
  	oldHead.previous = newNode;
  	//console.log(list);

  };
  list.addToTail = function(value) {
  	//create new node
  	//save current tail to temp
  	//set new node as tail
  	//set current tail as new node's previous
  	//set new node as current tail's next
  	var newNode = Node(value);
  	var oldTail = list.tail;
  	list.tail = newNode;
  	newNode.previous = oldTail;
  	oldTail.next = newNode;
  	//console.log(list);
  };
  list.removeHead = function() {
  	//save current head to temp
  	//set current's next as new head
  	//replace current head with new head
  	//set new head's previous null
  	//set old head's next null
  	var oldHead = list.head;
  	var newHead = oldHead.next;
  	list.head = newHead;
  	newHead.previous = null
  	oldHead.next = null;
  };
  list.removeTail = function() {
  	var oldTail = list.tail;
  	var newTail = oldTail.previous;
  	list.tail = newTail;
  	newTail.next = null;
  	oldTail.previous = null;

  };
  list.contains = function(val) {
  	var node = this.head;
    while(node){
    	if(node.value === val) return node;
    	node = node.next;
    }
    return false;
  };
  list.print = function(){
  	
  	console.log(list);
  };
  return list;
};

  
var Node = function(value) {
	var node = {};

	node.value = value;
	node.next = null;
	node.previous = null;

	return node;
};

var newList = DoublyLinkedList(1);
newList.addToHead(2);
newList.addToTail(3);
newList.addToTail(4);

newList.print();
newList.removeHead();
console.log("===after head is removed ====")
newList.print();
newList.removeTail();
console.log("===after tail is removed ====")
newList.print();

/*
 * Complexity: What is the time complexity of the above functions?
 addToHead: Constant O(1)
 addToTail: Constant O(1) 
 contains: Constant O(1) 
 removeHead: Constant O(1)
 removeTail: Constant O(1)

 con: Each node takes up more memory space than singly list 
 */