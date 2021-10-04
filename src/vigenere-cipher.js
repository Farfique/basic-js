import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let table = [[...ALPHABET]];
for (let i = 1; i < ALPHABET.length; i++){
  let tempArr = [...table[i-1]];
  let shiftedLetter = tempArr.shift();
  tempArr.push(shiftedLetter);
  table.push(tempArr);
}


export default class VigenereCipheringMachine {
  constructor(direct){
    if (direct === false){
      this.modification = 'inverted';
    }
    else {
      this.modification = 'direct';
    }
  }

  cover(message, key){
    let str1 = "";
    let newMessage = message.toUpperCase();
    let j = 0;
    key = key.toUpperCase();

    for (let i = 0; i < newMessage.length; i++){
      if (newMessage.charAt(i).match('[A-Z]')){
        str1 += key.charAt(j);
        j++;
        if (j > key.length - 1){
          j = 0;
        }
      }
      else {
        str1 += newMessage.charAt(i);
      }
    }

    return str1;
  }

  
  alphaIndex(message, i){
    message = message.toUpperCase();
    if (message.charAt(i).match('[A-Z]')){
      return ALPHABET.indexOf(message.charAt(i));
    }
    else {
      return 'No index';
    }
  }


  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let str = this.cover(message, key);
    let str2 = "";
    let newMessage = message.toUpperCase();

    for (let i = 0; i < newMessage.length; i++){      
      if (newMessage.charAt(i).match('[A-Z]')){
        let index1 = ALPHABET.indexOf(newMessage.charAt(i));
        let index2 = ALPHABET.indexOf(str.charAt(i));
        str2 += table[index1][index2];
      }
      else {
        str2 += newMessage.charAt(i);
      }
    }

    if (this.modification == 'inverted'){
      str2 = str2.split('').reverse().join('');
    }

    return str2;
  }
  decrypt(encryptedMessage, key) {    
    if (!encryptedMessage || !key){
      throw new Error('Incorrect arguments!');
    }
    let str = this.cover(encryptedMessage, key);
    let str2 = "";
    let newMessage = encryptedMessage.toUpperCase();

    for (let i = 0; i < newMessage.length; i++){      
      if (newMessage.charAt(i).match('[A-Z]')){
        let index2 = ALPHABET.indexOf(str.charAt(i));
        let index3 = table[index2].indexOf(newMessage.charAt(i))

        str2 += ALPHABET[index3];
      }
      else {
        str2 += newMessage.charAt(i);
      }
    }

    if (this.modification == 'inverted'){
      str2 = str2.split('').reverse().join('');
    }

    return str2;
    
    
  }
}
