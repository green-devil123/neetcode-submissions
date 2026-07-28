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
    diameterOfBinaryTree(root) {
        if(root === null) return 0;
	
            let max = 0;
            function findDepth(root){
                if(root === null ) return 0;
                const lh = findDepth(root.left);
                const rh = findDepth(root.right);
                max = Math.max(max, lh+rh);
                return 1+ Math.max(lh, rh);
            }
            findDepth(root);
        return max;
    }
}
