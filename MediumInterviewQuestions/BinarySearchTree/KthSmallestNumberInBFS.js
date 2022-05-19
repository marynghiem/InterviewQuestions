//https://leetcode.com/problems/kth-smallest-element-in-a-bst/

//iterative solution
var kthSmallest = function (root, k) {
  let stack = []; //start with a stack
  while (true) {
    while (root !== null) {
      stack.push(root); //push the first thing in the BST
      root = root.left; //increment the root to the left because the left numbers are smaller bc it is a binary tree
    }
    root = stack.pop(); // set root equal to the value that you popped off
    if (--k == 0) {
      //decrementing the k value until it equals to 0 and then you can recieve the solution
      return root.val;
    }
    root = root.right; //increment the root now to the right
  }
};
