class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let dq:number[] = [];
        const result:number[] = [];
        for(let i=0;i<nums.length;i++){
            if(dq.length > 0 && dq[0] === i-k ){
                dq.shift();
            }
            while(dq.length > 0 && nums[i] >= nums[dq[dq.length-1]]) dq.pop();
            dq.push(i);
            console.log(dq)
            if(i>=k-1) result.push(nums[dq[0]]);
        }
        return result;
    }
}


