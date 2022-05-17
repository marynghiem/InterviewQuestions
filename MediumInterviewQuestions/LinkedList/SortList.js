//https://leetcode.com/problems/sort-list/submissions/

//FirstSolution
var sortList = function (head) {
  let nums = [];
  let current = head;
  while (current) {
    nums.push(current.val);
    current = current.next;
  }
  nums.sort((a, b) => a - b);
  console.log(nums);
  let newList = new ListNode(0);
  let result = newList;

  for (let i = 0; i < nums.length; i++) {
    newList.next = new ListNode(nums[i]);
    newList = newList.next;
  }
  return result.next;
};
