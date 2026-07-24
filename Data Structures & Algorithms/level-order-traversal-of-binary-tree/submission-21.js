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
        if(!root) return [];
        if(root && !root.left && !root.right) return [[root.val]]
        const result = [];
        const queue = [];
        queue.push(root);
        let idx  = 0
        while(idx < queue.length){
            const size = queue.length - idx;
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
