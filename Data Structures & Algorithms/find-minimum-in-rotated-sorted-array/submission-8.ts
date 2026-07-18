class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let low:number = 0, high:number = nums.length-1;
        while(low < high){
            const mid:number = Math.floor((low+high)/2);
            if(nums[mid] > nums[high]){
                low = mid+1;
            }else{
                high = mid;
            }
        }
        return nums[low];
    }
}
