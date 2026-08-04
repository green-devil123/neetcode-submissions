class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pair:number[][] = [];
        for(let i=0;i<position.length;i++){
            const time = (target-position[i]) / speed[i];
            pair.push([time, position[i]])
        }
        pair.sort((a,b)=>b[1]-a[1]);
        const stack =[];
        for(const [time,_] of pair){
            if(stack.length === 0 || time > stack[stack.length-1]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
