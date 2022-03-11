/*
  challenge from https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

  added tests with jest for other situations:
  -> when the given array is empty
  -> when given only one sub-array
  -> when the given sub array is empty

  - first we want to save time and check if the array has any content, if not return an empty array and we're done.
  - if we have sub-arrays, we iterate through each of them and check again if the sub-array has content, if not we move on to the next sub-array.
  - if the sub-array has elements, we sort them from largest to smallest and push the first one in the sorted sub-array to our result array.
*/

const largestOfFour = (arr) => {
  let result = [];
  if(!arr.length) return [];
  for(let subArr of arr) {
    if(!subArr.length) continue;
    subArr.sort((a, b) => b - a);
    result.push(subArr[0]);
  }
  return result;
};

// ======= TESTS =======
describe('return an array of the largest number in each sub-array', function(){
  test('when provided with an empty array', () => {
    let arr = [];
    expect(largestOfFour(arr)).toStrictEqual([]);
  });

  test('when provided with 1 empty sub-array', () => {
    let arr = [[]];
    expect(largestOfFour(arr)).toStrictEqual([]);
  });

  test('when provided with 1 sub-arrays', () => {
    let arr = [[1, 4, 8]];
    expect(largestOfFour(arr)).toStrictEqual([8]);
  });

  test('when provided with 2 sub-arrays', () => {
    let arr = [[4, 8, 1], [4, 12, 6]];
    expect(largestOfFour(arr)).toStrictEqual([8, 12]);
  });

  test('when provided with 3+ sub-arrays', () => {
    let arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    expect(largestOfFour(arr)).toStrictEqual([27, 5, 39, 1001]);
  });

  test('when provided with an empty sub-array with other sub-arrays', () => {
    let arr = [[13, 27, 18, 26], [], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    expect(largestOfFour(arr)).toStrictEqual([27, 39, 1001]);
  });
});
