// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: faster than 74.87% of JavaScript online submissions for remove duplicates
// Memory Usage: less than 40.20% of JavaScript online submissions for Remove Duplicates

function removeDuplicates(nums) {
  let p1 = 0, p2 = 1;
  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    p2++;
  }
  return p1 + 1;
}

// === tests ===
describe("given examples", () => {
  test("example arrays", () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates(nums)).toBe(5);
  });
});