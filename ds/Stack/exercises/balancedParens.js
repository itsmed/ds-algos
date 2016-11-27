module.exports = function(str) {
  const Stack = require('../stack_adt');

  if (typeof str !== 'string') {
    return new Error('Input must be a string');
  }
  if (str.length == 0) { return true; }

  const openingBrackets = new Stack();

  let braces = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let currentBrace;

  for (let i = 0; i < str.length; i++) {
    currentBrace = str[i];
    if (currentBrace in braces) {
      openingBrackets.push(currentBrace);
      continue;
    }
    if (currentBrace.search(/(})|(\))|(\])+/) !== -1) {
      if (openingBrackets.size === 0 || braces[openingBrackets.pop()] !== currentBrace) {
        return false;
      }
    }
  }

  return true;
}