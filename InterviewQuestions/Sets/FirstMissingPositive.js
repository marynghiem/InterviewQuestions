//https://leetcode.com/problems/first-missing-positive/description/

var firstMissingPositive = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  let start = 1;
  while (true) {
    if (set.has(start)) {
      start++;
    } else {
      return start;
    }
  }
};
