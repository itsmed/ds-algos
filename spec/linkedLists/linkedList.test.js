describe('Linked List', function() {
  const { expect } = require('chai');
  const LinkedList = require('../../ds/LinkedList/linkedList_adt');

  describe('constructor', function() {
    it('should be a function', function (done) {
      expect(LinkedList instanceof Function).to.equal(true);
    });

    it('should have a createNode method', function (done) {
      expect(LinkedList.createNode instanceof Function).to.equal(true);
    });

    it('should have an insertAfter method', function (done) {
      expect(LinkedList.insertAfter instanceof Function).to.equal(true);
    });
  });
});