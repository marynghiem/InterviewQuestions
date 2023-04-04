//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

var arrayStringsAreEqual = function (word1, word2) {
  let first = word1.join(""),
    second = word2.join("");

  if (first === second) {
    return true;
  } else {
    return false;
  }
};
