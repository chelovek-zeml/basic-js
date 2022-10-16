const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if(!options.separator) {
    options.separator = "+";
  }
  if(!String(options.addition) || String(options.addition) === 'undefined') {
    options.addition = '';
  }
  if(!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  

  let arrTemp = [];
   let arrRes = [];

   for(let i = 0; i < options.additionRepeatTimes; i++) {
    arrTemp.push(String(options.addition))
   }
   for(let i = 0; i < options.repeatTimes; i++) {
    arrRes.push(str + arrTemp.join(options.additionSeparator));
   }
   return arrRes.join(options.separator);
}

module.exports = {
  repeater
};
