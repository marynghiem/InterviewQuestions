//https://leetcode.com/problems/fizz-buzz/submissions/

var fizzBuzz = function (n) {
  let answer = [];
  let num = 1;
  while (num <= n) {
    if (num % 15 === 0) {
      answer.push("FizzBuzz");
    } else if (num % 3 === 0) {
      answer.push("Fizz");
    } else if (num % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(`${num}`);
    }
    num++;
  }
  return answer;
};
