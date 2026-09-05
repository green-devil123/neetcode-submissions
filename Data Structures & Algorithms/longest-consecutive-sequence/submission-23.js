class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(const num of nums){
            if(!set.has(num-1)){
                let current = num;
                let count =1;
                while(set.has(current+1)){
                    current++;
                    count++;
                }
                
                longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}
