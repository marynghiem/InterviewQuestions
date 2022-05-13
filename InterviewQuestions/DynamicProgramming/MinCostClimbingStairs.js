//https://leetcode.com/problems/min-cost-climbing-stairs/

var minCostClimbingStairs = function (cost) {
  let arr = [...cost, 0];
  for (let i = arr.length - 3; i > -1; i--) {
    arr[i] += Math.min(arr[i + 1], arr[i + 2]);
  }
  return Math.min(arr[0], arr[1]);
};
