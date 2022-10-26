//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }
  //returning this answer
  let highestSubstring = 0;
  //left index
  let left = 0;
  //right index
  let right = 1;
  //the current count each time
  let currentCount = 0;
  //keep count of the letters we have seen
  let letters = new Set();

  //two while loops
  while (left < s.length) {
    //adds the first letter
    letters.add(s[left]);
    //starts the increment at 1
    currentCount = 1;

    //checks everything to the right
    while (right < s.length) {
      if (letters.has(s[right])) {
        break;
      }
      letters.add(s[right]);
      currentCount++;
      right++;
      console.log(letters);
    }
    if (currentCount > highestSubstring) {
      highestSubstring = currentCount;
    }
    letters.clear();
    left++;
    right = left + 1;
    currentCount = 0;
  }
  return highestSubstring;
};
