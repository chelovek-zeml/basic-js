const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 let str = "";
 let arr = [];
if(Array.isArray(members)) {
 for(let i of members) {
  if(typeof i === "string") {
    i = i.replaceAll(" ", "");
    arr.push(i);  
  }
 }
 for(let j of arr) {
  str = str + j[0].toUpperCase();
 }
} else {
  return false;
}

 return str.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
