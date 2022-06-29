//https://leetcode.com/problems/find-the-duplicate-number/

//initial solution
//time coplexity is o(nlog(n))
var findDuplicate = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i];
    }
  }
  return -1;
};

//time complexity o(n)
//using sets
var findDuplicate = function (nums) {
  let seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
};
