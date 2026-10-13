class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(const num of nums){
            map.set(num, (map.get(num) || 0) +1);
        }
        const newArr = [...map];
        newArr.sort((a,b)=>b[1]-a[1])  
        return newArr.slice(0,k).map(ele => ele[0]);
    }
}
