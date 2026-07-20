class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        // const set = new Set();
        // for(let num of nums){
        //     if(set.has(num)) return num
        //     set.add(num)
        // }
        // return -1
        let slow = 0;
        let fast = 0;

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        let ptr1 = 0;
        let ptr2 = slow;
        console.log(ptr2)
        while (ptr1 !== ptr2) {
            ptr1 = nums[ptr1];
            ptr2 = nums[ptr2];
        }

        return ptr1;
    }
}
