import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  let str2 = "";
  for (let i= 0; i < str.length; i++){
    let count = 1;
    let char = str[i];
    while (i + 1 < str.length && char==str[i+1]){
      count++;
      i++;
    }
    if (count == 1){
      str2 += char;
    }
    else {
      str2 += count + char;
    }

  }

  return str2;
}
