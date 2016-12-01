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

  addToHead(node) {

  }

  insertAfter(val, target) {

  }

  removeNode(target) {

  }

  displayList() {

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
