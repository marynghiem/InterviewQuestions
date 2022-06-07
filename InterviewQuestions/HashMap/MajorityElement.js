//https://leetcode.com/problems/majority-element/
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 Example:
 Input: nums = [3,2,3]
Output: 3
*/
var majorityElement = function (nums) {
  const hash = {}; //created a hash map
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = nums[i] in hash ? hash[nums[i]] + 1 : 1; //if the array value is already in the object, add one. if not, set it to 1
  }
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b)); // reduce function to return the key with the highest
};

//Boyer Moore Voting Algorithm
var majorityElement = function (nums) {
  let count = 0; //count starts a 0
  let candidate; //create a variable
  for (num of nums) {
    if (count == 0) {
      candidate = num; //set candidate to the current num if the count is equal to 0
    }
    count += num == candidate ? 1 : -1; //depending on if the next num is the same as candidate, it will add (same), subtract (different)
  }
  return candidate; //return the candidate
};
