const Board = require('./board');
const Player = require('./player');

const startGame = () => {
  const board = new Board();
  const playerX = new Player('X', board);
  const playerO = new Player('O', board);

  board.startGame();

  const availablePositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let activeTurn = playerX;

  while (board.turnsPlayed < 9 && !board.winner) {
    console.log(board.turnsPlayed);
    const pinPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    activeTurn.placePin(pinPosition);
    availablePositions.splice(availablePositions.indexOf(pinPosition), 1);
    activeTurn = activeTurn === playerX ? playerO : playerX;
  }
};

startGame();
