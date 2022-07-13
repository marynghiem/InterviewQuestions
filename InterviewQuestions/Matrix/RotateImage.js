//https://leetcode.com/problems/rotate-image/?fbclid=IwAR1h9KENj8K8EgI8NOu-EemWY2_PudZ3LarJQ8XjE3EksJ54fLQrJGGtF_U

var rotate = function (matrix) {
  matrix = matrix.reverse();
  for (let i in matrix) for (let j = 0; j < i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  return matrix;
};
