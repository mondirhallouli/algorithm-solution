/* 
    -> Runtime: O(n) -> n: number of nodes in the list
    -> Memory Usage: O(n) -> n: number of bindings that take up space in memory
*/

function reverseList(head) {
    let currentNode = head;
    let prevNode = null;
    let nextNode;
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;

        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
}

// TESTS
describe("tests from problem text", () => {
    test("example 1", () => {
        let head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}
        let result = {val: 5, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}}
        expect(reverseList(head)).toEqual(result)
    })
    
    test("example 2", () => {
        let head = {val: 1, next: {val: 2, next: null}}
        let result = {val: 2, next: {val: 1, next: null}}
        expect(reverseList(head)).toEqual(result)
    })
    
    test("example 3", () => {
        let head = {val: 0, next: null}
        let result = {val: 0, next: null}
        expect(reverseList(head)).toEqual(result)
    })
})