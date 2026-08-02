class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let water = 0;
        // for(let i=0;i<height.length;i++){
        //     let leftMax = 0;
        //     let rightMax = 0;

        //     for(let j=0;j<=i;j++){
        //         leftMax = Math.max(leftMax, height[j]);
        //     }
            
        //     for(let j=i;j<height.length;j++){
        //         rightMax = Math.max(rightMax, height[j]);
        //     }

        //     water += Math.min(leftMax, rightMax)-height[i];
        // }
        // return water;
        let left =0, right = height.length-1, leftMax = 0, rightMax =0;
        while(left < right){
            if(height[left] < height[right]){
                if(height[left] >= leftMax){
                    leftMax = height[left];
                }else{
                    water += leftMax-height[left];
                }
                left++;
            }else{
                if(height[right] >= rightMax){
                    rightMax = height[right];
                }else{
                    water += rightMax-height[right];
                }
                right--;
            }
        }
        return water;
    }
}
