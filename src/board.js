const {
  EMPTY_BOARD,
  GAME_CREATION,
  GAME_STARTS,
  WINNING_COMBINATIONS,
} = require('./test/fixtures/boardScenarios');

class Board {
  constructor() {
    this.cells = [...EMPTY_BOARD];
    this.winner = '';
    this.turnsPlayed = 0;
  }

  printBoard() {
    const board = `${this.cells[0]}|${this.cells[1]}|${this.cells[2]}\n-+-+-\n${this.cells[3]}|${this.cells[4]}|${this.cells[5]}\n-+-+-\n${this.cells[6]}|${this.cells[7]}|${this.cells[8]}\n`;
    this.decideWinner();

    if (this.winner || this.turnsPlayed === 9) {
      return `${board} ${this.announceWinner()}`;
    }

    return board;
  }

  startGame() {
    console.log(`${GAME_CREATION}\n${this.printBoard()}${GAME_STARTS}`);
  }

  playersPins() {
    const positions = {
      X: [],
      O: [],
    };

    this.cells.map((cell, index) => {
      if (cell === 'X') {
        positions.X.push(index);
      }
      if (cell === 'O') {
        positions.O.push(index);
      }
    });

    return positions;
  }

  decideWinner() {
    WINNING_COMBINATIONS.forEach((winningCombination) => {
      Object.entries(this.playersPins()).forEach((player) => {
        const playerPin = player[0];
        const pinPositions = player[1];
        if (winningCombination.every((value) => pinPositions.includes(value))) {
          this.winner = playerPin;
        }
      });
    });
  }

  announceWinner() {
    if (!this.winner && this.turnsPlayed === 9) {
      return 'The game ended with a draw!';
    }
    return `Game Ended! ${this.winner} is the winner!`;
  }
}

module.exports = Board;
