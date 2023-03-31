//https://leetcode.com/problems/power-of-two/description/
var isPowerOfTwo = function (n) {
  let divisible = n;
  while (true) {
    if (divisible == 1) {
      return true;
    } else if (divisible < 1) {
      return false;
    }
    divisible = divisible / 2;
  }
};
