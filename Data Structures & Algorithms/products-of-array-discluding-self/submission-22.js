class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n).fill(1);
        const suffix = new Array(n).fill(1);
        const result = new Array(n).fill(1);

        for(let i=1;i<n;i++){
            prefix[i] = prefix[i-1]*nums[i-1];
        }
        for(let j=n-2;j>=0;j--){
            suffix[j] = suffix[j+1]*nums[j+1];
        }
        for(let i=0;i<n;i++) {
            result[i] = prefix[i]*suffix[i];
        }

        return result;
    }
}

