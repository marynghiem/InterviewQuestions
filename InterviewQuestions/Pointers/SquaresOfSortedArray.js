//https://leetcode.com/problems/squares-of-a-sorted-array/

//have to try again later
var sortedSquares = function (nums) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;
  let position = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[position] = nums[left] ** 2;
      position--;
      left++;
    } else {
      result[position] = nums[right] ** 2;
      position--;
      right--;
    }
  }
  console.log(result);
  return result;
};
