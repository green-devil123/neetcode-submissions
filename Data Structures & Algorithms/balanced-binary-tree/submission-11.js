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

    // findDepth(root){
    //     if(!root) return 0;

    //     const l = this.findDepth(root.left);
    //     const r = this.findDepth(root.right);

    //     return 1 + Math.max(l,r);
    // }
    findDepth(root) {
        if (!root) return 0;

        const l = this.findDepth(root.left);
        if (l === -1) return -1;

        const r = this.findDepth(root.right);
        if (r === -1) return -1;

        if (Math.abs(l - r) > 1) return -1;

        return 1 + Math.max(l, r);
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.findDepth(root) !== -1;
    }
}
