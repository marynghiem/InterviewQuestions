//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

//my first attempt
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let leftPointer = 0;
    let rightPointer = words[i].length - 1;
    while (leftPointer <= rightPointer) {
      if (words[i][leftPointer] !== words[i][rightPointer]) {
        break;
      }
      if (
        words[i][leftPointer] === words[i][rightPointer] &&
        (leftPointer === rightPointer || leftPointer + 1 === rightPointer)
      ) {
        return words[i];
      } else {
        leftPointer++;
        rightPointer--;
      }
    }
  }
  return "";
};
