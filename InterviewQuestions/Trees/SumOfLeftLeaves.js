//https://leetcode.com/problems/sum-of-left-leaves/submissions/928122165/

const sumOfLeftLeaves = (x, isLeft) => {
  if (!x) return 0;
  if (!x.left && !x.right && isLeft) return x.val;

  return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false);
};
