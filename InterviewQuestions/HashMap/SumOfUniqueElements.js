//https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function (nums) {
  let hash = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] in hash ? (hash[nums[i]] = hash[nums[i]] + 1) : (hash[nums[i]] = 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      sum = sum + nums[i];
      delete hash[nums[i]];
    }
  }
  return sum;
};
