class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let dq = [];
        for(let i=0;i<nums.length;i++){
            if(dq.length > 0 && dq[0] === i-k){
                dq.shift();
            }
            while(dq.length > 0 && 
            nums[i]>=nums[dq[dq.length-1]]){
                dq.pop();
            }
            dq.push(i);
            if(i>=k-1) result.push(nums[dq[0]]);
        }
        return result;
    }
}

// 1. k=3
// 2. top > lasttop
// 3. dq>0 last item push in result