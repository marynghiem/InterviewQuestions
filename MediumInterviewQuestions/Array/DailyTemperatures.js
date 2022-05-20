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
// first efficient solution
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0); //created an array and filled it with 0;
  const stack = []; //created a stack
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      //if theres something in the stack and the temperature is higher than the temperature at the end of the stack
      const [stackT, stackInd] = stack.pop(); //stackT and stackInd are assigned a value of what is popped off of the stack
      //stackInd is index and stack T is temperature
      //73 0
      //74 1
      //69 4
      //71 3
      //72 5
      //75 2
      res[stackInd] = i - stackInd; //the answer at the current index = the current index - the index the temperature was orginally
    }
    stack.push([temperatures[i], i]); //start by adding into the stack
  }
  return res; //return the answer
};
