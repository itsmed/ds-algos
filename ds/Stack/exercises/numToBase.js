module.exports = function(num, base) {
  const Stack = require('../stack_adt');

  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);

  let converted = '';
  while (s.size > 0) {
    converted += s.pop();
  }
  return converted;
};