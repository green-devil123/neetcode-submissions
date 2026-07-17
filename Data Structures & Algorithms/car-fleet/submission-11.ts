class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pair:number[][] = [];
        const stack:number[] = []
        for(let i=0;i<position.length;i++){
            pair.push([position[i], speed[i]]);
        }
        pair.sort((a,b)=>b[0]-a[0]);
        for(let i=0;i<pair.length;i++){
            const [pos, spd] = pair[i];
            const time = (target-pos)/spd;
            if(stack.length === 0 || time > stack[stack.length-1]){
                stack.push(time);
            }
        }
        return  stack.length;
    }
}
