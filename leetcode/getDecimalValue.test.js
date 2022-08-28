/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

/* 
    TIME & SPACE:
    ------------
    Time: O(n), n: the number of digits in the binary sequence (the nodes that hold the number)
    Space/memory: O(1), only two variables that require space in memory, then we update them accordinly
*/

var getDecimalValue = function(head) {
    let binaryNum = "";
    while (head) {
        binaryNum += head.val;
        head = head.next;
    }
    let decNum = parseInt(binaryNum, 2);
    return decNum;
};

// TESTS
describe("tests from the problem text", () => {
    test("test from example 1", () => {
        let head = {val: 1, next: {val: 0, next: {val: 1}}};
        expect(getDecimalValue(head)).toBe(5);
    });
    
    test("test from example 2", () => {
        let head = {val: 0, next: null};
        expect(getDecimalValue(head)).toBe(0);
    });
})