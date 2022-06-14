/* 
  inputs: s(string), t(string)
  output: true(if t is anagram of s), false(otherwise)

  edge cases:
    - what if both string parameters are empty?
*/

function validAnagram(s, t) {
  let frqS = {},
    frqT = {};

  if (s.length !== t.length) return false;
  for (let char of s) {
    frqS.hasOwnProperty(char) ? frqS[char]++ : (frqS[char] = 1);
  }

  for (let char of t) {
    frqT.hasOwnProperty(char) ? frqT[char]++ : (frqT[char] = 1);
  }

  for (let char in frqS) {
    if (!(char in frqT) || frqS[char] !== frqT[char]) return false;
  }

  return true;
}

// TESTS
describe("tests from text", () => {
  test("a valid anagram", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });

  test("an invalid anagram", () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });

  test("an invalid anagram", () => {
    expect(validAnagram("a", "ab")).toBe(false);
  });
});
