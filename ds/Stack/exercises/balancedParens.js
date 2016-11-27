module.exports = function(str) {
  if (typeof str !== 'string') {
    return new Error('Input must be a string');
  }
}