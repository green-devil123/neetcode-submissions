class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // let total_water = 0;
        // for(let i=0;i<height.length;i++){
        //     let leftMax = 0;
        //     let rightMax = 0;
        //     for(let j=0;j<=i;j++){
        //         leftMax = Math.max(leftMax, height[j]);
        //     }
        //     for(let j=i;j<height.length;j++){
        //         rightMax = Math.max(rightMax, height[j]);
        //     }
        //     total_water += Math.min(leftMax, rightMax) - height[i];
        // }
        // return total_water;

        let left = 0;
        let right = height.length-1;
        let left_max = 0;
        let right_max = 0;
        let total_water = 0;

        while(left < right){
            if(height[left] < height[right]){
                if(height[left] >= left_max){
                    left_max = height[left];
                }else{
                    total_water += left_max - height[left]
                }
                left++;
            }else{
                if(height[right] >= right_max){
                    right_max = height[right];
                }else{
                    total_water += right_max - height[right]
                }
                right--;
            }
        }
        return total_water;
    }
}
