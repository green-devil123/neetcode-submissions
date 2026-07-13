class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=>a-b)
        let i:number =0, j:number = 0, k:number = 0;
        let result: number[][] = [];
        while(i<nums.length-2){
            if(nums[i-1]!==undefined && nums[i] === nums[i-1]){
                i++;
                continue;
            };
            j=i+1;
            k=nums.length-1;
            while(j<k){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    const arr:number[] = [nums[i], nums[j], nums[k]];
                    result.push(arr);
                    j++;
                    k--;
                }else if(sum<0){
                    j++;
                }else{
                    k--;
                }

                while(j<k && j-1 != i && nums[j] === nums[j-1]) j++;
                while(j<k &&  nums[k] === nums[k+1]) k--;
            }
            i++;
        }
        return result;
    }
}
