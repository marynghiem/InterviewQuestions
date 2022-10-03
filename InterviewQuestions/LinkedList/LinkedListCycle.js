//https://leetcode.com/problems/linked-list-cycle/

//tried on my own, without looking at the solution but jo says i wouldve failed the interview bc it changes the input
//use a hashmap if you dont want to change input
var hasCycle = function (head) {
  while (head) {
    if (head.val == "checked") {
      return true;
    }
    head.val = "checked";
    head = head.next;
  }
  return false;
};

//correct solution with slow and fast method. need to memorize, try again later
var hasCycle = function (head) {
  if (head == null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

//third attempt
//fastest attempt
// did 90% of this on my own
var hasCycle = function (head) {
  if (head == null) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  while (slow !== null) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
