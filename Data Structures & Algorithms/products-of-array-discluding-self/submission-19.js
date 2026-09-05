class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);
        let fix = 1;
        for(let i=0;i<nums.length;i++){
            result[i] = fix * result[i];
            fix *= nums[i];
        }
        fix =1;
        for(let i=nums.length-1;i>=0;i--){
            result[i] = fix * result[i];
            fix *= nums[i];
        }
        return result;
    }
}
