/*
problem:
--------
count the unique values in a sorted array
- inputs: a sorted array -> arr
- outputs: the number of unique values -> uniqueTotal
- basic cases:
  + countUniqueValues([1,2,1,1]) -> 2
  + countUniqueValues([2,3,3,4,4,4]) -> 3
- edge cases: 
  + countUniqueValues([]) -> 0
  + countUniqueValues([-2, -1, 0, 1, ,1, 4, 3]) -> 6
*/

/*==================================
  SOLUTION USING A FRQUENCY COUNTER
====================================*/
// function countUniqueValues(arr) {
//   // edge case/ short circuit solution
//   if(!arr.length) return 0;
//   // create a frequency counter
//   // create a count variable
//   let count, arrFrequencies = {};
//   for(let el of arr) {
//     arrFrequencies.hasOwnProperty(el) ? arrFrequencies[el] += 1 : arrFrequencies[el] = 1;
//   }
//   // create an array from the frequency counter keys
//   // return the length of that frequency keys array
//   count = Object.keys(arrFrequencies).length;
//   return count;
// }

/*==================================
  SOLUTION USING MULTIPLE POINTERS
====================================*/
// function countUniqueValues(arr) {
//   // create pointers, and count variable
//   let p1 = 0, p2 = 1, count = 0;
//   // use pointers to compare values
//   while(p2 <= arr.length) {
//     // add 1 or jump to next value if already counted
//     if(arr[p1] !== arr[p2]) {
//       count += 1;
//     }
//     p1 += 1;
//     p2 += 1;
//   }
//   return count;
// }

/*=================================================
  SOLUTION USING MULTIPLE POINTERS (2nd variation)
==================================================*/
function countUniqueValues(arr) {
  // create pointers, and count variable 
  let p1 = 0, p2 = 1;
  // use pointers to compare values
  while (p2 <= arr.length) {
    // add 1 or jump to next value if already counted
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1;
}


// ------------ examples ------------
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

describe("count unique values", () => {
  test("with repeated positive values", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  test("with repeated negative values", () => {
    expect(countUniqueValues([-2, -1, -1])).toBe(2);
  });

  test("with repeated mixed values", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  test("with empty array", () => {
    expect(countUniqueValues([])).toBe(0);
  });
});