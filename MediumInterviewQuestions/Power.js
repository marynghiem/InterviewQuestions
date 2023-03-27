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
