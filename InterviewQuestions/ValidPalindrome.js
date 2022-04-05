//https://leetcode.com/problems/valid-palindrome/submissions/

//answer by myself but had to look up .replace
var isPalindrome = function (s) {
  let newS = s;
  newS = newS.replace(/[^0-9a-zA-Z]/g, "");
  newS = newS.toLowerCase();
  let reversed = newS.split("").reverse().join("");
  if (newS === reversed) {
    return true;
  } else {
    return false;
  }
};
