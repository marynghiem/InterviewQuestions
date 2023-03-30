//https://leetcode.com/problems/binary-tree-preorder-traversal/description/
var preorderTraversal = function (root) {
  let answer = [];
  const traverse = (node) => {
    if (!node) {
      return;
    } else {
      answer.push(node.val);
    }
    traverse(node.left);
    traverse(node.right);
  };
  //forgot to call on the function
  traverse(root);
  return answer;
};
