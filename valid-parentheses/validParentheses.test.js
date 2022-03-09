/*
  algorithm from: https://leetcode.com/problems/valid-parentheses/

  - we need to either keep track of the open brackets or the closing ones, in this case we chose the closing ones

  - we transform our string into an array because it's easier to iterate through it using a for...of loop

  - the easiest way to check whether the string is valid or not is to test if its length is divisible by 2, and return false if it's not

  - as we iterate through the array, each time we find an open bracket we add it's closing pair to our closers array. and each time we find a closing bracket we compare it to the latest bracket we added to the closing brackets array. as we compare them we remove the closing bracket from the array if they match, but if they don't match we keep the closing brackets array as is and return false

  - at the end we check our closing brackets array's length, if it's 0, that means all the brackets in the string match so we return true; if it's anything else that means the string is invalid so we return false
  
*/

const isValid = (s) => {
  let arr = s.split("");
  let closers = [];
  if(s.length % 2 !== 0) return false;
  for(let char of arr){
    switch(char) {
      case "(": closers.push(")");
      break;
      case "[": closers.push("]");
      break;
      case "{": closers.push("}");
      break;
      default:
        if(char !== closers.pop()) return false;
    }
  }
  return closers.length === 0;
};

describe('input is valid', function() {
  test('if one open parenthesis is closed by the same parenthesis', () => {
    expect(isValid("()")).toBe(true);
  });

  test('if one open square bracket is closed by the same bracket', () => {
    expect(isValid("[]")).toBe(true);
  });

  test('if one open curly bracket is closed by the same bracket', () => {
    expect(isValid("{}")).toBe(true);
  });

  test('if multiple open brackets/parentheses are closed by the same bracket', () => {
    expect(isValid("()[]{}")).toBe(true);
  });
});

describe('input is not valid', function() {
  test('if one open bracket/parenthesis is not closed by the same bracket', () => {
    expect(isValid("(}")).toBe(false);
  });

  test('if multiple open brackets/parentheses are not closed by the same bracket/parenthesis', () => {
    expect(isValid("(){}}{")).toBe(false);
  });
});
