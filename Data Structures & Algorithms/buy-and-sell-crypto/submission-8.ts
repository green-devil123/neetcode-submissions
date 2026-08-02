class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min:number = prices[0];
        let max_profit = 0;
        for(const num of prices){
            max_profit = Math.max(max_profit, num - min);
            min = Math.min(min, num);
        }
        return max_profit;
    }
}
