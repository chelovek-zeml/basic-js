const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  arrayChain: [],

  getLength() { 
    return this.arrayChain.length();
  },
  addLink(value) {
     this.arrayChain.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 0 ||
      position >= this.chain.length
    ) {
      this.chain = [];
      throw new Error('invalid position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
   this.arrayChain.reverse();
   return this;
  },
  finishChain() {
   let str = this.arrayChain.join('~~');
   return str;
  }
};

module.exports = {
  chainMaker
};
