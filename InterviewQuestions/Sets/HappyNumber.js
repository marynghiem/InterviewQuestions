//https://leetcode.com/problems/happy-number/submissions/

var isHappy = function (n) {
  let currentNum = n;
  let newNum = 0;
  let previousNum = new Set();
  while (currentNum !== 1) {
    if (previousNum.has(currentNum)) {
      return false;
    }
    previousNum.add(currentNum);
    while (currentNum > 0) {
      newNum = newNum + (currentNum % 10) ** 2;
      currentNum = Math.floor(currentNum / 10);
    }
    currentNum = newNum;
    newNum = 0;
  }
  return true;
};

//attempted a second time and made a mistake with typing out Set and wrote the wrong condition

var isHappy = function (n) {
  let newNum = 0;
  let currentNum = n;
  let previousNum = new Set();
  while (currentNum !== 1) {
    if (previousNum.has(currentNum)) {
      return false;
    }
    previousNum.add(currentNum);
    while (currentNum > 0) {
      newNum = newNum + (currentNum % 10) ** 2;
      currentNum = Math.floor(currentNum / 10);
    }
    currentNum = newNum;
    newNum = 0;
  }
  return true;
};
