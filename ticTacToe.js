const getPlayingRow = (xPosition = [], oPosition = [], rowNumber = null) => {
    if (xPosition.length > 1 && oPosition.length > 1) {
        const matrixPositions = [[0,1,2],[3,4,5],[6,7,8]];
        const matrixPositionsByRow = matrixPositions[rowNumber-1] || [];

        const row = matrixPositionsByRow.map(position => {
            if (xPosition.includes(position)) {
                return 'X';
            }
            if (oPosition.includes(position)) {
                return 'O';
            } 
            return ' ';
        });
        return row.join('|');
    }
    return ' | | ';
}

const getSeparationRow = () => {
    return '-+-+-';
}

const initBoard = (player) => {
    const boardCreation = 'Game Board Creation...';
    const board = gameBoard();
    const boardCreated = 'Board Created';
    const gameStart = 'The game will start with player ' + player;

    return `${boardCreation}\n${board}\n${boardCreated}\n${gameStart}`;
}

const gameWinner = (xPosition) => {
    const verticalWinningPositions = JSON.stringify([[0,3,6],[1,4,7],[2,5,8]]);
    const winningPlayer = verticalWinningPositions.includes(JSON.stringify(xPosition)) ? 'X' : null;
    return `PLAYER ${winningPlayer} WON!`;
}

const gameBoard = (xPosition, oPosition) => {

    const firstRow = getPlayingRow(xPosition, oPosition, 1);
    const secondRow = getSeparationRow();
    const thirdRow = getPlayingRow(xPosition, oPosition, 2);
    const forthRow = getSeparationRow();
    const fifthRow = getPlayingRow(xPosition, oPosition, 3);

    return `${firstRow}\n${secondRow}\n${thirdRow}\n${forthRow}\n${fifthRow}`;
}

const gameStarted = (player) => {
    return `Player ${player}:`;
}

const gamePlayed = (player, xPosition, oPosition) => {
    return `${gameStarted(player)}\n${gameBoard(xPosition, oPosition)}\n${gameWinner(xPosition, oPosition)}`;
}

module.exports = {
    initBoard,
    gameWinner,
    gamePlayed
};
