//https://leetcode.com/problems/valid-anagram/

//incorrect solution bc i assumed that if the key value pairs were even, it would be an anagram
//this prints out { a: 6, n: 2, g: 2, r: 2, m: 2 }
var isAnagram = function (s, t) {
  let letters = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 0;
    }
    letters[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (!letters[t[i]]) {
      letters[t[i]] = 0;
    }
    letters[t[i]]++;
  }

  console.log(letters);
};

//correct solution
var isAnagram = function (s, t) {
  let letters = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 0;
    }
    letters[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (!letters[t[i]]) {
      return false;
    }
    letters[t[i]]--;
  }
  return true;
};
