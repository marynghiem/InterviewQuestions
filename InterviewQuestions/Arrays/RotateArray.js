//https://leetcode.com/problems/rotate-array/?fbclid=IwAR1U2kLPKtwBNFryJnqpU4RBcWn7bvt4kf_C7EhPSfWJTyMCHCFi2A3GL90

var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  let left = nums.slice(0, nums.length - k);
  let right = nums.slice(nums.length - k);

  for (let i = 0; i < right.length; i++) {
    nums[i] = right[i];
  }
  for (let i = 0; i < left.length; i++) {
    nums[right.length + i] = left[i];
  }
};
