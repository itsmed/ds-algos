(function() {

  class List {
    constructor() {
      this.storage = [];
      this.currentPosition = 0;
    }
    clear() {
      this.storage = [];
    }
    getSize() {
      return this.storage.length;
    }
    toString() {
      console.log(this.storage);
    }
    getElement() {
      return this.storage[this.currentPosition];
    }
    insert(val, target) {
      let targetIndex = this.storage.indexOf(target);
      if (targetIndex < 0) {
        return 'Target not in list, value not added';
      }
      this.storage.splice(++targetIndex, 0, val);
    }
    append(val) {
      this.storage.push(val);
    }
    remove(val) {
      let targetIndex = this.storage.indexOf(val);
      if (targetIndex < 0) {
        return 'Value not in list, value cannot be deleted';
      }
      this.storage.splice(targetIndex, 1);
    }
    front() {
      this.currentPosition = 0;
    }
    end() {
      this.currentPosition = this.storage.length - 1;
    }
    prev() {
      this.currentPosition--;
    }
    next() {
      this.currentPosition++;
    }
    getPosition() {
      return this.currentPosition;
    }
    moveTo(index) {
      this.currentPosition = index;
    }
    contains(item) {
      return this.storage.indexOf(item.toUpperCase().trim()) > -1;
    }
  }

  module.exports = List;

}());
