/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1

*/

var addDigits = function (num) {
  let newNum = num;

  while (newNum >= 10) {
    let addingNum = newNum;
    let sum = 0;
    while (addingNum > 0) {
      sum += addingNum % 10;
      addingNum = Math.floor(addingNum / 10);
    }
    console.log(sum);
    newNum = sum;
  }
  return newNum;
};
