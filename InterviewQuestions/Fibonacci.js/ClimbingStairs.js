//https://leetcode.com/problems/climbing-stairs/submissions/

//need to try again later and recognize when to do fibbonacci
var climbStairs = function (n) {
  let first = 1;
  let second = 2;
  if (n === 0 || n === 1) {
    return first;
  }
  for (let i = 3; i <= n; i++) {
    let total = first + second;
    first = second;
    second = total;
  }
  return second;
};
