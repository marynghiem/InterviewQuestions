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
