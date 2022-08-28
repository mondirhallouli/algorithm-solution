/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/* 
    TIME AND SPACE COMPLEXITIES:
    ---------------------------
    Time: O(n), n: the number of nodes in the list
*/

let removeElements = function(head, val) {
    let dummy = {val: -1, next: head};
    let current = dummy;
    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
    
};

// TESTS
describe("tests from problem text", () => {
    test("test from example 1", () => {
        let head = {
            val: 1, 
            next: {
                val: 2, 
                next: {
                    val: 6, 
                    next: {
                        val: 3, 
                        next: {
                            val: 4, 
                            next: {
                                val: 5, 
                                next: {
                                    val: 6, 
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        };
        
        let result = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        };

        let val = 6;
        expect(removeElements(head, val)).toEqual(result);
    });

    test("test from example 2", () => {
        let head;
        let val = 1;
        expect(removeElements(head, val)).toBe(undefined);
    });

    test("test from example 3", () => {
        let head = {
            val: 7,
            next: {
                val: 7,
                next: {
                    val: 7,
                    next: {
                        val: 7,
                        next: null
                    }
                }
            }
        };
        let val = 7;
        expect(removeElements(head, val)).toEqual(null);
    });
});