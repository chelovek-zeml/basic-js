const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result;
if(typeof sampleActivity === 'string' && sampleActivity !== '' && sampleActivity !== Infinity) {
  if ((sampleActivity * 1) > 0) {
    const MODERN_ACTIVITY =  sampleActivity / 1;
    const HALF_LIFE_PERIOD = 0.0001209424;
    result = Math.ceil((Math.log(15 / MODERN_ACTIVITY))/ HALF_LIFE_PERIOD);
  } else {
    return false;
  }
} else {
  return false;
}
  if(result < 0) {
    return false;
  } else {
    return result;
  }
}

module.exports = {
  dateSample,
};
