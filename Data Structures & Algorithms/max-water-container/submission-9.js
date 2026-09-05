class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;
        while(left < right){
            const b = right-left;
            let minL = 0;
            if(heights[left] < heights[right]){
                minL = heights[left];
                left++
            }else if(heights[left] > heights[right]){
                minL = heights[right];
                right--;
            }else{
                minL = heights[right];
                left++;
                right--;
            }
            maxArea = Math.max(maxArea, b*minL);
        }
        return maxArea;
    }
}
