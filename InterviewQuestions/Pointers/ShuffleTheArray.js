//https://leetcode.com/problems/shuffle-the-array/submissions/

var shuffle = function (nums, n) {
  let firstHalfPointer = 0;
  let secondHalfPointer = nums.length / 2;
  let answer = [];
  while (secondHalfPointer < nums.length) {
    answer.push(nums[firstHalfPointer]);
    answer.push(nums[secondHalfPointer]);
    firstHalfPointer++;
    secondHalfPointer++;
  }
  return answer;
};
