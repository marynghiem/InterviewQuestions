//https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function (n) {
  const solution = [];
  const generateCombo = (leftPCount, rightPCount, partial) => {
    if (leftPCount > rightPCount) {
      return;
    }
    if (!leftPCount && !rightPCount) {
      solution.push(partial);
    }
    if (leftPCount > 0) {
      generateCombo(leftPCount - 1, rightPCount, partial + "(");
    }
    if (rightPCount > 0) {
      generateCombo(leftPCount, rightPCount - 1, partial + ")");
    }
  };
  generateCombo(n, n, "");
  return solution;
};

//attempted the problem again and I have a better understanding of the problem:
var generateParenthesis = function (n) {
  const solution = []; //stores the solution

  //function to generate the combinations
  const generateCombo = (leftPCount, rightPCount, partial) => {
    //if the left parentheses count is greater, exit
    if (leftPCount > rightPCount) {
      return;
    }
    //when there is no left and right count anymore, push the solution
    if (!leftPCount && !rightPCount) {
      solution.push(partial);
    }
    //recursion
    if (leftPCount > 0) {
      generateCombo(leftPCount - 1, rightPCount, partial + "(");
    }
    if (rightPCount > 0) {
      generateCombo(leftPCount, rightPCount - 1, partial + ")");
    }
  };
  //calling the function
  generateCombo(n, n, "");
  //return the answer
  return solution;
};
