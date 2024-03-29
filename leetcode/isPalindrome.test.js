
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* 
    Time and Space complexities:
    ----------------------------
    Time: O(n), n: the number of nodes in the list
    Space: O(n), n: the number of nodes that take space in the array in order to be compared
*/

// let isPalindrome = function(head) {
//     if (!head) return false;
//     let list = [];
//     let current = head;
//     while (current) {
//         list.push(current.val);
//         current = current.next;
//     }
//     let start = 0, end = list.length -1;
//     while (start <= end) {
//         if (list[start] !== list[end]) return false;
//         start += 1;
//         end -= 1;
//     }
//     return true;
// };

/* 
    TIME AND SPACE:
    --------------

    Time: O(n)
    Space: O(1)
*/

let isPalindrome = function(head) {
    let slow = fast = head, previousNode, nextNode;
    if (!head) return false;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    previousNode = slow;
    slow = slow.next;
    previousNode.next = null;

    while (slow) {
        nextNode = slow.next;
        slow.next = previousNode;
        previousNode = slow;
        slow = nextNode;
    }

    fast = head;
    slow = previousNode;

    while (slow) {
        if (slow.val != fast.val) return false;
        slow = slow.next;
        fast = fast.next;
    }

    return true;
}

// TESTS
describe("Tests that should return true", () => {
    let head;

    test("list with a length of one", () => {
        head = {val: 1, next: null};
        expect(isPalindrome(head)).toBe(true);
    })
    
    test("short list of an odd length", () => {
        head = {val: 1, next: {val: 2, next: {val: 1, next: null}}};
        expect(isPalindrome(head)).toBe(true);
    })
    
    test("long list of an odd length", () => {
        head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}};
        expect(isPalindrome(head)).toBe(true);
    })

    test("short list of an even length", () => {
        head = {val: 1, next: {val: 1, next: null}};
        expect(isPalindrome(head)).toBe(true);
    })

    test("long list of an even length", () => {
        head = {val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}};
        expect(isPalindrome(head)).toBe(true);
    })
})

describe("Tests that should return false", () => {
    let head;

    test("empty list", () => {
        head = null;
        expect(isPalindrome(head)).toBe(false);
    })

    test("short list of an odd length", () => {
        head = {val: 1, next: {val: 2, next: {val: 3, next: null}}};
        expect(isPalindrome(head)).toBe(false);
    })
    
    test("long list of an odd length", () => {
        head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 1, next: {val: 2, next: null}}}}};
        expect(isPalindrome(head)).toBe(false);
    })

    test("short list of an even length", () => {
        head = {val: 1, next: {val: 2, next: null}};
        expect(isPalindrome(head)).toBe(false);
    })

    test("long list of an even length", () => {
        head = {val: 1, next: {val: 2, next: {val: 1, next: {val: 2, next: null}}}};
        expect(isPalindrome(head)).toBe(false);
    })
})
