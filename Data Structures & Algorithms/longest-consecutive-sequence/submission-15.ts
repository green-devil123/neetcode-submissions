class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        let longest = 0;
        for(const num of nums){
            let current = num;
            if(!set.has(current-1)){
                let len = 1;
                while(set.has(current+1)){
                    current++;
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
