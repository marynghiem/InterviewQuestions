//https://leetcode.com/problems/symmetric-tree/description/

var isSymmetric = function (root) {
  //to check in the beginning if there is a root
  if (!root) {
    return true;
  }
  //call the function and put the left and right as the children
  return dfs(root.left, root.right);
};
//depth first search
const dfs = (leftNode, rightNode) => {
  //if the left and right are both empty, then return true for now
  if (!leftNode && !rightNode) {
    return true;
  }
  //fail conditions which are: if theres are left but no right, theres a right but no left, and the values arent the same
  if ((leftNode && !rightNode) || (!leftNode && rightNode) || leftNode.val !== rightNode.val) {
    return false;
  }
  //recursion
  return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
};

//completed after second attempt 
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return depth(root.left, root.right);
};

const depth = (leftNode, rightNode) => {
  if (!leftNode && !rightNode) {
    return true;
  }
  if ((!leftNode && rightNode) || (!rightNode && leftNode) || leftNode.val !== rightNode.val) {
    return false;
  }

  return depth(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
};
