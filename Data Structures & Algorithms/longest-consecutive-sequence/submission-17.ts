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
            if(!set.has(num-1)){
                let count = 1
                while(set.has(current+1)){
                    count++;
                    current++;
                }
                longest = Math.max(count, longest);
            }
        }
        return longest;
    }
}
