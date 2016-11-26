describe('palindrome', function() {
  const palindrome = require('../../ds/Stack/exercises/palindrome');
  const { expect } = require('chai');

  it('should be a function', function () {
    expect(palindrome instanceof Function).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    expect(palindrome('mom')).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    expect(palindrome('dad')).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    expect(palindrome('racecar')).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    expect(palindrome('1001')).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    expect(palindrome('1001001')).to.equal(true);
  });
  it('should return true for a palindrome', function() {
    let str = 'never odd or even';
    expect(palindrome(str.split(' ').join(''))).to.equal(true);
  });
  it('should return false for a palindrome if special characters get in the way', function() {
    expect(palindrome('never odd or even')).to.equal(false);
  });
  it('should return false if the input is not a palindrome', function (done) {
    expect(palindrome('135')).to.equal('false');
  });
  it('should return false when the input is not a string', function (done) {
    expect(palindrome([1, 2, 3, 2, 1])).to.equal(false);
  });
  it('should return false when given a palindrome made of letters of varying case', function (done) {
    expect(palindrome('Mom')).to.equal(false);
  });
});
