//https://leetcode.com/problems/game-of-life/

var gameOfLife = function (board) {
  const copyOfBoard = board.map((arr) => [...arr]); //creating a copy of the board
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  const isAvailable = (row, col) => {
    return row >= 0 && row <= board.length - 1 && col >= 0 && col <= board[0].length - 1;
  }; //some places dont have a left, right, top or bottom

  const countNeighbor = (row, col) => {
    let liveCell = 0;
    for (let i = 0; i < directions.length; i++) {
      const newRow = row + directions[i][0];
      const newCol = col + directions[i][1];
      if (isAvailable(newRow, newCol)) {
        liveCell += copyOfBoard[newRow][newCol];
      }
    }
    return liveCell; //returning the amount of live cells
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const cell = copyOfBoard[row][col];
      const isLive = !!cell; //checks the truth value of this  cell, if 0 it is false, if 1 it is true
      const liveCell = countNeighbor(row, col);
      if (isLive) {
        //Any live cell with two or three live neighbors lives on to the next generation.

        if (liveCell < 2 || liveCell > 3) {
          //Any live cell with more than three live neighbors dies, as if by over-population.
          //Any live cell with fewer than two live neighbors dies as if caused by under-population.
          board[row][col] = 0;
        }
      } else {
        //Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if (liveCell === 3) {
          board[row][col] = 1;
        }
      }
    }
  }
};
