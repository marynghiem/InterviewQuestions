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

//third try
//using pointers
var isPalindrome = function (x) {
  let answer = true;
  let newX = x.toString();
  let left = 0;
  let right = newX.length - 1;
  while (left < right) {
    if (newX[left] !== newX[right]) {
      answer = false;
    }
    left++;
    right--;
  }
  return answer;
};
//fouth attempt
var isPalindrome = function (x) {
  let letters = x.toString().split("");
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    if (letters[left] === letters[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
