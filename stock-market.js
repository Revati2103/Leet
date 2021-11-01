var maxProfit = function(prices) {
    let buyAt = prices[0];
    let maximumProfit = 0;

    for (let value of prices) {
        if(buyAt < value){
            maximumProfit = Math.max(maximumProfit, value - buyAt);
            
        }else {
            buyAt = value;
        }
    }
    console.log(maximumProfit);
    return maxProfit;
};

let prices = [19, 17, 15, 13, 10, 7, 1];
maxProfit(prices);