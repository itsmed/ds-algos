describe('Queue', function() {
  const { expect } = require('chai');
  const Queue = require('../../ds/Queue/queue_adt');
  describe('structure', function() {
    it('should be a function', function (done) {
      let q = new Queue();
      expect(typeof q === 'function').to.equal(true);
    });
  });
});