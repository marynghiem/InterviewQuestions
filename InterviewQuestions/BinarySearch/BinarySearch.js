//https://leetcode.com/problems/binary-search/submissions/

//practice again later
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    }
    if (target < nums[middle]) {
      right = middle - 1;
    }
    if (target > nums[middle]) {
      left = middle + 1;
    }
  }
  return -1;
};
