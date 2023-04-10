/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 

Constraints:

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.
*/

//comeback later
var balancedStringSplit = function (s) {
  //the count of balanced strings
  let totalBalanced = 0;
  //indexes
  let left = 0;
  let right = 0;
  //to check if they are balanced
  let letterLcount = 0;
  let letterRcount = 0;
  //while loop
  while (right < s.length) {
    //for the count of l or r
    if (s[right] === "L") {
      letterLcount++;
    } else {
      letterRcount++;
    }
    //increment after count
    right++;
    //if l and r count are equal, increase the total balanced
    if (letterLcount === letterRcount) {
      totalBalanced++;
      //left is not really needed
      left = right;
      letterLcount = 0;
      letterRcount = 0;
    }
  }
  return totalBalanced;
};
