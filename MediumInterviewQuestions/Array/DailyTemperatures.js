//https://leetcode.com/problems/daily-temperatures/

//my solution but need to find more efficient solution
var dailyTemperatures = function (temperatures) {
  let firstPointer = 0;
  let secondPointer = 1;
  let answer = [];
  while (firstPointer < temperatures.length) {
    let days = 0;
    while (secondPointer < temperatures.length) {
      if (temperatures[firstPointer] >= temperatures[secondPointer]) {
        days++;
        secondPointer++;
      } else {
        days++;
        answer.push(days);
        break;
      }
    }
    if (secondPointer >= temperatures.length) {
      days = 0;
      answer.push(days);
    }
    firstPointer++;
    secondPointer = firstPointer + 1;
  }
  return answer;
};
