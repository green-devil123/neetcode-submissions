class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = prices[0];
        let max_profit = 0;
        for(let i=1;i<prices.length;i++){
            max_profit = Math.max(max_profit, prices[i]-min);
            min = Math.min(min, prices[i]);
        }
        return max_profit;
    }
}
