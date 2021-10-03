import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }

  let arr = [];

  members.forEach((member) => {
    if (typeof member == "string" && member.length > 0){
      let i = 0;
      while (member.charAt(i) == ' ' && member.length > i + 1){
        i++;
      }
      if (!member.charAt(i) == ' '){
        arr.push(member.charAt(i).toUpperCase());
      }      
    }
  })
  return arr.sort().join('');
  
}
