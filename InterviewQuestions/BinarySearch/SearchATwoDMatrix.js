//https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let first = 0;
    let last = matrix[i].length - 1;
    if (target >= matrix[i][first] && target <= matrix[i][last]) {
      let left = 0;
      let right = matrix[i].length;
      while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        console.log(mid);
        if (target < matrix[i][mid]) {
          right = mid;
        } else if (target == matrix[i][mid]) {
          return true;
        } else {
          left = left + 1;
        }
      }
      return false;
    }
  }
  return false;
};
