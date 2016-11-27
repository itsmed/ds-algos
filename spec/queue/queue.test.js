describe('Queue', function() {
  const { expect } = require('chai');
  const Queue = require('../../ds/Queue/queue_adt');
  describe('structure', function() {
    let q = new Queue();

    it('should be a function', function (done) {
      expect(typeof Queue === 'function').to.equal(true);
    });

    it('should use an object for storage', function (done) {
      expect(typeof q.storage === 'object').to.equal(true);
    });

    it('should have a property size, which is of type number', function() {
      expect(typeof q.size).to.equal('number');
    });

    it('should have a method called enqueue', function (done) {
      expect(q.enqueue instanceof Function).to.equal(true);
    });

    it('should have a method called dequeue', function (done) {
      expect(q.dequeue instanceof Function).to.equal(true);
    });
  });
});