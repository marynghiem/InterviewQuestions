//https://leetcode.com/problems/ugly-number/description/

var isUgly = function (n) {
  let checkNum = [5, 3, 2];
  for (let i = 0; i < checkNum.length && n > 1; i++) {
    while (n % checkNum[i] === 0) {
      n /= checkNum[i];
    }
  }
  return n == 1;
};
