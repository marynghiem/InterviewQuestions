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

var isIsomorphic = function (s, t) {
  //hash map for s letters and t letters
  let sLetters = {};
  let tLetters = {};
  //loop through all the s letters
  for (let i = 0; i < s.length; i++) {
    //if there is that letter in s, but t[i] is not equal to the value in the hash, return false
    if (s[i] in sLetters && t[i] !== sLetters[s[i]]) {
      return false;
    } else {
      //otherwise add in hash
      sLetters[s[i]] = t[i];
    }
    //same for t hash
    if (t[i] in tLetters && s[i] !== tLetters[t[i]]) {
      return false;
    } else {
      tLetters[t[i]] = s[i];
    }
  }
  //return true if it makes it through without returning false
  return true;
};
