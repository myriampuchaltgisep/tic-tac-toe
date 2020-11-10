const EMPTY_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const VERTICAL_WINNING_SCENARIOS = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const HORIZONTAL_WINNING_SCENARIOS = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

const GAME_CREATION = 'Game Board Creation...';

const GAME_STARTS = 'Board Created, let the game start!';

const GAME_CREATION_WITH_EMPTY_BOARD = `Game Board Creation...
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created, let the game start!`;

const X_WINS_VERTICAL_LINE = `Player X:
X| | 
-+-+-
X|O| 
-+-+-
X| |O
PLAYER X WON!`;

module.exports = {
  GAME_CREATION,
  GAME_CREATION_WITH_EMPTY_BOARD,
  GAME_STARTS,
  X_WINS_VERTICAL_LINE,
  EMPTY_BOARD,
  VERTICAL_WINNING_SCENARIOS,
  HORIZONTAL_WINNING_SCENARIOS,
};
