import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let origArr = ('' + n).split('');
  if (origArr.length == 0){
    return undefined;
  }
  if (origArr.length == 1){
    return parseInt(origArr[0]);
  }
  else {
    let arr = origArr.map((el) => parseInt(el));
    let sum = arr.reduce((prev, el) => {
      return prev + el;
    }, 0 );
    return getSumOfDigits(sum);
  }

  


  
}
