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
//INCORRECT because failed to account for [9,9]
var plusOne = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  } else {
    for (let i = 2; i < digits.length; i++) {
      if (digits[digits.length - i] === 9) {
        digits[digits.length - i] = 0;
      } else {
        digits[digits.length - i] = digits[digits.length - i] + 1;
        break;
      }
    }
  }
  return digits;
};

//correct answer
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //loop through backwards
    if (digits[i] < 9) {
      //if the number is not 9, add 1
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0; //else if num is 9, make it zero
    }
  }
  digits.unshift(1);
  return digits;
};
