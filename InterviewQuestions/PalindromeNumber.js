//https://leetcode.com/problems/palindrome-number/

//first try (turning integer into string)
var isPalindrome = function (x) {
  let newNum = x.toString();
  newNum = newNum.split("");
  console.log(newNum);
  newNum = newNum.reverse();
  console.log(newNum);
  newNum = newNum.join("");
  console.log(newNum);
  if (x == newNum) {
    return true;
  } else {
    return false;
  }
};

// simplified:
var isPalindrome = function (x) {
  let newNum = x.toString().split("").reverse().join("");
  console.log(newNum);
  if (x == newNum) {
    return true;
  } else {
    return false;
  }
};

//Try and solve without changing into a string
//Try and solve without searching up methods
