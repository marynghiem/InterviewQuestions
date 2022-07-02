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
//space complexity o(n)
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

//time complexity o(n)
//space complexity o(1)
//Negative Marking technique
var findDuplicate = function (nums) {
  let duplicate = -1; //start by initializing duplicate as -1
  for (let i = 0; i < nums.length; i++) {
    let current = Math.abs(nums[i]); //start by looping through and turning current into an absolute number
    if (nums[current] < 0) {
      //
      duplicate = current; //if theres a duplicate, break out of the loop
      break;
    }
    nums[current] = -nums[current];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }
  return duplicate;
};
