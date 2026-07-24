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
        // const queue = [];
        // queue.push(root);
        // const result = [];
        // while(queue.length > 0){
        //     const size = queue.length;
        //     for(let i=0;i<size;i++){
        //         const node = queue.shift();
        //         if(i === size-1) result.push(node.val);
        //         if(node.left) queue.push(node.left);
        //         if(node.right) queue.push(node.right);
        //     }
        // }
        // return result;
        let maxLevel = -1;
        const result = [];
        function rightView(root, level){
            if(!root) return null;
            if(level > maxLevel){
                maxLevel = level;
                result.push(root.val);
            }
            rightView(root.right, level+1, maxLevel);
            rightView(root.left, level+1, maxLevel);

            return result;
        }
        return rightView(root, 0);
    }
}
