/* Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/* 
    TIME AND SPACE COMPLEXITIES:
    ----------------------------
    TIME: O(n), n: the number of nodes in the shortest of the two lists (because we compare the nodes until we run out of nodes at either one or both, then attach the rest of the other to the result)
    SPACE: O(1), we assign a couple of variables and use them as pointers
*/
var mergeTwoLists = function(list1, list2) {
    // initialize a dummy head node
    let dummyHead = {val: 0, next: null}
    // initialize a currentNode variable to keep track of the current node, starting with the dummy head node
    let currentNode = dummyHead
    // while there are still nodes to compare in two lists
    while (list1 && list2) {
        // if value of 2nd node is less than value of 1st node
        if (list1.val > list2.val) {
            // set the current node's link to l2 node
            currentNode.next = list2
            // set the l2 node to l2's next node
            list2 = list2.next
        } else {
            // set the current node's link to l1 node
            currentNode.next = list1
            // set the l1 node to l1's next node
            list1 = list1.next
        }
        // move on to the next node 
        currentNode = currentNode.next
    }
    // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    if (list1) currentNode.next = list1
    else currentNode.next = list2

    // return the new head (without the dummy node)
    return dummyHead.next
};



// TESTS
describe('tests from problem text', () => {
    test("example 1 test", () => {
        let list1 = {val: 1, next: {val: 2, next: {val: 3, next: null}}}
        let list2 = {val: 1, next: {val: 3, next: {val: 4, next: null}}}
        let result = {val: 1, next: {val: 1, next: {val: 2, next: {val: 3, next: {val: 3, next: {val: 4, next: null}}}}}}
        expect(mergeTwoLists(list1, list2)).toEqual(result)
    })
    
    test("example 2 test", () => {
        let list1
        let list2
        expect(mergeTwoLists(list1, list2)).toBe(undefined)
    })
    
    test("example 3 test", () => {
        let list1
        let list2 = {val: 0, next: null}
        let result = {val: 0, next: null}
        expect(mergeTwoLists(list1, list2)).toEqual(result)
    })
})