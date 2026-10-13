class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);
        let prefix = 1;
        for(let i=0;i<n;i++){
            result[i] = result[i] * prefix;
            prefix = nums[i]*prefix;
        }
        let suffix = 1;
        for(let i=n-1;i>=0;i--){
            result[i] = result[i] * suffix;
            suffix = nums[i]*suffix;
        }
        return result;
    }
}

