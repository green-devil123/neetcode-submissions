class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result:number[][] = [];
        if(nums.length < 3) return result;
        nums.sort((a,b)=>a-b);
        let i=0;
        while(i < nums.length-2){
            if(i > 0 && nums[i] === nums[i-1]){
                i++;
                continue;
            }

            let j=i+1;
            let k = nums.length-1;
            while(j < k){
                const sum = nums[i] + nums[j] + nums[k];

                if(sum < 0){
                    j++;
                }else if(sum > 0){
                    k--;
                }else{
                    result.push([nums[i],nums[j],nums[k]])

                    j++;
                    k--;

                    while(j<k && nums[j-1] === nums[j]) j++;
                    while(j<k && nums[k+1] === nums[k]) k--
                }
            }
            i++;
        }
        return result;
    }
}
