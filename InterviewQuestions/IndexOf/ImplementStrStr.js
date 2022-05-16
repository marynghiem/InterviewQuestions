//https://leetcode.com/problems/implement-strstr/
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  return haystack.indexOf(needle);
  //returns the first index at which a given element can be found in the array, or -1 if it is not present
};
