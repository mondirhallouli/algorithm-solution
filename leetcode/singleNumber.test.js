/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
    BIG O:
    ------
    Time: O(n)
    Space: O(n) n: the number of unique number values we set as keys for the frequency list
*/
var singleNumber = function(nums) {
    // create  a frequency list
    // create a holder for the least repeated number
    // loop through the list and change holder according to frequency
    let frq = {};
    let least = 0;
    if (nums.length === 1) return nums[0];

    for (let num of nums) {
        frq.hasOwnProperty(num) ? frq[num] += 1 : frq[num] = 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (frq[nums[i]] == 1 && frq[least] != 1) least = nums[i];
        else if (frq[least] == 1 && frq[nums[i]] == 1) return null;
    }
    return least !== 0 ? least : null;
};

// TESTS
describe("various tests", () => {
    let nums;

    test("1 element array", () => {
        nums = [1];
        expect(singleNumber(nums)).toEqual(1);
    })
    
    test("2 element array -- unique numbers", () => {
        nums = [1, 2];
        expect(singleNumber(nums)).toEqual(null);
    })
    
    test("2 element array -- matching numbers", () => {
        nums = [1, 2];
        expect(singleNumber(nums)).toEqual(null);
    })

    test("3 elements array -- least exists", () => {
        nums = [2, 2, 1];
        expect(singleNumber(nums)).toEqual(1);
    })
    
    test("3 elements array -- least doesn't exist", () => {
        nums = [2, 3, 1];
        expect(singleNumber(nums)).toEqual(null);
    })
    
    test("more than 3 elements array -- unique exists", () => {
        nums = [4,1,2,1,2];
        expect(singleNumber(nums)).toEqual(4);
    })
    
    test("more than 3 elements array -- unique doesn't exist", () => {
        nums = [4,1,2,1,2,4];
        expect(singleNumber(nums)).toEqual(null);
    });    
})
