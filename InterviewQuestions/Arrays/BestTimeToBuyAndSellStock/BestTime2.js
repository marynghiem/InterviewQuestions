//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function (prices) {
  let maxProfit = 0;
  let firstPointer = prices.length - 1;
  let secondPointer = prices.length - 2;
  while (secondPointer >= 0) {
    if (prices[firstPointer] - prices[secondPointer] > 0) {
      maxProfit = maxProfit + (prices[firstPointer] - prices[secondPointer]);
      firstPointer--;
      secondPointer--;
    } else {
      firstPointer--;
      secondPointer--;
    }
  }
  return maxProfit;
};
