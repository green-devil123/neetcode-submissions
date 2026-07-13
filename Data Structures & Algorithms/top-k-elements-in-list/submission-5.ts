class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for(const num of nums){
            map.set(num, (map.get(num) || 0)+1);
        }
        return [...map.keys()].sort((a,b)=> map.get(b)-map.get(a)).slice(0, k);
    }
}
