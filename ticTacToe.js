const getPlayingRow = () => {
    return ' | |';
}
const getSeparationRow = () => {
    return '-+-+-';
}

const createBoard = () => {
    const firstRow = getPlayingRow();
    const secondRow = getSeparationRow();
    const thirdRow = getPlayingRow();
    const forthRow = getSeparationRow();
    const fifthRow = getPlayingRow();

    return `${firstRow}\n${secondRow}\n${thirdRow}\n${forthRow}\n${fifthRow}`;
}

const initBoard = () => {

    const boardCreation = 'Game Board Creation...';
    const board = createBoard();
    const boardCreated = 'Board Created';
    const gameStart = 'The game will start with player X';

    return `${boardCreation}\n${board}\n${boardCreated}\n${gameStart}`;
}

module.exports = {
    initBoard
};
