const Board = require('../board');
const Player = require('../player');
const {
  EMPTY_BOARD,
  GAME_CREATION_WITH_EMPTY_BOARD,
  VERTICAL_WINNING_SCENARIOS,
  HORIZONTAL_WINNING_SCENARIOS,
  DIAGONAL_WINNING_SCENARIOS,
  X_WINNER,
  O_WINNER,
  DRAW,
} = require('./fixtures/boardScenarios');
const boardPositions = require('./fixtures/boardPositions.js');

const mockConsoleLog = jest.spyOn(global.console, 'log');

describe('Game Board Creation', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('expect the game board to be created', () => {
    expect(board).toBeInstanceOf(Board);
  });

  test('expect the game board to be empty', () => {
    expect(board.cells).toEqual(EMPTY_BOARD);
  });

  test('expect the game start to be shown on screen', () => {
    board.startGame();
    expect(mockConsoleLog).toBeCalledWith(GAME_CREATION_WITH_EMPTY_BOARD);
  });
});

describe('Player X wins with a vertical line', () => {
  let board;
  let playerX;
  let playerO;

  beforeEach(() => {
    board = new Board();
    playerX = new Player('X', board);
    playerO = new Player('O', board);
  });

  test('expect the game to start with player X', () => {
    playerX.placePin(boardPositions.topLeft);
    expect(board.firstMove).toEqual('X');
  });

  test('expect player X to have placed 3 vertically matching pins', () => {
    playerX.placePin(boardPositions.topLeft);
    playerX.placePin(boardPositions.middleLeft);
    playerX.placePin(boardPositions.bottomLeft);
    expect(board.playersPins().X).toEqual(
      expect.arrayContaining(VERTICAL_WINNING_SCENARIOS[0]),
    );
  });

  test('expect the game board to announce the winner', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.middleLeft);
    playerO.placePin(boardPositions.bottomMiddle);
    playerX.placePin(boardPositions.bottomLeft);
    expect(board.announceWinner()).toEqual(X_WINNER);
  });
});

describe('Player O wins with an horizontal line', () => {
  let board;
  let playerX;
  let playerO;

  beforeEach(() => {
    board = new Board();
    playerX = new Player('X', board);
    playerO = new Player('O', board);
  });

  test('expect the game to start with player O', () => {
    playerO.placePin(boardPositions.topLeft);
    expect(board.firstMove).toEqual('O');
  });

  test('expect player O to have placed 3 horizontally matching pins', () => {
    playerO.placePin(boardPositions.topLeft);
    playerX.placePin(boardPositions.middleRight);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.middleLeft);
    playerO.placePin(boardPositions.topRight);
    expect(board.playersPins().O).toEqual(
      expect.arrayContaining(HORIZONTAL_WINNING_SCENARIOS[0]),
    );
  });

  test('expect the game board to announce the winner', () => {
    playerO.placePin(boardPositions.topLeft);
    playerX.placePin(boardPositions.middleRight);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.middleLeft);
    playerO.placePin(boardPositions.topRight);
    expect(board.announceWinner()).toEqual(O_WINNER);
  });
});

describe('Player X wins with a diagonal line', () => {
  let board;
  let playerX;
  let playerO;

  beforeEach(() => {
    board = new Board();
    playerX = new Player('X', board);
    playerO = new Player('O', board);
  });

  test('expect player X to have placed 3 diagonally matching pins', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.center);
    playerO.placePin(boardPositions.topRight);
    playerX.placePin(boardPositions.bottomRight);
    expect(board.playersPins().X).toEqual(
      expect.arrayContaining(DIAGONAL_WINNING_SCENARIOS[0]),
    );
  });
  test('expect the game board to announce the winner', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.center);
    playerO.placePin(boardPositions.topRight);
    playerX.placePin(boardPositions.bottomRight);
    expect(board.announceWinner()).toEqual(X_WINNER);
  });
});

describe('The game ends with a Draw', () => {
  let board;
  let playerX;
  let playerO;

  beforeEach(() => {
    board = new Board();
    playerX = new Player('X', board);
    playerO = new Player('O', board);
  });
  test('expect the players to have played 9 turns', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.topRight);
    playerO.placePin(boardPositions.middleLeft);
    playerX.placePin(boardPositions.center);
    playerO.placePin(boardPositions.bottomLeft);
    playerX.placePin(boardPositions.middleRight);
    playerO.placePin(boardPositions.bottomRight);
    playerX.placePin(boardPositions.bottomMiddle);
    expect(board.turnsPlayed).toEqual(9);
  });
  test('expect the game board to announce the draw', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.topRight);
    playerO.placePin(boardPositions.middleLeft);
    playerX.placePin(boardPositions.center);
    playerO.placePin(boardPositions.bottomLeft);
    playerX.placePin(boardPositions.middleRight);
    playerO.placePin(boardPositions.bottomRight);
    playerX.placePin(boardPositions.bottomMiddle);
    expect(board.announceWinner()).toEqual(DRAW);
  });
});
