class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  enqueue(val) {
    this.storage.push(val);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.storage.shift();
  }

  peek() {

  }
}

module.exports = Queue;
