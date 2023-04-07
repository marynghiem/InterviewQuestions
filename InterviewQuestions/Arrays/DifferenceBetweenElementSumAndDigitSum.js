//https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

var differenceOfSum = function (nums) {
  let elementSum = nums.reduce((a, b) => a + b);
  let digitSum = 0;
  let digits = nums.join("").split("");
  for (let i = 0; i < digits.length; i++) {
    digitSum += +digits[i];
  }
  return Math.abs(elementSum - digitSum);
};
