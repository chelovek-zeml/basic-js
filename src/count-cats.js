const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  console.log(array)
  let num = 0;
  let arr = array.flat();
  for(let i = 0; i < arr.length; i++) {
if ('^^' === arr[i]) {
  num++;
}
  }
  return num;
}

module.exports = {
  countCats
};
