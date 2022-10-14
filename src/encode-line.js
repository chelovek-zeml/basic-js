const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let s = "";
  let count = 1;
  let strTemp;
for(let i = 0; i < str.length; i++) {
  if(str[i] === str[i + 1]) {
  strTemp = str.substring(i)
  count++;
  } else {
    if(count > 1) {
      s = s + `${count}` + str[i];
      count = 1;
    } else {
    s = s + str[i];
    }
  }
}
  return s;
}



module.exports = {
  encodeLine
};
