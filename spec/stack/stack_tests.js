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
});
