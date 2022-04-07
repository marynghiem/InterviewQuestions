//https://leetcode.com/problems/roman-to-integer/submissions/

//brute force
var romanToInt = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "M") {
      answer = answer + 1000;
    } else if (s[i] === "D") {
      answer = answer + 500;
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        answer = answer + 400;
        i = i + 1;
      } else if (s[i + 1] === "M") {
        answer = answer + 900;
        i = i + 1;
      } else {
        answer = answer + 100;
      }
    } else if (s[i] === "L") {
      answer = answer + 50;
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        answer = answer + 40;
        i = i + 1;
      } else if (s[i + 1] === "C") {
        answer = answer + 90;
        i = i + 1;
      } else {
        answer = answer + 10;
      }
    } else if (s[i] === "V") {
      answer = answer + 5;
    } else if (s[i] === "I") {
      if (s[i + 1] === "V") {
        answer = answer + 4;
        i = i + 1;
      } else if (s[i + 1] === "X") {
        answer = answer + 9;
        i = i + 1;
      } else {
        answer = answer + 1;
      }
    }
  }
  return answer;
};
