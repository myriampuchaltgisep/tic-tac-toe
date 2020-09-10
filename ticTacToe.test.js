const {
    initBoard,
    gameWinner,
    gamePlayed
  } = require('./ticTacToe');
  
  describe('Game Board', () => {
    it('must be created first thing', () => {
        const startingPlayer = 'X';
        expect(initBoard(startingPlayer)).toBe(`Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \nBoard Created\nThe game will start with player ${startingPlayer}`);
    });
  });


describe('When playing', () => {
    it('player X wins with a vertical line when all X\'s are in the same column', () => {
        const xPosition = [0,3,6];
        const oPosition = [4,8];
        expect(gameWinner(xPosition, oPosition)).toBe('PLAYER X WON!');
      });

    it('we show who started, the game board, and who the winner is', () => {
        const startingPlayer = 'X';
        const xPosition = [0,3,6];
        const oPosition = [4,8];
        expect(gamePlayed(startingPlayer, xPosition, oPosition)).toBe(`Player ${startingPlayer}:\nX| | \n-+-+-\nX|O| \n-+-+-\nX| |O\nPLAYER X WON!`);
      });
  });
