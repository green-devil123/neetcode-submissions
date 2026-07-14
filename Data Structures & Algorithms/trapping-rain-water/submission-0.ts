class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalWater:number = 0;
        let i=0;
        while(i<height.length){
            let leftMax = 0, rightMax = 0;
            for(let j=0;j<=i;j++){
                leftMax = Math.max(leftMax, height[j]);
            }

            for(let j=i;j<height.length;j++){
                rightMax = Math.max(rightMax, height[j]);
            }
            totalWater += Math.min(leftMax, rightMax) - height[i];
            i++
        }
        return totalWater;
    }
}
