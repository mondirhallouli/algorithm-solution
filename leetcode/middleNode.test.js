/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 
    TIME & SPACE COMPLEXITY:
    ------------------------
    Time: O(2n) -> O(n): n is the number of nodes in the list
    Space: O(1)
*/

let middleNode = function(head) {
    let length = 0;
    let current = head;
    let result = head;
    let iterator = 0;

    while (current) {
        length += 1;
        current = current.next;
    }
    
    if (length % 2 !== 0) {
        while (iterator != Math.floor(length / 2)) {
            result = result.next;
            iterator += 1;
        }
    } else {
        while (iterator != (length / 2)) {
            result = result.next;
            iterator += 1;
        }
    }
    return result;
};

// TESTS
describe("tests from the problem text", () => {
    test("single middle node", () => {
        let head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}
        let result = {val: 3, next: {val: 4, next: {val: 5, next: null}}}
        expect(middleNode(head)).toEqual(result)
    })
    
    test("2 middle nodes", () => {
        let head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: {val: 6, next: null}}}}}}
        let result = {val: 4, next: {val: 5, next: {val: 6, next: null}}}
        expect(middleNode(head)).toEqual(result)
    })
})