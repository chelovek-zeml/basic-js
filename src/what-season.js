const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date.getMonth() < 3) {
    return 'winter';
  }
  if(date.getMonth() < 6 && date.getMonth() > 2) {
    return 'spring';
  }
  if(date.getMonth() < 9 && date.getMonth() > 5) {
    return 'summer';
  }
  if(date.getMonth() < 12 && date.getMonth() > 8) {
   if(date.getMonth() === 11 && date.getDate() > 30) {
    return 'winter';
   }
    return 'fall';
  }
}

module.exports = {
  getSeason
};
