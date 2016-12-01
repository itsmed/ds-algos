const LinkedList = require('./linkedList_adt');

class DoublyLinkedList extends LinkedList {
  constructor(val) {
    super(val);
  }

  createNode(val) {
    return ({
      value: val,
      next: null,
      previous: null
    })
  }
}


var m = new DoublyLinkedList(0);

m.insertAfter(0, 1);
m.insertAfter(1, 2);

console.log(m);