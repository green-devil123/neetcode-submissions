class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max_result = 0;
        for(const num of nums){
            let longest = 0;
            if(!set.has(num-1)){
                let init = num;
                while(set.has(init)){
                    init++;
                    longest++;
                }
            }
            max_result = Math.max(longest, max_result);
        }
        return max_result;
    }
}
