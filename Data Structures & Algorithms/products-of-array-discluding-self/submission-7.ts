class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result:number[] = new Array(nums.length).fill(1);
        let prefix = 1;
        for(let i=0;i<nums.length;i++){
            result[i] = prefix*result[i];
            prefix *= nums[i];
        }

        let suffix = 1;
        for(let i=nums.length-1;i>=0;i--){
            result[i] = suffix * result[i];
            suffix *= nums[i];
        }
        return result;
    }
}
