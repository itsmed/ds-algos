'use strict';

class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  peek() {
    if (this.size === 0) {
      throw new Error('No elements in stack');
      return;
    }
    return this.storage[0];
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('No elements in stack');
      return;
    }
    this.size--;
    var temp = this.storage[this.size];
    delete this.storage[this.size];

    return temp;
  }
}

module.exports = Stack;
