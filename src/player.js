class Player {
  constructor(pin, board) {
    this.pin = pin;
    this.board = board;
  }

  placePin(position) {
    if (!this.board.cells.find((cell) => cell === 'X' || cell === 'O')) {
      this.board.firstMove = this.pin;
    }
    this.board.cells[position] = this.pin;
    this.board.turnsPlayed++;
    console.log(`${this.pin}'s turn:`);
    console.log(this.board.printBoard());
  }
}

module.exports = Player;
