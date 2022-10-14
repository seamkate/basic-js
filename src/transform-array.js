const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log('масив: ', arr);
  if ((arr instanceof Array) === false){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(arr[0] == null) {
    return Array.from(arr);
  } 
  let result = [];
  for (let i = 0; i < arr.length; i++ ) {
    if(arr[i] == undefined){
      continue
    } else if((arr[i -2] === '--discard-next' || null || undefined)  && (arr[i] === '--double-prev'|| '--discard-prev')){
      continue
    }  else if((arr[i+1] == null && arr[i] ===  '--double-next') || (arr[i-1] == null && arr[i] ===  '--double-prev') ){
      continue; 
    } else if(arr[i] ===  '--double-prev'){
      result.push(arr[i-1]); 
    } else if(arr[i] ===  '--double-next'){
      result.push(arr[i+1]); 
    } else if (arr[i] ===  '--discard-next') {
      continue
    } else if (arr[i-1] ===  '--discard-next') {
      continue
    } else if(arr[i] ===  '--discard-prev'){
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result
}

module.exports = {
  transform
};
