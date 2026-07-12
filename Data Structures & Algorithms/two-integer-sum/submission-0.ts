class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            const diff = target - nums[i];
            if(map.has(diff)){
                const idx = map.get(diff);
                return [idx, i];
            }
            map.set(nums[i], i);
        }
        return [-1,-1];
    }
}
