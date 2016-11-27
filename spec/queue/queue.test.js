describe('Queue', function() {
  const { expect } = require('chai');
  const Queue = require('../../ds/Queue/queue_adt');
  describe('structure', function() {
    let q = new Queue();

    it('should be a function', function () {
      expect(typeof Queue === 'function').to.equal(true);
    });

    it('should use an array for storage', function () {
      expect(Array.isArray(q.storage)).to.equal(true);
    });

    it('should have a property size, which is of type number', function() {
      expect(typeof q.size).to.equal('number');
    });

    it('should have a method called enqueue', function () {
      expect(q.enqueue instanceof Function).to.equal(true);
    });

    it('should have a method called dequeue', function () {
      expect(q.dequeue instanceof Function).to.equal(true);
    });

    it('should have a method called peek', function () {
      expect(q.peek instanceof Function).to.equal(true);
    });
  });
});