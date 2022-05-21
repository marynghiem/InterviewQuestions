//https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function (root) {
  let result = [];
  helper(root, result);
  return result;
};

const helper = (root, res) => {
  if (root !== null) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
};
