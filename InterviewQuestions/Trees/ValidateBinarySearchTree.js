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
  return leftCheckFunc(root.left, root.left.left) && leftCheckFunc(root.right, root.right.left);
};

const rightCheckFunc = (root, right) => {
  if (root === null || right === null) {
    return true;
  }
  if (root.val >= right.val) {
    return false;
  }
  return rightCheckFunc(root.right, root.right.right) && leftCheckFunc(root.right, root.right.left);
};

//correct solution
var isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
};
// wrong common solution
const validBST = (root) => {
  if (!root) return true;
  return validBST(root.left) && validBST(root.right) && root.value < root.right.value && root.value > root.left.value;
};
