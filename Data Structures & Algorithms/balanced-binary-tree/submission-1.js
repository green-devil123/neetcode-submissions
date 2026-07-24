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
    findDepth(root){
        if(!root) return 0;
        const left = this.findDepth(root.left);
        const right = this.findDepth(root.right);
        return 1 + Math.max(left, right);
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;

        const left = this.findDepth(root.left);
        const right = this.findDepth(root.right);
        
        if(Math.abs(left-right) > 1) return false;

        const l = this.isBalanced(root.left);
        const r = this.isBalanced(root.right);

        if(!l || !r) return false;

        return true;
    }
}
