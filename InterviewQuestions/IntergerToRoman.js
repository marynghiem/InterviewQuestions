//https://leetcode.com/problems/integer-to-roman/submissions/

//did this by myself, need to do more efficient solution
var intToRoman = function (num) {
  let romanAnswer = [];
  while (num > 0) {
    if (num - 1000 >= 0) {
      romanAnswer.push("M");
      num = num - 1000;
    } else if (num - 900 >= 0) {
      romanAnswer.push("CM");
      num = num - 900;
    } else if (num - 500 >= 0) {
      romanAnswer.push("D");
      num = num - 500;
    } else if (num - 400 >= 0) {
      romanAnswer.push("CD");
      num = num - 400;
    } else if (num - 100 >= 0) {
      romanAnswer.push("C");
      num = num - 100;
    } else if (num - 90 >= 0) {
      romanAnswer.push("XC");
      num = num - 90;
    } else if (num - 50 >= 0) {
      romanAnswer.push("L");
      num = num - 50;
    } else if (num - 40 >= 0) {
      romanAnswer.push("XL");
      num = num - 40;
    } else if (num - 10 >= 0) {
      romanAnswer.push("X");
      num = num - 10;
    } else if (num - 9 >= 0) {
      romanAnswer.push("IX");
      num = num - 9;
    } else if (num - 5 >= 0) {
      romanAnswer.push("V");
      num = num - 5;
    } else if (num - 4 >= 0) {
      romanAnswer.push("IV");
      num = num - 4;
    } else if (num - 1 >= 0) {
      romanAnswer.push("I");
      num = num - 1;
    }
  }
  return romanAnswer.join("");
};
