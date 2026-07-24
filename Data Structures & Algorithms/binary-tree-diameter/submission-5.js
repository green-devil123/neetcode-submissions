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
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    findDepth(root){
        if(!root) return 0;
        const left = this.findDepth(root.left);
        const right = this.findDepth(root.right);

        return 1 + Math.max(left, right);
    }

    diameterOfBinaryTree(root) {
        if(!root) return 0;

        // const leftDepth = this.findDepth(root.left);
        // const rightDepth = this.findDepth(root.right);

        // const lh = this.diameterOfBinaryTree(root.left);
        // const lr = this.diameterOfBinaryTree(root.right);

        // return Math.max(leftDepth+rightDepth, lh, lr);

        let max = 0;
        function findDepths(node){
            if(!node) return 0;
            const left = findDepths(node.left);
            const right = findDepths(node.right);
            max = Math.max(max, left+right);
            return 1 + Math.max(left, right)
        }
        findDepths(root);
        return max;
    }
}
