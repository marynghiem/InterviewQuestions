//https://leetcode.com/problems/longest-common-subsequence/

var longestCommonSubsequence = function (text1, text2) {
  const table = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1).fill(""));
  //created a table and filled it with quotes

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        //if the letters are the same
        table[i][j] = table[i - 1][j - 1] + text1[i - 1]; //concat the diagional value with the current same value;
      } else {
        let aboveChar = table[i - 1][j]; //top value above current
        let leftChar = table[i][j - 1]; //left value next to current

        table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar; //if the left length is longer, copy that one.
        // otherwise copy the other one
      }
    }
  }
  return table[table.length - 1][table[0].length - 1].length; //return the last item in the row/column's length
};
