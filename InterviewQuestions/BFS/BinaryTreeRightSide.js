//https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function (root) {
  if (!root) return []; //if there is no value in root, return empty array
  let answer = [];
  dfs(root, 0); //call function
  return answer; //return solution

  function dfs(node, h) {
    if (!node) return;
    answer[h] = node.val;
    dfs(node.left, h + 1);
    dfs(node.right, h + 1);
  }
};
