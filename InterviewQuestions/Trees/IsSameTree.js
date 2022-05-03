//https://leetcode.com/problems/same-tree/submissions/

var isSameTree = function (p, q) {
  if (p === null) {
    return q === null;
  }
  if (q === null || p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
