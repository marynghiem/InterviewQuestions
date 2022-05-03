//https://leetcode.com/problems/isomorphic-strings/submissions/

var isIsomorphic = function (s, t) {
  let sLetters = {}; //made a hashmap for s
  let tLetters = {}; //made a hashmap for t
  for (let i = 0; i < s.length; i++) {
    if (s[i] in sLetters && t[i] !== sLetters[s[i]]) {
      //if the letter is in the hashmap and t value is not matching in the hash map
      return false; //return false
    } else {
      sLetters[s[i]] = t[i];
    }
    if (t[i] in tLetters && s[i] !== tLetters[t[i]]) {
      return false;
    } else {
      tLetters[t[i]] = s[i];
    }
  }
  return true;
};
