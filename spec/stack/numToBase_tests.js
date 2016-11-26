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
    expect(n.toString(2)).to.equal('101010');
  });
})
