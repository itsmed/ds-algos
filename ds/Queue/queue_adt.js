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

  }

  peek() {

  }
}

module.exports = Queue;
