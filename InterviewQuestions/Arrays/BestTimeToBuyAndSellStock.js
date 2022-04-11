//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//one pass solution, try again later without looking at explanation of solution
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

//tried again after looking at solution. try again later.
