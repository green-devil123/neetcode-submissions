class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    getMinTime(piles:number[], i:number){
        let sum =0;
        for(let j=0;j<piles.length;j++){
            sum += Math.ceil(piles[j]/i);
        }
        return sum;
    }
    minEatingSpeed(piles: number[], h: number): number {
        let max = Math.max(...piles);
        // let minTime = Number.MAX_SAFE_INTEGER;
        for(let i=1;i<=max;i++){
            let getMinK = this.getMinTime(piles, i);
            if(getMinK <= h){
                return i;
            }
        }
        return -1;
    }
}
