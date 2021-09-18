import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let cat = '^^';
  return matrix.reduce((sum, box) => {
    let sumBox = 0;
    for (let i = 0; i < box.length; i++){
      sumBox += box[i] == cat? 1:0;
    }

    return sum + sumBox;
  }, 0)
}
