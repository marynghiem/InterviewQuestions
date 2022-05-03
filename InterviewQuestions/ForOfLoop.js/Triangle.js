//https://leetcode.com/problems/triangle/submissions/

var minimumTotal = function (triangle) {
  const table = [];
  for (let row of triangle) {
    table.push(new Array(row.length).fill(0)); //creating a triangle and filling it with 0;
  }
  table[0] = triangle[0]; //copy the first value of the triangle
  for (let row = 1; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      //if we are at the first col or last col
      if (col === 0) {
        table[row][col] = table[row - 1][col] + triangle[row][col];
        //add tables's first total value at previous row to triangles first value at current row
      } else if (col === table[row].length - 1) {
        table[row][col] = table[row - 1][table[row - 1].length - 1] + triangle[row][col];
        //same thing with the last
      } else {
        table[row][col] = Math.min(table[row - 1][col], table[row - 1][col - 1]) + triangle[row][col];
        //if its in the center, find the minimum of the previous row of table and add that with the triangles current row value
      }
    }
  }
  return Math.min(...table[table.length - 1]);
  //find the min in the last array and return that
};
