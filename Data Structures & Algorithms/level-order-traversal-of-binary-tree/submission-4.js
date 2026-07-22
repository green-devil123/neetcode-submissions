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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        if(root && !root.left && !root.right) return [[root.val]];
        const queue = [];
        const result = [];
        queue.push(root);
        while(queue.length > 0){
            const size = queue.length;
            const level = [];
            for(let i=0;i<size;i++){
                const node = queue.shift();
                level.push(node.val);
                if(node && node.left) queue.push(node.left);
                if(node && node.right) queue.push(node.right);
            }
            result.push(level);
        }
        return result;
    }
}
