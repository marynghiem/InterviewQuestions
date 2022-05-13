//https://leetcode.com/problems/contains-duplicate/submissions/

var containsDuplicate = function (nums) {
  let checked = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (checked.has(nums[i])) {
      return true;
    } else {
      checked.add(nums[i]);
    }
  }
  return false;
};
