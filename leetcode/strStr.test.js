/* 
- inputs: string(haystack), pattern(needle)
-return the index of the first occurence of pattern in string, or -1 if no match is found
- edge cases: 
    - what should happen if the needle is empty?
        - in this case we return 0
    - what should happen if the haystack is empty?
        - we return -1

  time complexity: O(n*m);
    - n: the length of the haystack
    - m: the length of the needle
*/

function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    while (j < needle.length) {
      if (haystack[i + j] !== needle[j]) break;
      j++;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

describe("examples from text", () => {
  test("normal word", () => {
    expect(strStr("hello", "ll")).toEqual(2);
  });

  test("random string", () => {
    expect(strStr("aaaaa", "bba")).toEqual(-1);
  });

  test("random string 2", () => {
    expect(strStr("aaa", "a")).toEqual(0);
  });

  test("Needle string is empty", () => {
    expect(strStr("aaaaa", "")).toEqual(0);
  });
});
