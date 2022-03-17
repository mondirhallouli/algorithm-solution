/*

problem:
--------
write a function that compares 2 strings, and returns true if the second string is an anagram of the first or false otherwise.
- inputs: str1, str2
- outputs: true or false
- things to take into consideration:
  * the inputs are single words and not sentences with spaces
  * both inputs are lowercase
  * both inputs include only letters
*/

function isAnagram(str1, str2) {
  // short circuit check
  if (str1.length != str2.length) return false;
  // create 2 frequency objects from the str1 & str2
  let str1Frequencies = {}, str2Frequencies = {};
  for (let char of str1) {
    str1Frequencies.hasOwnProperty(char) ? str1Frequencies[char] += 1 : str1Frequencies[char] = 1;
  }
  for (let char of str2) {
    str2Frequencies.hasOwnProperty(char) ? str2Frequencies[char] += 1 : str2Frequencies[char] = 1;
  }
  // loop through one of the frequency objects
  for (let key in str1Frequencies) {
    // compare each letters frequency in both objects
    if (!(key in str2Frequencies) || str2Frequencies[key] != str1Frequencies[key]) {
      return false;
    }
  }
  return true;
}

// isAnagram('', ''); // true
// isAnagram('aaz', 'zza'); // false
// isAnagram('anagram', 'nagaram'); // true
// isAnagram('rat', 'car'); // false
// isAnagram('awesome', 'awesom'); // false
// isAnagram('qwerty', 'qeywrt'); // true
// isAnagram('texttwisttime', 'timetwisttext'); // true

describe("check string2 is anagram of string1", () => {
  test("if both strings are empty", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  test("short strings", () => {
    expect(isAnagram("aaz", "zza")).toBe(false);
  });

  test("medium length strings", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test("long strings", () => {
    expect(isAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });

  test("different length strings", () => {
    expect(isAnagram("awesome", "awesom")).toBe(false);
  });
});