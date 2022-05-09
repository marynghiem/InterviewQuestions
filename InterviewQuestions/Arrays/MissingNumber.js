//https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  let maxNum = nums.length;
  let sortedNum = nums.sort((a, b) => a - b);
  let currentNum = 0;
  let i = 0;
  while (currentNum <= maxNum) {
    if (sortedNum[i] !== currentNum) {
      return currentNum;
    } else {
      currentNum++;
      i++;
    }
  }
};
