describe('Linked List', function() {
  const { expect } = require('chai');
  const LinkedList = require('../../ds/LinkedLists/linkedList_adt');

  describe('constructor', function() {
    let l = new LinkedList();

    it('should be a function', function () {
      console.log('ffsfsf', l instanceof Function);
      expect(typeof LinkedList).to.equal('function');
    });

    it('the constructor should return an object', function () {
      let l = new LinkedList(0);
      expect(typeof l).to.equal('object');
    });

    it('should have a createNode method', function () {
      expect(l.createNode instanceof Function).to.equal(true);
    });

    it('should have a addToHead method', function () {
      expect(l.addToHead instanceof Function).to.equal(true);
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

    it('should have a findValue method', function () {
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

    describe('findValue', function() {
      it('should return false if the value is not found in the list', function () {
        let l = new LinkedList(0);
        expect(l.findValue(9)).to.equal(false);
      });
    })
  });
});