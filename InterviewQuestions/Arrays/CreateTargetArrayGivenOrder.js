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
//what i learned: i added additional code that wasnt needed. try and be more concise.
//also learned splice:
//const arr = ['a', 'b', 'd'];

//let start = 2;
//let deleteCount = 0;
//arr.splice(start, deleteCount, 'c');
// ['a', 'b', 'c', 'd'];

var createTargetArray = function (nums, index) {
  let answer = [];
  for (let i = 0; i < index.length; i++) {
    answer.splice(index[i], 0, nums[i]);
  }
  return answer;
};
