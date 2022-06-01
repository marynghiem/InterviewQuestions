//https://leetcode.com/problems/guess-number-higher-or-lower/

var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (guess(middle) == 0) {
      return middle;
    } else if (guess(middle) < 0) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
