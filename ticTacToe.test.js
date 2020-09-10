const {
    initGameBoard
  } = require('./ticTacToe');
  
  describe('Game Board', () => {
    it('must be created first thing', () => {
      expect(initGameBoard()).toBe(' | |\n-+-+-\n | |\n-+-+-\n | |');
    });
  });
