//https://leetcode.com/problems/self-dividing-numbers/

//found solution myself but need a more efficient one
var selfDividingNumbers = function (left, right) {
  let answer = [];
  let currentNum = left;
  while (currentNum <= right) {
    if (currentNum < 10) {
      answer.push(currentNum);
      currentNum++;
    }
    let copyCurrentNum = currentNum;
    while (copyCurrentNum !== 0) {
      let divisor = copyCurrentNum % 10; //14 % 10 = 4
      copyCurrentNum = Math.floor(copyCurrentNum / 10); //1
      if (currentNum % divisor !== 0) {
        currentNum++;
        break;
      }
      if (currentNum % divisor === 0 && copyCurrentNum === 0) {
        answer.push(currentNum);
        currentNum++;
        break;
      }
    }
  }
  return answer;
};
