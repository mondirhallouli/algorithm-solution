/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = 0;
  let noSwap;
  for (let i = nums.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] === val) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  for (let num of nums) {
    if (num === val) break;
    else k++;
  }
  return k;
};

function removeElementV2(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// tests
describe("tests from problem text", () => {
  test("test example 1", () => {
    expect(removeElementV2([3, 2, 2, 3], 3)).toEqual(2);
  });

  test("test example 2", () => {
    expect(removeElementV2([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
