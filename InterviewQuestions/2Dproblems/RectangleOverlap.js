//https://leetcode.com/problems/rectangle-overlap/submissions/

var isRectangleOverlap = function (rec1, rec2) {
  if (rec1[0] < rec2[2] && rec1[2] > rec2[0] && rec1[1] < rec2[3] && rec1[3] > rec2[1]) {
    return true;
  } else {
    return false;
  }
};
//rec1[0] < rec2[2] made it so that the left most x was smaller the right most x
// rec1[2] > rec2[0] if rectangle 1 x is bigger than rectangle 2 x, then it overlapped width wise
// rec1[1] < rec2[3] made it so the bottom most y was less than the top most y
// rec1[3] > rec2[1] if rectangle 1 y is taller than rectangle 2 y, then it overlapped height wise
