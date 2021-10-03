import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {
  arr1: [],

  getLength() {
    return this.arr1.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr1.push(' ');
    }
    else {
      this.arr1.push(value);
    }
    return this;
  },
  removeLink(position) {

    
    if (typeof position != 'number' || position > this.getLength() || position <= 0) {
      this.arr1 = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    else {
      this.arr1.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arr1.reverse();
    return this;
  },
  finishChain() {
    let arr2 = this.arr1.map((item) => {
      return '( ' + item + " )";
    })
    let str = arr2.join('~~');
    this.arr1 = [];
    return str;
  }
};
