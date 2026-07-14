class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
                maxProfit = Math.max(prices[j]-prices[i], maxProfit);
            }
        }
        return maxProfit;
    }
}
