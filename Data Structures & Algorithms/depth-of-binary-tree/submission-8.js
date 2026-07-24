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
        if(root && !root.left && !root.right) return 1;
        //DFS
        // const left = this.maxDepth(root.left);
        // const right = this.maxDepth(root.right);

        // return 1 + Math.max(left,right)

        //BFS
        let maxNodes = 0;
        const queue = [];
        queue.push([root, 1]);
        while(queue.length > 0){
            const [node, count] = queue.shift();
            maxNodes = Math.max(maxNodes, count);
            if(node.left) queue.push([node.left, count+1])
            if(node.right) queue.push([node.right, count+1])
        }
        return maxNodes;
    }
}
