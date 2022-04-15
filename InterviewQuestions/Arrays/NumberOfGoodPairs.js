//https://leetcode.com/problems/number-of-good-pairs/

//first attempt brute force
var numIdenticalPairs = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const pair = [i];
      if (nums[i] === nums[j]) {
        pair.push(j);
      }
      if (pair.length === 2) {
        answer.push(pair);
      }
    }
  }
  console.log(answer);
  return answer.length;
};
