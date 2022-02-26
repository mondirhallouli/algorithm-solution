/**
 * @param {string[]} strs
 * @return {string}
 */

/*
// 1- we take iterate through the characters of the first string as a reference
// 2- if there is a match add it to the result string
// 3- if there is a missmatch stop comparing
*/ 

// SOLUTION 1
// var longestCommonPrefix = function(strs) {
//   let result = '';

//   if (strs.length === 0) { return ''; }

//   for(let i = 0; i < strs.length; i++) {
//     // 1- we take iterate through the characters of the first string as a reference
//     let curr = strs[0][i];

//     // 2- if there is a match add it to the result string
//     if(strs.every(str => str[i] === curr)) {
//       result += curr;
//     } else { // 3- if there is a missmatch stop comparing
//       break;
//     }
//   }

//   return result;
// };


// // SOLUTION 2
// var longestCommonPrefix = function(strs) {

//   // return empty string if there is no array/ array is empty
//   if (strs === undefined || strs.length === 0) return '';
  
//   // loop through the array and reduce all of the strings into one mutual string(if there is any)
//   return strs.reduce((prev, curr) => {
//       let i = 0;

//       // increment the iterator if the characters on both strings match and only if there are character in the specified index to account for strings length differences
//       while (prev[i] && curr[i] && prev[i] === curr[i]) i++;

//       // return the matching part of the strings by slicing it from the previous value
//       return prev.slice(0, i);
//   });
// };

// SOLUTION 3
var longestCommonPrefix = function(strs) {

  let prefix = '';

  // return empty string if there is no array/ array is empty
  if (strs === undefined || strs.length === 0) return '';

  // get the shortest string in the array
  let shortest = strs.reduce((prev, curr) => curr.length < prev.length ? curr : prev);

  // loop through the array using the shortest string
  for(let i = 0; i < shortest.length; i++) {
    for(let j = 1; j < shortest.length; j++) {}
  }

  return shortest;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["brook","broklyn","brother", "broker"]));
console.log(longestCommonPrefix(['']));