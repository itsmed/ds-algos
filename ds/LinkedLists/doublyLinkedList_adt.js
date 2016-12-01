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

  insertAfter(target, value) {
    let n = this.createNode(value);

    let t = this.findValue(target);

    if (t === false) {
      return new Error('target not found in list, node not added');
    }

    n.next = t.next;
    n.previous = t;
    t.next = n;
  }

  removeNode(target) {

    let t = this.findValue(target);
    console.log('tttttt', t);
    if (t === false) {
      return new Error('target not found in list, node not added');
    } else {
      t.next.previous = t.previous;
      t.previous.next = t.next;
    }
  }
}

module.exports = DoublyLinkedList;


// var m = new DoublyLinkedList(0);

// m.insertAfter(0, 1);
// m.insertAfter(1, 2);

// console.log(m);