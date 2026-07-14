class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left:number = 0;
        let right:number = heights.length-1;
        let maxArea = 0;
        while(left < right){
            const b:number = right-left;
            let area:number = 0
            if(heights[left]<heights[right]){
                area = heights[left] * b;
                left++;
            }else{
                area = heights[right] * b;
                right--;
            }
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
