class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for(const num of nums){
            map.set(num, (map.get(num) || 0) +1);
        }
        const result = [...map.keys()].sort((a,b)=> map.get(b)-map.get(a));
        return result.slice(0, k)
    }
}
