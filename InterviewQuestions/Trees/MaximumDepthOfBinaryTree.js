//https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
