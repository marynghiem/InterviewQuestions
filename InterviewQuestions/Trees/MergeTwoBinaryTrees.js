/*
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

 

Example 1:


Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
Example 2:

Input: root1 = [1], root2 = [1,2]
Output: [2,2]
 
*/

var mergeTrees = function (root1, root2) {
  //if there is no node at root1, then return value of root2
  if (!t1) {
    return t2;
  }
  //if there is no node at root2, then return value of root 1
  if (!t2) {
    return t1;
  }
  //add value of both the nodes
  t1.val += t2.val;
  //pass in the two roots that are at the same spot recursively
  t1.left = mergeTrees(t1.left, t2.left);
  //pass in the two root recursively
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};
