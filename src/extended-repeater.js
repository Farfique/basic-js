import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof str != 'string') {
    str = "" + str;
  }
  let separator = '+';
  let repeatTimes = 1;

  if (typeof options == 'object') {
    let addition = "";
    let additionSeparator = '|';
    let additionRepeatTimes = 1;
    if (Object.keys(options).includes('repeatTimes')) {
      repeatTimes = options['repeatTimes'];
    }
    if (Object.keys(options).includes('separator')) {
      separator = options['separator'];
    }
    if (Object.keys(options).includes('addition')) {
      addition = "" + options['addition'];
    }
    if (Object.keys(options).includes('additionRepeatTimes')) {
      additionRepeatTimes = options['additionRepeatTimes'];
    }
    if (Object.keys(options).includes('additionSeparator')) {
      additionSeparator = options['additionSeparator'];
    }

    if (addition.length > 0) {
      let additionArray = new Array(additionRepeatTimes);
      additionArray.fill(addition);
      let addStr = additionArray.join(additionSeparator);
      str += addStr;
    }
    
    
  }

  let resArray = new Array(repeatTimes);
      resArray.fill(str);
  return resArray.join(separator);

  
}
