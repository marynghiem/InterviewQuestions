//

var isIsomorphic = function (s, t) {
  let sLetters = {};
  let tLetters = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in sLetters && t[i] !== sLetters[s[i]]) {
      return false;
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
