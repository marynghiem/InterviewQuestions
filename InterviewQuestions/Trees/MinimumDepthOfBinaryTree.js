//https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

var minDepth = function (root) {
  if (root === null) return 0;

  //found the length for left
  const left = minDepth(root.left) + 1;
  //found teh length for right
  const right = minDepth(root.right) + 1;

  //at the end, if there is no left to begin with, then return right and vice versa
  if (!root.left) return right;
  if (!root.right) return left;

  //return the minimum between the two
  return Math.min(left, right);
};

//attempt 1
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let left = minDepth(root.left) + 1;
  let right = minDepth(root.right) + 1;

  if (!root.left) {
    return right;
  }
  if (!root.right) {
    return left;
  }
  return Math.min(left, right);
};
