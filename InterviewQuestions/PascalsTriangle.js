//https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {
  if (numRows.length === 0) {
    return [];
  }
  if (numRows.length === 1) {
    return [[1]];
  }
  let answer = [[1]];

  while (answer.length < numRows) {
    let newRow = [1];
    let previous = answer[answer.length - 1];
    if (answer.length >= 2) {
      let firstPointer = 0;
      let secondPointer = 1;
      for (let i = 0; i < previous.length - 1; i++) {
        let sum = previous[firstPointer] + previous[secondPointer];
        newRow.push(sum);
        firstPointer++;
        secondPointer++;
      }
    }
    newRow.push(1);
    answer.push(newRow);
  }
  return answer;
};
