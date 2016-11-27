describe('Stacks', function() {
  const Stack = require('../../ds/Stack/stack_adt');
  const { expect } = require('chai');

  describe('Stack methods and structure', function() {
    let stack = new Stack();
    it('should use an object as storage', function () {
      expect(typeof stack.storage).to.equal('object');
    });
    it('the storage object should be empty when first created', function () {
      expect(Object.keys(stack.storage).length).to.equal(0);
    });
    it('should have a size of zero when first created', function () {
      expect(stack.size).to.equal(0);
    });
    it('should have the method peek', function () {
      expect(stack.peek instanceof Function).to.equal(true);
    });
    it('should have the method push', function () {
      expect(stack.push instanceof Function).to.equal(true);
    });
    it('should have the method pop', function () {
      expect(stack.pop instanceof Function).to.equal(true);
    });
  });

  describe('Stack functionality', function() {
    const stack = new Stack();

    it('should begin with a size of 0', function() {
      expect(stack.size).to.equal(0);
    });
    it('should add a value and increment size when push is called', function () {
      stack.push('a');
      expect(stack.size).to.equal(1);
    });
    it('should return the first item without modifying the stack when peek is called', function () {
      expect(stack.peek()).to.equal('a');
      expect(stack.size).to.equal(1);
    });
    it('should return the item that was most recenlty added when pop is called', function () {
      stack.push('b');
      stack.push('c');
      expect(stack.pop()).to.equal('c');
    });
    it('should decrement size when pop is called', function () {
      expect(stack.size).to.equal(2);
      stack.push('z');
      expect(stack.size).to.equal(3);
      stack.pop();
      expect(stack.size).to.equal(2);
    });
  });
});
