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
        let result =0, low=1, high=max;
        while(low<=high){
            const mid = Math.floor((low+high)/2);
            const getMinK = this.getMinTime(piles, mid);
            if(getMinK > h){
                low = mid+1
            }else{
                high = mid-1;
                result = mid;
            }
        }
        return result;
    }
}
