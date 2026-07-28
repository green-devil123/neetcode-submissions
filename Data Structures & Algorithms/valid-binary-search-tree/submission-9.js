/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    isValid(root, minVal, maxVal){
        if(!root) return true;
        if(root.val <= minVal || root.val >= maxVal) return false;
        return this.isValid(root.left, minVal, root.val) && 
        this.isValid(root.right, root.val, maxVal);
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
}
