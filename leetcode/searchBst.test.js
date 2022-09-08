/** Definition for a binary tree node. 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return null;
    else {
        let current = root;
        while (current) {
            if (current.val === val) return current;
            else if (current.val > val) {
                if (current.left === null) return null;
                current = current.left;
            } else if (current.val < val) {
                if (current.right === null) return null;
                current = current.right;
            }
        }
    }
};

// TESTS
describe("tests from problem text", () => {
    let root, val, result;

    test("test from example 1", () => {
        root = {
            val: 4,
            left: {
                val: 2,
                left: {val: 1, left: null, right: null},
                right: {val: 3, left: null, right: null}
            },
            right: {val: 7, left: null, right: null}
        };
        val = 2;
        result = {
            val: 2,
            left: {val: 1, left: null, right: null},
            right: {val: 3, left: null, right: null}
        };
        expect(searchBST(root, val)).toEqual(result);
    });
    
    test("test from example 2", () => {
        root = {
            val: 4,
            left: {
                val: 2,
                left: {val: 1, left: null, right: null},
                right: {val: 3, left: null, right: null}
            },
            right: {val: 7, left: null, right: null}
        };
        val = 5;
        result = null;
        expect(searchBST(root, val)).toEqual(result);
    });
});
