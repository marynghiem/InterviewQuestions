//https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  let answer = [];
  let left = 1;
  let right = 1;
  //1,2,3,4
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left;
    //[1,1,2,6]
    left = left * nums[i];
    //[1,2,6, 24]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = right * answer[i];
    //1* 6
    //[24,12,8,6]
    right = right * nums[i];
    //1*4*3*2
  }
  return answer;
};
