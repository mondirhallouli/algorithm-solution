/**
 * @param {string[]} strs
 * @return {string}
 */

/*
// 1- we take iterate through the characters of the first string as a reference
// 2- if there is a match add it to the result string
// 3- if there is a missmatch stop comparing
*/ 
var longestCommonPrefix = function(strs) {

  let result = '';

  for(let i = 0; i < strs.length; i++) {
    // 1- we take iterate through the characters of the first string as a reference
    let curr = strs[0][i];

    // 2- if there is a match add it to the result string
    if(strs.every(str => str[i] === curr)) {
      result += curr;
    } else { // 3- if there is a missmatch stop comparing
      break;
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["brook","broklyn","brother", "broker"]));