class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let water:number = 0;
        let leftMax = 0;
        let rightMax = 0;
        let l =0, r =height.length-1;
        while(l<r){
            if(height[l] < height[r]){
                leftMax = Math.max(leftMax,height[l]);
                water += leftMax-height[l];
                l++;
            }else{
                rightMax = Math.max(rightMax,height[r]);
                water += rightMax-height[r];
                r--;
            }
        }
        return water;
    }
}
