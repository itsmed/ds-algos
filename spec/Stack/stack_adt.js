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
    if (this.storage === 0) {
      throw new Error('No elements in stack');
      return;
    }
    this.size--;
    var i = 0,
        temp = this.storage[0];
    while (i < this.size) {
      this.storage[i] = this.storage[i + 1];
      delete this.storage[i + 1];
      i++;
    }
    return temp;
  }
}

