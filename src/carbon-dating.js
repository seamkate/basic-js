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

  let years = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));

  if (sampleActivity == null ) {
    return false
  }

  if( 
    sampleActivity.constructor === String && 
    !isNaN(sampleActivity) && 
    sampleActivity > 0 && 
    sampleActivity < 9000 && 
    sampleActivity != Infinity
    )  {
    return years > 0 ? years : false;
  } return false

}
dateSample('1');
dateSample('WOOT!');
dateSample(3);
dateSample('3');
dateSample('3.142');

module.exports = {
  dateSample
};
