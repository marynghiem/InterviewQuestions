//https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function (head) {
  if (head === null) {
    //checking if the linked list is empty
    return null;
  }
  let odd = head; //assign the first number in a linked list as the head of odd
  let even = head.next; //assign the second one to be the head of even
  let evenHead = even; //the head of evem
  while (even !== null && even.next !== null) {
    odd.next = even.next; // assign the number after even, to odds's next
    odd = odd.next; //increment current
    even.next = odd.next; //assign the number after odd, to even's next
    even = even.next; // increment even
  }
  odd.next = evenHead; //at the end of odd, attach the head of even to odd.
  return head;
};
