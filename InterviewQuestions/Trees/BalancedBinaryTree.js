//https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {
  return getHeight(root) !== -1;
  //return true or false depending if it is height balanced

  //function to get height
  function getHeight(root) {
    //base case if there is no root then return 0
    if (!root) {
      return 0;
    }
    //recursion checking left and right
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    //return -1 (false if left is -1 or right is or if the depth difference is greater than 1)
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    console.log(right);
    //go all the way to the end and then find the height
    return 1 + Math.max(left, right);
  }
};
