//https://leetcode.com/problems/reverse-string/submissions/

var reverseString = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    let temp = s[rightIndex];
    s[rightIndex] = s[leftIndex];
    s[leftIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return s;
};
