const Board = require('../board');
const Player = require('../player');
const { EMPTY_BOARD, GAME_CREATION_WITH_EMPTY_BOARD, VERTICAL_WINNING_SCENARIOS } = require('./fixtures/boardScenarios');
const boardPositions = require('./fixtures/boardPositions.js');

const mockConsoleLog = jest.spyOn(global.console, 'log');

describe('Game Board Creation', () => {
  let board;

  beforeEach(() => {
    board = new Board();
    mockConsoleLog.mockClear();
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

  beforeEach(() => {
    board = new Board();
    mockConsoleLog.mockClear();
  });

  test('expect the game to start with player X', () => {
    const playerX = new Player('X', board);
    playerX.placePin(boardPositions.topLeft);
    expect(board.firstMove).toEqual('X');
  });

  test('expect player X to have placed 3 vertically matching pins', () => {
    const playerX = new Player('X', board);
    playerX.placePin(boardPositions.topLeft);
    playerX.placePin(boardPositions.middleLeft);
    playerX.placePin(boardPositions.bottomLeft);
    expect(board.playersFinalPositions().playerX).toEqual(
      expect.arrayContaining(VERTICAL_WINNING_SCENARIOS[0]),
    );
  });

  test('expect the game board to announce the winner', () => {
    board.cells = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
    board.announceWinner();
    expect(mockConsoleLog).toBeCalledWith('X is the winner!');
  });
});
