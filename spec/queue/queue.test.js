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

  describe('methods', function() {
    describe('enqueue', function() {
      let q = new Queue();

      it('should begin with an empty storage', function() {
        expect(q.size).to.equal(0);
      });

      it('should increase the size when queue is called', function (done) {
        q.enqueue('a');
        expect(q.size).to.equal(1);
        q.enqueue('b');
        expect(q.size).to.equal(2);
        q.enqueue('c');
        expect(q.size).to.equal(3);
      });

      it('should not return a value', function (done) {
        expect(q.enqueue('d')).to.equal(undefined);
      });
    });
  });

});