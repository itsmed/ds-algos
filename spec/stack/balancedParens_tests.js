describe('balancedParens', function() {
  const balancedParens = require('../../ds/Stack/exercises/balancedParens');
  const { expect } = require('chai');

  it('should be a function', function () {
    expect(balancedParens instanceof Function).to.equal(true);
  });

});