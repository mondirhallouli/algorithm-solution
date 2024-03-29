/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/* 
    TIME AND SPACE:
    --------------
    Time: O(n+m) m,n: length of headA, and headB
    Space: O(1)
*/
const getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA != pointerB) {
        pointerA === null ? pointerA = headB : pointerA = pointerA.next;
        pointerB === null ? pointerB = headA : pointerB = pointerB.next;
    }
    
    return pointerA;
};

// TEST
describe("tests from problem text", () => {
    let a, b, intersection;

    test('one node list', () => {
        intersection = {val: 1, next: null};
        a = intersection;
        b = intersection;

        expect(getIntersectionNode(a, b)).toEqual(intersection);
    })

    test('one node list -- no intersection', () => {
        intersection = null;
        a = {val: 1, next: null};
        b = {val: 3, next: null};

        expect(getIntersectionNode(a,b)).toBe(null);
    })

    // LISTS OF 2 NODES
    test('2 nodes lists -- intersection at end', () => {
        intersection = {val: 2, next: null};
        a = {val: 1, next: intersection};
        b = {val: 5, next: intersection};
        
        expect(getIntersectionNode(a,b)).toEqual(intersection);
    })
    
    test('2 nodes lists -- intersection at start', () => {
        intersection = {val: 2, next: null};
        a = intersection, b = intersection;
        a.next = {val: 1, next: null};
        b.next = {val: 4, next: null};
        expect(getIntersectionNode(a,b)).toEqual(intersection);
    })
    
    // LISTS OF 3 NODES
    test('3 nodes lists -- intersection at start', () => {
        intersection = {val: 2, next: {val: 3, next: null}};
        a = intersection, b = intersection;
        a.next.next = {val: 1, next: null};
        b.next.next = {val: 4, next: null};
        expect(getIntersectionNode(a,b)).toEqual(intersection);
    })
    
    test('3 nodes lists -- intersection at end', () => {
        intersection = {val: 2, next: {val: 3, next: null}};
        a = {val: 1, next: intersection };
        b = {val: 5, next: intersection };
        
        expect(getIntersectionNode(a,b)).toEqual(intersection);
    })

    // LISTS OF DIFFERENT LENGTHS
    test("lists of different lengths -- intersection at start", () => {
        intersection = {val: 8, next: {val: 4, next: {val: 5, next: null}}};
        a = intersection, b = intersection;
        a.next.next.next = {val: 1, next: {val: 3, next: null}};
        b.next.next.next = {val: 7, next: null};

        expect(getIntersectionNode(a,b)).toEqual(intersection);
    });
    
    test("lists of different lengths -- intersection at middle", () => {
        intersection = {val: 8, next: {val: 4, next: null}};
        a = {val: 1, next: intersection};
        b = {val: 3, next: {val: 2, next: intersection}};
        a.next.next.next = {val: 6, next: null};
        b.next.next.next.next = {val: 5, next: {val: 7, next: null}};

        expect(getIntersectionNode(a,b)).toEqual(intersection);
    });

    test("lists of different lengths -- intersection at end", () => {
        intersection = {val: 8, next: {val: 4, next: {val: 5, next: null}}};
        a = {val: 4, next: {val: 1, next: intersection}};
        b = {val: 5, next: {val: 6, next: {val: 1, next: intersection }}};

        expect(getIntersectionNode(a,b)).toEqual(intersection);
    });
    
    test("test from example 2", () => {
        intersection = {val: 2, next: {val: 4, next: null}};
        a = {val: 1, next: {val: 9, next: {val: 1, next: intersection}}};
        b = {val: 3, next: intersection};

        expect(getIntersectionNode(a,b)).toEqual(intersection);
    });
    
    test("test from example 3", () => {
        intersection = null;
        a = {val: 2, next: {val: 6, next: {val: 4, next: null}}};
        b = {val: 1, next: {val: 5, next: null}};
        expect(getIntersectionNode(a,b)).toBe(intersection);
    });
});