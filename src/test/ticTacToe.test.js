const {
  initBoard,
  gameWinner,
  gamePlayed
} = require('../ticTacToe');

const {
  GAME_CREATION,
  X_WINS_VERTICAL_LINE,
} = require('./fixtures/gameScenarios');
  
describe('Game Board', () => {
  it('must be created first thing', () => {
    const startingPlayer = 'X';
    expect(initBoard(startingPlayer)).toEqual(GAME_CREATION);
  });
});

describe('When playing', () => {
  it('player X wins with a vertical line when all X\'s are in the same column', () => {
    const xPosition = [0,3,6];
    const oPosition = [4,8];
    expect(gameWinner(xPosition, oPosition)).toBe('PLAYER X WON!');
  });
  it('player O wins with a vertical line when all O\'s are in the same column', () => {
    const oPosition = [1,4,7];
    const xPosition = [0,9];
    expect(gameWinner(xPosition, oPosition)).toBe('PLAYER O WON!');
  });

  it('we show who started, the game board, and who the winner is', () => {
    const startingPlayer = 'X';
    const xPosition = [0,3,6];
    const oPosition = [4,8];
    expect(gamePlayed(startingPlayer, xPosition, oPosition)).toEqual(X_WINS_VERTICAL_LINE);
  });
});
