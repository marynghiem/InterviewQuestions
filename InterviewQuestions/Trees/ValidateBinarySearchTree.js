//incorrect solution, first attempt
var isValidBST = function (root) {
  if (root === null) {
    return true;
  }
  let leftCheck = leftCheckFunc(root, root.left);
  let rightCheck = rightCheckFunc(root, root.right);

  return leftCheck && rightCheck;
};

const leftCheckFunc = (root, left) => {
  if (root === null || left === null) {
    return true;
  }
  if (root.val <= left.val) {
    return false;
  }
  return leftCheckFunc(root.left, root.left.left);
};

const rightCheckFunc = (root, right) => {
  if (root === null || right === null) {
    return true;
  }
  if (root.val >= right.val) {
    return false;
  }
  return rightCheckFunc(root.right, root.right.right);
};
