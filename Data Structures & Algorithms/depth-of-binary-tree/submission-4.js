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
    maxDepth(root) {
        if(!root) return 0;
        // if(!root.left && !root.right) return 1;
        // const queue = [];
        // queue.push([root, 1]);
        // let maxLen = 0;
        // let ind = 0;
        // while(queue.length >0){
        //     const size = queue.length;
        //     for(let i=0;i<size;i++){
        //         const [node, count] = queue.shift();
        //         maxLen = Math.max(count, maxLen);
        //         if(node && node.left) queue.push([node.left, count+1])
        //         if(node && node.right) queue.push([node.right, count+1])
        //     }
        // }
        // return maxLen;
        let left = 1 + this.maxDepth(root.left);
        let right = 1 + this.maxDepth(root.right);
        return Math.max(left, right);
    }
}
