//https://leetcode.com/problems/richest-customer-wealth/submissions/

var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }
    if (maxWealth < sum) {
      maxWealth = sum;
    }
  }
  return maxWealth;
};
