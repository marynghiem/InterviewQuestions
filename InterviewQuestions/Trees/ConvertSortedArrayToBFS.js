//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/925105751/

//correct solution
var sortedArrayToBST = function (nums) {
  //base case
  if (nums == null || !nums.length) {
    //null is at the end of the trees
    return null;
  }
  //getting the middle
  let mid = Math.floor(nums.length / 2);
  //starting a new node making the middle the node
  const node = new TreeNode(nums[mid]);
  //calls the function again and makes the first half as a parameter
  node.left = sortedArrayToBST(nums.slice(0, mid));
  //calls the function again and makes the second half the parameter of the function
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  //returning the first node for the answer
  return node;
};
//
