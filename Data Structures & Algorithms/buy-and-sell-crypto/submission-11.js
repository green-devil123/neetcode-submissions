class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min_price = prices[0];
        let maxProfit = 0;
        for(let i=1;i<prices.length;i++){
            maxProfit = Math.max(maxProfit, prices[i] - min_price);
            if(prices[i] < min_price){
                min_price = prices[i];
            }
        }
        return maxProfit;
    }
}
