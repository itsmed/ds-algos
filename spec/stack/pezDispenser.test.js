describe('PezDispenser', function() {
  const { expect } = require('chai');
  const PezDispenser = require('../../ds/Stack/exercises/pezDispenser');
  const Stack = require('../../ds/Stack/stack_adt');

  describe('PezDispenser structure and methods', function() {
    it('should be a function', function() {
      expect(PezDispenser instanceof Function).to.equal(true);
    });

    it('should inherit from Stack', function() {
      let p = new PezDispenser();
      expect(p instanceof Stack).to.equal(true);
    });

    it('should have a method called fillDispenser', function () {
      let p = new PezDispenser();

      expect(p.fillDispenser instanceof Function).to.equal(true);
    });

    it('each instance should assign a random number of pez to storage', function() {
      let p1 = new PezDispenser();
      let p2 = new PezDispenser();
      let p3 = new PezDispenser();
      let p4 = new PezDispenser();

      expect(p1.storage.length).to.not.equal(p2.storage.length);
      expect(p3.storage.length).to.not.equal(p1.storage.length);
      expect(p4.storage.length).to.not.equal(p2.storage.length);
    });

    it('should assign red, yellow and green pez to storage', function () {
      let p = new new PezDispenser();

      expect(p.storage.indexOf('red')).to.not.equal(-1);
      expect(p.storage.indexOf('green')).to.not.equal(-1);
      expect(p.storage.indexOf('yellow')).to.not.equal(-1);
    });
  });
});