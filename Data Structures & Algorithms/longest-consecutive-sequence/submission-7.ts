class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        let longest = 0;
        for(const num of nums){
            if(!set.has(num-1)){
                let current:number = num;
                let len:number = 1;
                while(set.has(current+1)){
                    current++;
                    len++;
                }
                longest = Math.max(len, longest);
            }
        }
        return longest;
    }
}