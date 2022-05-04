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
