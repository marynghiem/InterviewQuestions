//https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let hash = {};
  //"l": 0, 2
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]].push(i) : (hash[s[i]] = [i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]].length < 2) {
      return i;
    }
  }
  return -1;
};
