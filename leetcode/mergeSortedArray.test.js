/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* 
brief problem text:
-------------------

given 2 arrays sorted in increasing order, and 2 integers representing the length of the arrays, merge the arrays in place by modifying nums1; keep the sorting in increasing order;

input:
  - nums1, nums2, m, n

output:
  - nothing (we merge the arrays, that's it!)

notes: 
  - nums1 length is: m + n;
  - m is the number of first m elements to be sorted in nums1;
  - n is the length of nums2, and the last n elements of nums1 is set to 0 and should be ignored;
*/

const merge = function (nums1, m, nums2, n) {
    let idx1 = m - 1,
        idx2 = n - 1,
        idx3 = m + n - 1;
    while (idx2 >= 0) {
        if (nums1[idx1] > nums2[idx2]) {
            nums1[idx3] = nums1[idx1];
            idx3--;
            idx1--;
        } else {
            nums1[idx3] = nums2[idx2];
            idx3--;
            idx2--;
        }
    }
};

// TESTS
describe("test from problem text", () => {
    test("example test 1", () => {
        let nums1 = [1, 2, 3, 0, 0, 0],
            m = 3,
            nums2 = [2, 5, 6],
            n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test("example test 2", () => {
        let nums1 = [1],
            m = 1,
            nums2 = [],
            n = 0;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test("example test 3", () => {
        let nums1 = [0],
            m = 0,
            nums2 = [1],
            n = 1;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });
});
