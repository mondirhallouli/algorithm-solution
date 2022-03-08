/*
  this is my beginner approach at a medium difficulty algrorithm from leetcode: https://leetcode.com/problems/add-two-numbers/
*/

function addTwoNumbers(l1, l2) {
  let rev1 = [],
      rev2 = [],
      result = [];

  for(let num of l1) {
    rev1.unshift(num);
  }
  for(let num of l2) {
    rev2.unshift(num);
  }
  let num1 = rev1.join(''),
      num2 = rev2.join('');
  let sum = Number(num1) + Number(num2);
  let splitSum = String(sum).split('');
  for(let digit of splitSum) {
    result.unshift(Number(digit));
  }
  return result;
}

// ============== TESTS ===============
describe('adding number of two lists', function(){
  test('two lists with equal length', () => {
    let l1 = [2,4,3], l2 = [5,6,4];
    expect(addTwoNumbers(l1, l2)).toEqual([7,0,8]);
  });

  test('two lists with unequal length', () => {
    let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];
    expect(addTwoNumbers(l1, l2)).toEqual([8,9,9,9,0,0,0,1]);
  });

  test('two lists with 0 as a single element', () => {
    let l1 = [0], l2 = [0];
    expect(addTwoNumbers(l1, l2)).toEqual([0]);
  });
});

// l1 = [2,4,3], l2 = [5,6,4]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// first test run result:
// test 1 => [7,1,0,8]
// test 2 => [8,9,9,9,5,4,3,2,1,0,0,0,1]
