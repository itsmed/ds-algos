describe('PezDispenser', function() {
  const { expect } = require('chai');
  const PezDispenser = require('../../ds/Stack/exercises/pezDispenser');
  const Stack = require('../../ds/Stack/stack_adt');

  it('should be a function', function() {
    expect(PezDispenser instanceof Function).to.equal(true);
  });

  it('should inherit from Stack', function() {
    let p = new PezDispenser();
    expect(p instanceof Stack).to.equal(true);
  });

  it('each instance should assign a random number of pez to storage\n*********** (This test should fail ocassionally as the number of pez is assigned randomly) *********', function() {
    let p1 = new PezDispenser();
    let p2 = new PezDispenser();
    let p3 = new PezDispenser();
    let p4 = new PezDispenser();

    expect(p1.size).to.not.equal(p2.size);
    expect(p3.size).to.not.equal(p1.size);
    expect(p4.size).to.not.equal(p2.size);
  });

  describe('fillDispenser', function() {
    it('should have a method called fillDispenser', function () {
      let p = new PezDispenser();

      expect(p.fillDispenser instanceof Function).to.equal(true);
    });

    it('should assign red, yellow and green pez to storage \n********** (This test should ocassionally fail, as the pez are being added randomly) *********', function () {
      let p = new PezDispenser();
      let found = [];

      while (found.length < 3) {
        let temp = p.pop();
        if (found.indexOf(temp) === -1) {
          found.push(temp);
        }
      }

      expect(found.indexOf('red')).to.not.equal(-1);
      expect(found.indexOf('green')).to.not.equal(-1);
      expect(found.indexOf('yellow')).to.not.equal(-1);
    });
  });

  describe('removeYellowPez', function() {
    it('should be a function', function () {
      let p = new PezDispenser();

      expect(p.removeYellowPez instanceof Function).to.equal(true);
    });

    it('should remove all yellow pez from storage', function () {
      let p = new PezDispenser();
      let foundYellow = false;
      let temp;

      p.removeYellowPez();

      while (p.size > 0) {
        temp = p.pop();
        if (temp == 'yellow') {
          foundYellow = true;
        }
      }

      expect(foundYellow).to.equal(false);
    });

    it('should not modify the order of the pez when removing yellow pez', function () {
      let p = new PezDispenser();
      let copy = [];
      let all = [];

      while (p.size > 0) {
        let temp = p.pop();
        all.unshift(temp);
        if (temp !== 'yellow') {
          copy.unshift(temp);
        }
      }


      while(all.size > 0) {
        p.push(all.pop());
      }
      p.removeYellowPez();

      while (copy.size > 0) {
        expect(copy.pop()).to.equal(p.pop());
      }
    });
  });
});
