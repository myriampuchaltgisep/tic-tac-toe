const {
  EMPTY_BOARD, GAME_CREATION, GAME_STARTS, VERTICAL_WINNING_SCENARIOS,
} = require('./test/fixtures/boardScenarios');

class Board {
  constructor() {
    this.cells = EMPTY_BOARD;
    this.winner = '';
  }

  printBoard() {
    return `${this.cells[0]}|${this.cells[1]}|${this.cells[2]}\n-+-+-\n${this.cells[3]}|${this.cells[4]}|${this.cells[5]}\n-+-+-\n${this.cells[6]}|${this.cells[7]}|${this.cells[8]}\n`;
  }

  renderToConsole() {
    console.log(`${GAME_CREATION}\n${this.printBoard()}${GAME_STARTS}`);
  }

  playersFinalPositions() {
    const positions = {
      playerX: [],
      playerO: [],
    };

    this.cells.map((cell, index) => {
      if (cell === 'X') {
        positions.playerX.push(index);
      }
      if (cell === 'O') {
        positions.playerO.push(index);
      }
    });

    return positions;
  }

  decideWinner() {
    VERTICAL_WINNING_SCENARIOS.forEach((winningScenario) => {
      if (winningScenario.toString() === this.playersFinalPositions().playerX.toString()) {
        this.winner = 'X';
      }
    });
  }

  announceWinner() {
    this.decideWinner();
    console.log(`${this.winner} is the winner!`);
  }
}

module.exports = Board;
