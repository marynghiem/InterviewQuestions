//https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i]; //this is XOR
  }
  return res;
};
