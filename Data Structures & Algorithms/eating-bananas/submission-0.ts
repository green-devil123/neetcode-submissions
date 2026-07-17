class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    getMintime(piles:number[], i:number, h:number){
        let sum = 0;
        for(let j=0;j<piles.length;j++){
            sum += Math.ceil(piles[j]/i);
        }
        return sum<=h;
    }
    minEatingSpeed(piles: number[], h: number): number {
        let max = Math.max(...piles);
        for(let i=1;i<=max;i++){
            const isMinK = this.getMintime(piles, i, h);
            if(isMinK){
                return i;
            }
        }
        return -1;
    }
}
