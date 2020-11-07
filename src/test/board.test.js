const Board = require('../board');
const { EMPTY_BOARD, GAME_CREATION_WITH_EMPTY_BOARD } = require('./fixtures/boardScenarios');

describe('Game Board Creation', () => {
  let board;
  const mockConsoleLog = jest.spyOn(global.console, 'log');

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
