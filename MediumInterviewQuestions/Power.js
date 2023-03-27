//failed because it exceeded the time limit
var myPow = function (x, n) {
  let answer = 1;
  if (n >= 1) {
    for (let i = 0; i < n; i++) {
      answer = answer * x;
    }
  } else if (n === 0) {
    return answer;
  } else {
    let positiveN = Math.abs(n);
    for (let i = 0; i < positiveN; i++) {
      answer = answer * x;
    }
    return 1 / answer;
  }
  return answer;
};

//simplified but still time consuming
var myPow = function (x, n) {
  let answer = 1;
  let positiveN = Math.abs(n);
  for (let i = 0; i < positiveN; i++) {
    answer = answer * x;
  }
  return n >= 0 ? answer : 1 / answer;
};

//recursion to solve problem

var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  //if the power is even then call on the function and multiply the two numbers
  //got it wrong bc i forgot about my knowledge on powers
  let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};
