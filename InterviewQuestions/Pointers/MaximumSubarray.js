//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  //let leftPointer = 0;
  let rightPointer = 0;
  let currentSum = null;
  let maxSum = null;
  while (rightPointer < nums.length) {
    // Get new currentSum
    if (currentSum === null) {
      currentSum = nums[rightPointer];
    } else {
      currentSum += nums[rightPointer];
    }
    // Compare current sum to max
    if (maxSum === null || currentSum > maxSum) {
      maxSum = currentSum;
    }
    // Advance left pointer if current sum is less than max
    if (currentSum <= 0) {
      //leftPointer = rightPointer +1;
      currentSum = 0;
    }
    rightPointer++;
  }
  return maxSum;
};
