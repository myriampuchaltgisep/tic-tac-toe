const gameCreation = 'Game Board Creation...';
const gameCreated = 'Board Created';
const gameStartX = 'The game will start with player X';

const getPlayingRow = () => {
    return ' | |';
}
const getSeparationRow = () => {
    return '-+-+-';
}

const initGameBoard = () => {
    const firstRow = getPlayingRow();
    const secondRow = getSeparationRow();
    const thirdRow = getPlayingRow();
    const forthRow = getSeparationRow();
    const fifthRow = getPlayingRow();

    return `${firstRow}\n${secondRow}\n${thirdRow}\n${forthRow}\n${fifthRow}`;
}

module.exports = {
    initGameBoard
  };
