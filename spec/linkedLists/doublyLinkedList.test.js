describe('Doubly Linked List', function() {
  const chai = require('chai');
  const expect = chai.expect;
  const sinon = require('sinon');
  const sinonChai = require('sinon-chai');

  chai.use(sinonChai);

  const DoublyLinkedList = require('../../ds/LinkedLists/doublyLinkedList_adt');

  describe('constructor', function() {
    let l = new DoublyLinkedList();

    it('should be a function', function () {
      expect(typeof DoublyLinkedList).to.equal('function');
    });

    it('the constructor should return an object', function () {
      let l = new DoublyLinkedList(0);
      expect(typeof l).to.equal('object');
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

    it('should have a findValue method', function () {
      expect(l.findValue instanceof Function).to.equal(true);
    });
  });

  describe('linked list methods', function() {
    describe('createNode', function() {
      let l = new DoublyLinkedList();
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
      let l = new DoublyLinkedList(0);
      it('should return false if the value is not found in the list', function () {
        expect(l.findValue(9)).to.equal(false);
      });

      it('should return the node with the target value if it is in the list', function () {
        expect(l.findValue(0)).to.deep.equal(l.head);
      });
    });

    describe('insertAfter', function() {
      let l = new DoublyLinkedList(0);
      l.insertAfter(0, 1);
      l.insertAfter(1, 2);
      it('should insert a new node after the node with the given value', function() {
        expect(l.head.next.value).to.equal(1);
      });

      it('should return an error if the target value is not in the list', function () {
        expect(l.insertAfter(3, 5) instanceof Error).to.equal(true);
      });
    });

    describe('displayList', function() {
      it('should log each node when there is one item in the list', function() {
        let mySpy = sinon.spy(console, 'log');
        let l = new DoublyLinkedList(0);
        l.displayList();

        expect(mySpy).to.have.been.calledWith(l.head);
        console.log.restore();
      });

      it('should log each node in the list when there is more than one item in the list', function () {
        let mySpy = sinon.spy(console, 'log');
        let l = new DoublyLinkedList(0);
        l.insertAfter(0, 1);
        l.insertAfter(1, 2);
        l.displayList();

        expect(mySpy.callCount).to.equal(3);
        console.log.restore();
      });
    });

    describe('removeNode', function() {
      it('should return an error when the target value is not found in the list', function () {
        let l = new DoublyLinkedList(1);

        expect(l.removeNode(9) instanceof Error).to.equal(true);
      });

      it('should remove the target node if it exists in the list', function() {
        let l = new DoublyLinkedList(0);
        l.insertAfter(0, 1);
        l.insertAfter(1, 2);

        l.removeNode(1);
        l.displayList();
        expect(l.findValue(1)).to.equal(false);
      });

      it('should maintain the order of the list', function () {
        let l = new DoublyLinkedList(0);
        l.insertAfter(0, 1);
        l.insertAfter(1, 2);

        l.removeNode(1);

        expect(l.head.next.value).to.equal(2);
        expect(l.head.next.previous.value).to.equal(0);
      });
    });
  });
});