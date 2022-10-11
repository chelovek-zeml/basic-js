const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(arr) {
  let res = false;
  arr = arr.toUpperCase();

  if (arr.length === 17) {
    if (check(arr)) {
      if (check_symbol(arr)) {
        res = true;
      }
    }
  }
  return res;
}

function check(arr) {
  let res = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      count++;
    }
  }
  if (count === 5) {
    res = true;
  }
  return res;
}

function check_symbol(arr) {
  let res = false;
  let array = [];
  let arr_check = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '-') {
      array.push(arr[i]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arr_check.length; j++) {
      if (array[i] === arr_check[j]) {
        count++;
      }
    }
  }
  if (count === 12) {
    res = true;
  }
  return res;
}
module.exports = {
  isMAC48Address
};
