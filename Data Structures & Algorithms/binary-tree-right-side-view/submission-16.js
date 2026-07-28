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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let maxLevel = -1;
        const result = [];
        function rightView(root, level = 0){
            if(!root) return null;
            if(level > maxLevel){
                maxLevel = level;
                result.push(root.val);
            }
            rightView(root.right, level+1);
            rightView(root.left, level+1);
        }
        rightView(root, 0);
        return result;
    }
}
