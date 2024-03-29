/* 
delete duplicate nodes and return the list
Big O:
-----
Time: O(n), n: the number of nodes in the list
space: O(1), we operate directly on the list, and we have a single(2 if you count the function argument) variable as a reference;
*/

function deleteDuplicates(head) {
    let output = head;
    while (head) {
        if (head.next === null) break;
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return output;
}

// TESTS
describe("tests from problem text", () => {
    test("test example 1", () => {
        let l1 = { val: 1, next: { val: 1, next: { val: 2, next: null } } };
        expect(deleteDuplicates(l1)).toEqual({
            val: 1,
            next: { val: 2, next: null },
        });
    });

    test("test example 2", () => {
        let l2 = {
            val: 1,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: { val: 3, next: { val: 3, next: null } },
                },
            },
        };
        expect(deleteDuplicates(l2)).toEqual({
            val: 1,
            next: { val: 2, next: { val: 3, next: null } },
        });
    });
});
