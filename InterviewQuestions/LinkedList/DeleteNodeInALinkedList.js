//https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function (node) {
  node.val = node.next.val; //takes the val of the next and assigned it to current
  node.next = node.next.next; //reassigns the next to skip the next
};
