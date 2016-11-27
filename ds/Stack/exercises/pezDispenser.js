const Stack = require('../stack_adt');

class PezDispenser extends Stack {
  constructor() {
    super();
    this.fillDispenser();
  }

  fillDispenser() {
    let i = Math.ceil(Math.random() * 20);
    let pez = ['yellow', 'red', 'green'];
    while (i >= 0) {
      let index = Math.floor(Math.random() * 3);

      this.push(pez[index]);
      i--;
    }
  }

  removeYellowPez() {
    let s = new Stack();

    while(this.size > 0) {
      let temp = this.pop();
      if (temp === 'yellow') {
        continue;
      }
      s.push(temp);
    }

    while(s.size > 0) {
      this.push(s.pop());
    }
  }
}

module.exports = PezDispenser;
