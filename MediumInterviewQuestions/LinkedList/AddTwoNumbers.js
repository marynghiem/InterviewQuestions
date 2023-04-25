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

//second attempt is incorrect because i forgot about the if statement at the end for edge case.
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum > 9 ? (sum = 1) : (sum = 0);
  }
  //if (sum) {
  //    current.next = new ListNode(sum); //if there is leftover in the sum
  // }
  return result.next;
};

var addTwoNumbers = function (l1, l2) {
  //initialize sum
  let sum = 0;
  //create a new listNode
  let current = new ListNode(0);
  //initialize answer so that I can return it
  let answer = current;
  //create a while loop while l1 or l2 still have nodes
  while (l1 || l2) {
    //if there is a node in list 1 then add to the sum and go to the next list node
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    //same thing for list 2
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    //make the next list node be the sum mod 10
    current.next = new ListNode(sum % 10);
    // go to the next current
    current = current.next;
    //set the sum to 1 or 0 depending if sum is greater than 9 or not
    sum = sum > 9 ? 1 : 0;
  }
  //if there is a sum, then make the next list node equal to 1
  if (sum) {
    current.next = new ListNode(sum);
  }
  //return answer
  return answer.next;
};
