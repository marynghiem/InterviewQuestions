//https://leetcode.com/problems/deepest-leaves-sum/
var deepestLeavesSum = function (root) {
  //dfs function
  const dfs = (node, depth, result) => {
    //if the node is a leaf, then check if it is the current deepest one
    if (!node.left && !node.right) {
      //if it is the current deepest one
      if (depth > result.depth) {
        //rewrite over the object value
        result.depth = depth;
        result.total = node.val;
      } //if the depth is the same, add the two nodes
      else if (depth === result.depth) {
        result.total += node.val;
      }
      //return the object
      return result;
    }
    //going to the left
    if (node.left) {
      dfs(node.left, depth + 1, result);
    }
    //going to the right
    if (node.right) {
      dfs(node.right, depth + 1, result);
    }
    //return answer
    return result;
  };
  //call the function
  return dfs(root, 0, { depth: 0, total: 0 }).total;
};
