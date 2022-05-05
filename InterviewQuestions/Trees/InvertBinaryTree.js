//https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  const reverseNodes = (node) => {
    if (node === null) {
      //base case for recursive function
      return;
    }
    reverseNodes(node.left); //going all the way to the lowest branch
    reverseNodes(node.right);

    let temp = node.left; //switch left and right
    node.left = node.right;
    node.right = temp;
  };
  reverseNodes(root); //calling the function with the parameter root
  return root;
};
