class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const prefix:number[] = new Array(n).fill(1);
        const suffix:number[] = new Array(n).fill(1);
        
        for(let i=1;i<n;i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(let i=n-2;i>=0;i--){
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        for(let i=0;i<n;i++){
            prefix[i] = prefix[i] * suffix[i];
        }
        return prefix;
    }
}
