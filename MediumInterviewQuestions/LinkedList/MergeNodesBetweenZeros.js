//https://leetcode.com/problems/merge-nodes-in-between-zeros/

//first attempt without looking at solution
var mergeNodes = function (head) {
  let newList = new ListNode(0);
  let dummy = newList;
  let addUp = false;
  let sum = 0;
  while (head) {
    if (head.val == 0 && addUp === false) {
      sum = 0;
      addUp = true;
      head = head.next;
    } else if (head.val == 0 && addUp === true) {
      newList.next = new ListNode(sum);
      newList = newList.next;
      head = head.next;
      sum = 0;
    } else {
      sum = sum + head.val;
      head = head.next;
    }
  }
  return dummy.next;
};
