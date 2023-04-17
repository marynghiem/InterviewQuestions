var sortPeople = function (names, heights) {
  let output = [];

  // let's concatenate the arrays to sort later
  for (let i in heights) {
    output.push({ name: names[i], height: heights[i] });
  }

  return output
    .sort((a, b) => b.height - a.height) // sort
    .map((i) => i.name); // cut needed
};

var sortPeople = function (names, heights) {
  //create an answer array
  let answer = [];
  //loop through i
  for (let i in heights) {
    //add an object into the answer array
    answer.push({ name: names[i], height: heights[i] });
    /*example:
        [{ name: 'Mary', height: 180 }, { name: 'John', height: 165 },{ name: 'Emma', height: 170 }]*/
  }
  //sort and then map only names
  return answer.sort((a, b) => b.height - a.height).map((i) => i.name);
};
