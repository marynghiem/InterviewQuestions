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

//second attempt
var firstMissingPositive = function (nums) {
  //create set
  let set = new Set();
  //loop through the nums and add every number
  //so memory is o(n)
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  //look through each number
  let positiveCheck = 1;
  while (true) {
    if (set.has(positiveCheck)) {
      //if the set contains the number, then increment
      positiveCheck++;
    } else {
      return positiveCheck;
    }
  }
};
