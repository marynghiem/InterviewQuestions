//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/

var smallerNumbersThanCurrent = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
};
