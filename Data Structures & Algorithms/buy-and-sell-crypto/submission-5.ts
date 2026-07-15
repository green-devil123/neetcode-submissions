class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max:number = 0;
        let min:number = prices[0];
        for(let i=1;i<prices.length;i++){
            max = Math.max(max, prices[i]-min);
            min = Math.min(min, prices[i]);
        }
        return max;
    }
}
