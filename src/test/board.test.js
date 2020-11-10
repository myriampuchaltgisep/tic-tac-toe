const Board = require('../board');
const Player = require('../player');
const {
  EMPTY_BOARD,
  GAME_CREATION_WITH_EMPTY_BOARD,
  VERTICAL_WINNING_SCENARIOS,
  HORIZONTAL_WINNING_SCENARIOS,
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

  test('expect the game progress to be shown on screen', () => {
    board.renderToConsole();
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
    expect(board.playersFinalPositions().playerX).toEqual(
      expect.arrayContaining(VERTICAL_WINNING_SCENARIOS[0]),
    );
  });

  test('expect the game board to announce the winner', () => {
    playerX.placePin(boardPositions.topLeft);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.middleLeft);
    playerO.placePin(boardPositions.bottomMiddle);
    playerX.placePin(boardPositions.bottomLeft);
    board.announceWinner();
    expect(mockConsoleLog).toBeCalledWith('X is the winner!');
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
    expect(board.playersFinalPositions().playerO).toEqual(
      expect.arrayContaining(HORIZONTAL_WINNING_SCENARIOS[0]),
    );
  });

  test('expect the game board to announce the winner', () => {
    playerO.placePin(boardPositions.topLeft);
    playerX.placePin(boardPositions.middleRight);
    playerO.placePin(boardPositions.topMiddle);
    playerX.placePin(boardPositions.middleLeft);
    playerO.placePin(boardPositions.topRight);
    board.announceWinner();
    expect(mockConsoleLog).toBeCalledWith('O is the winner!');
  });
});
