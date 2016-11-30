describe('Linked List', function() {
  const { expect } = require('chai');
  const LinkedList = require('../../ds/LinkedLists/linkedList_adt');

  describe('constructor', function() {
    let l = new LinkedList();

    it('should be a function', function () {
      console.log('ffsfsf', l instanceof Function);
      expect(typeof LinkedList).to.equal('function');
    });

    it('should have a createNode method', function () {
      expect(l.createNode instanceof Function).to.equal(true);
    });

    it('should have an insertAfter method', function () {
      expect(l.insertAfter instanceof Function).to.equal(true);
    });

    it('should have a removeNode method', function () {
      expect(l.removeNode instanceof Function).to.equal(true);
    });

    it('should have a displayList method', function () {
      expect(l.displayList instanceof Function).to.equal(true);
    });

    it('should have a findValue method', function (done) {
      expect(l.findValue instanceof Function).to.equal(true);
    });
  });

  describe('linked list methods', function() {
    describe('createNode', function() {
      let l = new LinkedList();
      let newNode = l.createNode('hello');
      it('should return an object', function() {
        expect(newNode instanceof Object).to.equal(true);
      });

      it('should return an object with keys value and next', function () {

        expect(newNode.hasOwnProperty('value')).to.equal(true);
        expect(newNode.hasOwnProperty('next')).to.equal(true);
      });
    });
  });
});