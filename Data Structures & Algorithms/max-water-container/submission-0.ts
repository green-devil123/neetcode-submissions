class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left:number =0, right:number =heights.length-1;
        let maxArea:number = 0
        while(left<right){
            const b:number = right-left;
            let area:number = 0;
            if(heights[left] < heights[right]){
                area = b * heights[left];
                left++;
            }else{
                area = b * heights[right];
                right--;
            }
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
