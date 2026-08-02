class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0, right = heights.length-1;
        let maxArea = 0;
        while(left <= right){
            let l = 0;
            let b = right-left;
            if(heights[left]<heights[right]){
                l = heights[left];
                left++;
            }else if(heights[left] > heights[right]){
                l = heights[right];
                right--;
            }else{
                l = heights[right];
                left++;
                right--;
            }
            const area = b * l;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
