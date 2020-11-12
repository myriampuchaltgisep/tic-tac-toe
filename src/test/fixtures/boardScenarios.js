const EMPTY_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const VERTICAL_WINNING_SCENARIOS = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const HORIZONTAL_WINNING_SCENARIOS = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const DIAGONAL_WINNING_SCENARIOS = [[0, 4, 8], [2, 4, 6]];

const WINNING_COMBINATIONS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GAME_CREATION = 'Game Board Creation...';

const GAME_STARTS = 'Board Created, let the game start!';

const GAME_CREATION_WITH_EMPTY_BOARD = `Game Board Creation...
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created, let the game start!`;

const X_WINNER = 'Game Ended! X is the winner!';
const O_WINNER = 'Game Ended! O is the winner!';
const DRAW = 'The game ended with a draw!';

module.exports = {
  GAME_CREATION,
  GAME_CREATION_WITH_EMPTY_BOARD,
  GAME_STARTS,
  EMPTY_BOARD,
  VERTICAL_WINNING_SCENARIOS,
  HORIZONTAL_WINNING_SCENARIOS,
  DIAGONAL_WINNING_SCENARIOS,
  WINNING_COMBINATIONS,
  X_WINNER,
  O_WINNER,
  DRAW,
};
