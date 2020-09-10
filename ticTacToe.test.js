const {
    initBoard
  } = require('./ticTacToe');
  
  describe('Game Board', () => {
    it('must be created first thing', () => {
      expect(initBoard()).toBe('Game Board Creation...\n | |\n-+-+-\n | |\n-+-+-\n | |\nBoard Created\nThe game will start with player X');
    });
  });
