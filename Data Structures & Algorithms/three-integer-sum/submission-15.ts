class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=>a-b);
        let i=0, j=0, k=0;
        const result:number[][] = []; 
        while(i<nums.length-2){
            if(nums[i]!== undefined && nums[i] === nums[i-1]){
                i++;
                continue
            };
            j=i+1;
            k=nums.length-1;
            while(j<k){
                const sum = nums[i]+nums[j]+nums[k];
                if(sum < 0){
                    j++;
                }else if(sum > 0){
                    k--;
                }else{
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j<k && nums[j] === nums[j-1])j++;
                    while(j<k && nums[k] === nums[k+1])k--;
                }
            }
            i++;
        }
        return result;
    }
}
