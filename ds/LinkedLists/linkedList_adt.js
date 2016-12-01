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

  removeNode(target, node = this.head) {
    if (node.value === target) {
      console.log('node', node);
      delete this[node];
      return;
    }
    if (node.next === null) {
      return new Error('target node not found in list');
    }

    return this.removeNode(target, node.next);
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
