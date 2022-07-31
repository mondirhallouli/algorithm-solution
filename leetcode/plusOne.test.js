/* 
given a large number in the form of an array, where each element of the array represents a digit of the number
TODO: increment the number by 1, and return the new large number in the form of an array;
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  // start at the last digit
  // increment if less than 9
  // if 9 turn it into a 0, and increment the digit before it
  // if first digit is 0, turn it to 1, add a 0 to the length of the array;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) {
    digits[0] = 1;
    digits[digits.length] = 0;
  }
  return digits;
};

describe("examples from problem text", () => {
  test("exapmle test 1", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test("exapmle test 2", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  test("exapmle test 3", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  test("exapmle test 4", () => {
    expect(
      plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
