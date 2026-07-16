class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n:number = temperatures.length; 
        const result:number[] = new Array(n).fill(0);
        const stack:number[] = [];
        // for(let i=0;i<n;i++){
        //     for(let j=i+1;j<n;j++){
        //         if(temperatures[j] > temperatures[i]){
        //             result[i] = j-i;
        //             break;
        //         }
        //     }
        // }
        // return result;

        stack.push(n-1);
        for(let i=n-2;i>=0;i--){
            while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length-1]]){
                stack.pop();
            }
            if(stack.length>0 && temperatures[i] < temperatures[stack[stack.length-1]]){
                result[i] = stack[stack.length-1] - i;
            }
            stack.push(i);
        }
        return result;
    }
}
