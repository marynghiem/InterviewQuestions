//https://leetcode.com/problems/power-of-three/submissions/

var isPowerOfThree = function (n) {
  let currentNum = 1;
  while (currentNum < n) {
    currentNum = currentNum * 3;
  }
  if (currentNum > n) {
    return false;
  } else if (currentNum == n) {
    return true;
  }
};
