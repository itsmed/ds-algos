describe('balancedParens', function() {
  const balancedParens = require('../../ds/Stack/exercises/balancedParens');
  const { expect } = require('chai');

  it('should be a function', function () {
    expect(balancedParens instanceof Function).to.equal(true);
  });

  it('should return an error if the input is not a string', function() {
    expect(balancedParens(123) instanceof Error).to.equal(true);
    expect(balancedParens([1, 2, 3, 'a']) instanceof Error).to.equal(true);
    expect(balancedParens({}) instanceof Error).to.equal(true);
    expect(balancedParens(true) instanceof Error).to.equal(true);
    expect(balancedParens(null) instanceof Error).to.equal(true);
    expect(balancedParens() instanceof Error).to.equal(true);
  });

});