class LinkedList {
  constructor(val) {
    this.head = this.createNode(val);
    return this;
  }

  createNode(val) {
    return ({
      value: val,
      next: null
    });
  }

  insertAfter(target, val) {
    let newNode = this.createNode(val);
    let t = this.findValue(target);
    if (t === false) {
      return new Error('target not found, value not added to list');
    } else {
      t.next = newNode;
    }
  }

  findPrevious(item) {
    let currNode = this.head;

    while(!(currNode.next == null) && (currNode.next.value !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  removeNode(target) {
    var prevNode = this.findPrevious(target);

    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
    else {
      return new Error('target node not found in list');
    }

  }

  displayList(node = this.head) {
    console.log(node);
    if (node.next === null) {
      return;
    }
    this.displayList(node.next);
  }

  findValue(target) {

    function find(node) {
      if (node.value === target) {
        return node;
      }
      if (node.next === null && node.value !== target) {
        return false;
      }
      return find(node.next);
    }

    return find(this.head);
  }
}

module.exports = LinkedList;
