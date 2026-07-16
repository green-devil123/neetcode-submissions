class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    nse(heights: number[]): number[]{
        const n = heights.length;
        const result:number[] = new Array(n).fill(n);
        const stack:number[] = [];
        for(let i=n-1;i>=0;i--){
            while(stack.length > 0 && heights[i] <= heights[stack[stack.length-1]]){
                stack.pop();
            }
            if(stack.length > 0 && heights[i] > heights[stack[stack.length-1]]){
                result[i] = stack[stack.length-1];
            }
            stack.push(i);
        }
        return result;
    }

    pse(heights: number[]): number[]{
        const n = heights.length;
        const result:number[] = new Array(n).fill(-1);
        const stack:number[] = [];
        for(let i=0;i<n;i++){
            while(stack.length > 0 && heights[i] <= heights[stack[stack.length-1]]){
                stack.pop();
            }
            if(stack.length > 0 && heights[i] > heights[stack[stack.length-1]]){
                result[i] = stack[stack.length-1];
            }
            stack.push(i);
        }
        return result;
    }


    largestRectangleArea(heights: number[]): number {
        let maxArea:number = Number.MIN_SAFE_INTEGER;
        const nss:number[] = this.nse(heights);
        const pss:number[] = this.pse(heights);
        console.log(nss, pss)
        for(let i=0;i<heights.length;i++){
            maxArea = Math.max(maxArea, (nss[i]-pss[i]-1)*heights[i]);
        }
        return maxArea;
    }
}
