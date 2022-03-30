//https://leetcode.com/problems/plus-one/submissions/

//WRONG ANSWER
//INCORRECT bc parseInt does not change big numbers
//slow runntime bc for loop
var plusOne = function (digits) {
  let num = parseInt(digits.join(""));
  num = num + 1;
  num = num.toString();
  const answer = [];
  for (let i = 0; i < num.length; i++) {
    answer.push(parseInt(num[i]));
  }
  return answer;
};

//correct answer
