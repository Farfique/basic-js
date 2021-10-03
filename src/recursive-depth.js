import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length == 0) {
      return 1;
    }
    return arr.reduce((prev, curr) => {
      if (Array.isArray(curr)) {
        return Math.max(this.calculateDepth(curr) + 1, prev);
      }
      else {
        return prev;
      }
    }, 1)
  }
}
