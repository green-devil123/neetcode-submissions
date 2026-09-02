class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);
        let fix = 1;
        for(let i=0;i<n;i++){
            result[i] = fix * result[i];
            fix = fix * nums[i];
        }
        fix = 1;
        for(let i=n-1;i>=0;i--){
            result[i] = fix * result[i];
            fix = fix * nums[i];
        }
        return result
        // const prefix = new Array(n).fill(1);
        // const suffix = new Array(n).fill(1);

        // for(let i=1;i<n;i++){
        //     prefix[i] = nums[i-1]*prefix[i-1];
        // }
        // for(let i=n-2;i>=0;i--){
        //     suffix[i] = nums[i+1] * suffix[i+1]
        // }

        // for(let i=0;i<n;i++){
        //     prefix[i] = prefix[i]*suffix[i];
        // }

        // return prefix;
    }
}

// [1,2,3,4]
// i=0, res = 1, prefix = 1,
// i=1; res = 1, prefix = 2
// i=2, res = 2, prefix = 6
// i=3, res = 8, pref- 24

// i=3, res = 4, sufix = 4
// i=2, res = 4
