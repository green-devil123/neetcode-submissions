class Solution {
    nse(arr:number[]):number[]{
        const stack = [];
        const n= arr.length;
        const result = new Array(n).fill(n);
        for(let i=n-1;i>=0;i--){
            while(stack.length > 0 && arr[i]<= arr[stack[stack.length-1]]){
                stack.pop();
            }
            if(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
                result[i] = stack[stack.length-1];
            }
            stack.push(i);
        }
        return result;
    }

    pse(arr:number[]):number[]{
        const stack = [];
        const n = arr.length;
        const result = new Array(n).fill(-1);
        for(let i=0;i<n;i++){
            while(stack.length > 0 && arr[i]<= arr[stack[stack.length-1]]){
                stack.pop();
            }
            if(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
                result[i] = stack[stack.length-1];
            }
            stack.push(i);
        }
        return result;
    }
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        // const next_small = this.nse(heights); 
        // const prev_small = this.pse(heights);
        // let max = Number.MIN_SAFE_INTEGER;
        // for(let i=0;i<heights.length;i++){
        //     const num = next_small[i]-prev_small[i]-1;
        //     max = Math.max(max, num*heights[i]);
        // }
        // return max
        const stack: number[] = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {

            const currentHeight = i === heights.length ? 0 : heights[i];

            while (
                stack.length > 0 &&
                currentHeight < heights[stack[stack.length - 1]]
            ) {
                const h = heights[stack.pop()!];
                const left = stack.length === 0 ? -1 : stack[stack.length - 1];
                const width = i - left - 1;

                maxArea = Math.max(maxArea, h * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
