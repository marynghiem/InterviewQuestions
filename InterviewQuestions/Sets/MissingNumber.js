//https://leetcode.com/problems/missing-number/

//first solution, try again with more efficient solution
//time complexity: nlogn
//space complexity: n?
var missingNumber = function (nums) {
  let maxNum = nums.length;
  let sortedNum = nums.sort((a, b) => a - b);
  let currentNum = 0;
  let i = 0;
  while (currentNum <= maxNum) {
    if (sortedNum[i] !== currentNum) {
      return currentNum;
    } else {
      currentNum++;
      i++;
    }
  }
};

//second solution, using sets
//time complexity: o(n)
//space complexity: o(n)?
var missingNumber = function (nums) {
  let set = new Set();
  let start = 0;
  let maxNum = nums.length;
  for (let num of nums) {
    set.add(num);
  }
  while (start <= maxNum) {
    if (!set.has(start)) {
      return start;
    } else {
      start++;
    }
  }
};

//most efficient solution
//time complexity o(n)
//space complexity o(1)
var missingNumber = function (nums) {
  let total = 0;
  for (let i = 0; i <= nums.length; i++) {
    total = total + i;
  }
  let missingTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    missingTotal = missingTotal + nums[i];
  }
  return total - missingTotal;
};
