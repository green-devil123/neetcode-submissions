class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    getMintime(piles:number[], i:number){
        let sum = 0;
        for(let j=0;j<piles.length;j++){
            sum += Math.ceil(piles[j]/i);
        }
        return sum;
    }
    minEatingSpeed(piles: number[], h: number): number {
        let low = 1;
        let high = Math.max(...piles);
        let result = -1;
        while(low<=high){
            const mid = Math.floor((low+high)/2);
            const minK = this.getMintime(piles, mid);
            if(minK > h){
                low = mid+1;
            }else{
                result = mid;
                high = mid-1;
            }
        }
        return result;
    }
}
