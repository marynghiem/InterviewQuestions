//https://leetcode.com/problems/add-two-numbers/submissions/

//first attempt with help, try again later
var addTwoNumbers = function (l1, l2) {
  let sum = 0; //keep track how much is added up
  let current = new ListNode(0); //creating a new linkedlist
  let result = current; //return the head later
  while (l1 || l2) {
    if (l1) {
      sum += l1.val; //adding the val of the first num
      l1 = l1.next; //increment l1
    }
    if (l2) {
      sum += l2.val; //adding the val of the num in the second linked list
      l2 = l2.next; //increment l2
    }
    current.next = new ListNode(sum % 10); // assigning the current.next
    current = current.next; //increment current
    sum = sum > 9 ? 1 : 0; //if sum is greater than 9, the carryover is 1;
  }
  if (sum) {
    current.next = new ListNode(sum); //if there is leftover in the sum
  }
  return result.next;
};
