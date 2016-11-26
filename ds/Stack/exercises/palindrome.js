module.exports = (str) => {
  if (typeof str !== 'string') {
    return false;
  }

  const Stack = require('../stack_adt');
  const s = new Stack();

  str.split('').forEach((letter) => {
    s.push(letter);
  });
  var res = '';
  while (s.size > 0) {
    res += s.pop();
  }

  return res === str;
};