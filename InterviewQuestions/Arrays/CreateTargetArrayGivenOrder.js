//https://leetcode.com/problems/create-target-array-in-the-given-order/

//my first attempt
var createTargetArray = function (nums, index) {
  let answer = [];
  for (let i = 0; i < index.length; i++) {
    if (answer.length > index[i]) {
      answer.splice(index[i], 0, nums[i]);
    } else {
      answer.push(nums[i]);
    }
  }
  console.log(answer);
  return answer;
};

//correct solution and simiplied
//what i learned:
var createTargetArray = function (nums, index) {
  let answer = [];
  for (let i = 0; i < index.length; i++) {
    answer.splice(index[i], 0, nums[i]);
  }
  console.log(answer);
  return answer;
};
