import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
}


  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';

  let transformedArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == DISCARD_NEXT) {
      i++;
      continue;
    }
    if (arr[i] == DISCARD_PREV) {
      if (transformedArr.length > 0 && i - 2 > 0 && arr[i - 2] != DISCARD_NEXT) {
        transformedArr.pop();
      }     
      continue;
    }
    if (arr[i] == DOUBLE_NEXT) {
      if (arr.length > i + 1) {
        transformedArr.push(arr[i + 1]);
      }     
      continue;
    }
    if (arr[i] == DOUBLE_PREV) {
      if (i - 2 > 0 && arr[i - 2] == DISCARD_NEXT) {
        continue;
      }
      if (i > 0) {
         transformedArr.push(arr[i - 1]);
      }     
      continue;
    }
    transformedArr.push(arr[i]);



  }


  return transformedArr;
}
