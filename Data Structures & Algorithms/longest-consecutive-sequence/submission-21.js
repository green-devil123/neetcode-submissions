class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for(const num of nums){
            let current = num;
            if(!set.has(current-1)){
                let count = 1;
                while(set.has(current+1)){
                    current++;
                    count++;
                }
                max = Math.max(count, max);
            }
        }
        return max;
    }
}

// [2,20,4,10,3,4,5]
// 2,3,4,5
// 20
// 10


