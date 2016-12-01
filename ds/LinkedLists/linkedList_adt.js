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

  }
}

module.exports = LinkedList;
