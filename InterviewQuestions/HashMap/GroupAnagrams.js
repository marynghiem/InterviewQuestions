//https://leetcode.com/problems/group-anagrams/submissions/

var groupAnagrams = function (strs) {
  let hash = {}; //created a hashmap
  strs.forEach((str) => {
    //looped through the strs
    let letters = str.split("").sort(); //split and sort the letters
    //ex : eat would be 'a,e,t'
    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
    //check if it is in the hash table
    //if it is, push the str as a value into the has
    //ex: 'a,e,t':['eat','tea', 'ate]
  });
  const keys = Object.keys(hash);
  //keys['a,e,t', 'a,n,t']
  const values = keys.map((v) => {
    return hash[v];
  });
  return values;
  //returns [['eat','tea'],['tan','nat']]
};

//2nd attempt

const groupAnagrams = (strs) => {
  //created a hash map
  let hash = {};
  //loop through the words
  for (let i = 0; i < strs.length; i++) {
    //then sort the letters of the word and split as well
    let letters = strs[i].split("").sort();
    //check in hash map if the split up words are already in there, if it is, then i will push another word into the array.
    //else create a new key value pair with the key being the letters and the word being the value
    hash[letters] ? hash[letters].push(strs[i]) : (hash[letters] = [strs[i]]);
  }
  //get all the keys from the hash
  const keys = Object.keys(hash);
  //get all the values and make it into an array
  const values = keys.map((v) => {
    return hash[v];
  });
  //return answer
  return values;
};
