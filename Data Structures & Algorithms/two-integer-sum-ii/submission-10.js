class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n=numbers.length, i=0, j=n-1;
        while(i<j){
            const sum = numbers[i] + numbers[j];
            if(sum === target) return [i+1, j+1];

            if(sum < target){
                i++;
            }else{
                j--;
            }
        }
        return [-1, -1];
    }
}
