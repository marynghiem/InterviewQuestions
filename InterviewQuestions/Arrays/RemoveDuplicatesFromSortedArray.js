//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

//started problem by myself but got some parts wrong, need to try again
var removeDuplicates = function (nums) {
  let first = 0;
  let second = 1;
  while (second < nums.length) {
    if (nums[first] !== nums[second]) {
      first++; //increment first
      nums[first] = nums[second]; //replace current value with the next value
      second; //increment second
    } else {
      second++; //increment the second number only bc first is keeping count
    }
  }
  return first + 1;
};
