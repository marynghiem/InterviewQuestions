//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (num) {
  let counter = 0;
  let newNum = num;
  while (newNum !== 0) {
    if (newNum % 2 === 1) {
      counter++;
      newNum = newNum - 1;
    } else if (newNum % 2 === 0) {
      counter++;
      newNum = newNum / 2;
    }
  }
  return counter;
};
