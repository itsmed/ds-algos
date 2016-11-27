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

  it('should return true if passed an empty string', function() {
    expect(balancedParens('')).to.equal(true);
  })
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('[]')).to.equal(true);
  });
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('{}')).to.equal(true);
  });
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('()')).to.equal(true);
  });
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('[{}]')).to.equal(true);
  });
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('a(12 * arr[3]) + range([1, 2, 3])')).to.equal(true);
  });
  it('should return true if parentheses are balanced', function () {
    expect(balancedParens('(12 * (2 * 2) + (function(a, b){ return a + b }(2, 3)))')).to.equal(true);
  });

  it('should return false if the string contains unbalanced parentheses', function() {
    expect(balancedParens('([)')).to.equal(false);
  });
  it('should return false if the string contains unbalanced parentheses', function() {
    expect(balancedParens('{[a, t}]')).to.equal(false);
  });
  it('should return false if the string contains unbalanced parentheses', function() {
    expect(balancedParens('({[{[)]}])')).to.equal(false);
  });
  it('should return false if the string contains unbalanced parentheses', function() {
    expect(balancedParens('[*9](12 *3{a: 12}])')).to.equal(false);
  });
  it('should return false if the string contains unbalanced parentheses', function() {
    expect(balancedParens(']|[]()')).to.equal(false);
  });

});
