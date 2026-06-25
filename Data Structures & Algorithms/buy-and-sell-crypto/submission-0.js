class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let price = prices[0]
        let profit = 0
        
        for(let pre of prices){
            if(price > pre){
                price = pre
                console.log(pre)
            } else if(pre > price && pre - price > profit){
                profit = pre - price 
            }
        }

        return profit
    }
}
