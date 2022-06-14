/* 
time complexity: O(n*m)
space complexity: O(n*m)
  - n: the length of the nums array
  - m: the length of the tracker array
*/

function containsDuplicate(nums) {
  let tracker = [];
  for (let num of nums) {
    if (tracker.includes(num)) return true;
    tracker.push(num);
  }
  return false;
}

// TESTS
describe("tests from text", () => {
  test("a single number repetition", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("multiple numbers' repetition", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test("a list if unique numbers", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
