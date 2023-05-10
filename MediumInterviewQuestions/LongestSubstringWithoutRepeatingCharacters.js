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

//solution to longest substring
//sliding window
function lengthOfLongestSubstring(s) {
  //set that shows the numbers that I have seen
  let seen = new Set();
  //return the answer
  let longest = 0;
  //left
  let l = 0;
  //for loop for right
  for (let r = 0; r < s.length; r++) {
    //if the set has the letter, delete and increment left
    while (seen.has(s[r])) {
      seen.delete(s[l]); //delete the left side until seen does not have s[r] anymore
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, seen.size);
  }
  return longest;
}
//showing what is in the set
/*
Set(1) { 'a' }
Set(2) { 'a', 'b' }
Set(3) { 'a', 'b', 'c' }
Set(2) { 'b', 'c' }
Set(3) { 'b', 'c', 'a' }
Set(2) { 'c', 'a' }
Set(3) { 'c', 'a', 'b' }
Set(2) { 'a', 'b' }
Set(3) { 'a', 'b', 'c' }
Set(2) { 'b', 'c' }
Set(1) { 'c' }
Set(2) { 'c', 'b' }
Set(1) { 'b' }
Set(0) {}
Set(1) { 'b' }

*/

//attempt at sliding window
const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let longest = 0;
  let seen = new Set();
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    longest = Math.max(longest, seen.size);
  }
  return longest;
};

var lengthOfLongestSubstring = function (s) {
  //keep track of only unique numbers
  let seen = new Set();
  //keeps track of only the biggest
  let biggest = 0;
  //keeps track of left
  let left = 0;
  //loop through all numbers in s
  for (let i = 0; i < s.length; i++) {
    //if seen has that s[i], keep deleting until
    while (seen.has(s[i])) {
      seen.delete(s[left]);
      left++;
    }
    //add too seen set
    seen.add(s[i]);
    //keeping track of the biggest
    biggest = Math.max(biggest, seen.size);
  }
  return biggest;
};
