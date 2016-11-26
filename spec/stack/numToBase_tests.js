describe('numToBase', function() {
  const numToBase = require('../../ds/Stack/exercises/numToBase.js');
  const { expect } = require('chai');

  it('should be a function', function () {
    expect(numToBase instanceof Function).to.equal(true);
  });
  it('should return a string', function () {
    expect(typeof numToBase(2, 2)).to.equal('string');
  });
  it('should convert a number to a base 2 string', function() {
    let n = 42;
    expect(numToBase(2, 2)).to.equal(n.toString(2));
  });
  it('should convert a number to a base 3 string', function() {
    let n = 42;
    expect(numToBase(42, 3)).to.equal(n.toString(3));
  });
  it('should convert a number to a base 4 string', function() {
    let n = 42;
    expect(numToBase(42, 4)).to.equal(n.toString(4));
  });
  it('should convert a number to a base 5 string', function() {
    let n = 42;
    expect(numToBase(42, 5)).to.equal(n.toString(5));
  });
  it('should convert a number to a base 6 string', function() {
    let n = 42;
    expect(numToBase(42, 6)).to.equal(n.toString(6));
  });
  it('should convert a number to a base 7 string', function() {
    let n = 42;
    expect(numToBase(42, 7)).to.equal(n.toString(7));
  });
  it('should convert a number to a base 8 string', function() {
    let n = 42;
    expect(numToBase(42, 8)).to.equal(n.toString(8));
  });
  it('should convert a number to a base 9 string', function() {
    let n = 42;
    expect(numToBase(42, 9)).to.equal(n.toString(9));
  });
})
