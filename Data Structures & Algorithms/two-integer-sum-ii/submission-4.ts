class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // const map = new Map();
        // for(let i=0;i<numbers.length;i++){
        //     const diff = target-numbers[i];
        //     if(map.has(diff)){
        //         return [map.get(diff), i];
        //     }else{
        //         map.set(numbers[i], i);
        //     }
        // }
        // return [-1, -1]

        let i=0, j=numbers.length -1;
        while(i<j){
            const sum = numbers[i] + numbers[j];
            if(sum === target){
                return [i+1, j+1];
            }else if(sum < target){
                i++;
            }else{ 
                j--;
            }
        }
        return [-1, -1]
    }
}
