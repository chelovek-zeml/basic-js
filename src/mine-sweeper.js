const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i].slice());
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      array[i][j] = 0;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0) {
        if (j === 0) {
          if (arr[i][j]) {
            array[0][1]++;
            array[1][0]++;
            array[1][1]++;
          }
        } else if (j === arr[i].length - 1) {
          if (arr[i][j]) {
            array[0][j - 1]++;
            array[1][j]++;
            array[1][j - 1]++;
          }
        } else {
            if (arr[i][j]) {
                array[0][j - 1]++;
                array[0][j + 1]++;
                array[1][j]++;
                array[1][j - 1]++;
                array[1][j + 1]++;
              }
        }
      } else if ( i === arr.length - 1) {
        if (j === 0) {
            if (arr[i][j]) {
              array[i][1]++;
              array[i - 1][0]++;
              array[i - 1][1]++;
            }
          } else if (j === arr[i].length - 1) {
            if (arr[i][j]) {
              array[i][j - 1]++;
              array[i - 1][j]++;
              array[i - 1][j - 1]++;
            }
          } else {
              if (arr[i][j]) {
                  array[i][j - 1]++;
                  array[i][j + 1]++;
                  array[i - 1][j]++;
                  array[i - 1][j - 1]++;
                  array[i - 1][j + 1]++;
                }
          }
      } else {
        if (j === 0) {
            if (arr[i][j]) {
              array[i][1]++;
              array[i - 1][0]++;
              array[i - 1][1]++;
              array[i + 1][0]++;
              array[i + 1][1]++;
            }
          } else if (j === arr[i].length - 1) {
            if (arr[i][j]) {
              array[i][j - 1]++;
              array[i - 1][j]++;
              array[i - 1][j - 1]++;
              array[i + 1][j]++;
              array[i + 1][j - 1]++;
            }
          } else {
              if (arr[i][j]) {
                  array[i][j - 1]++;
                  array[i][j + 1]++;
                  array[i - 1][j]++;
                  array[i - 1][j - 1]++;
                  array[i - 1][j + 1]++;
                  array[i + 1][j]++;
                  array[i + 1][j - 1]++;
                  array[i + 1][j + 1]++;
                }
          }

      }
    }
  }
  return array;
}

module.exports = {
  minesweeper
};
