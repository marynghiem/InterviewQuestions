//https://leetcode.com/problems/longest-common-prefix/submissions/

//Correct answer, need to remember and try by myself
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // loop through all characters of the very first string.

    for (let j = 1; j < strs.length; j++) {
      // loop through all other strings in the array
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};

//my solution (needed help, so referred to previous solution)

var longestCommonPrefix = function (strs) {
  let answer = "";
  if (strs === null || strs.length === 0) {
    return answer;
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return answer;
      }
    }
    answer = answer + strs[0][i];
  }
  return answer;
};
