1 - Game Board Creation Phase

    • The board is made up of 3 rows with logic (( | | ) - where the X & O's will be put) + 2 static rows that separate the board (-+-+-)
    • If we imagine the board as a 3x3 matrix, the 9 squares inside the matrix will be empty
    • This Phase includes not only the board creation but also the messages that will show the progress of the creation

2 - Player X won with a vertical line

  • The game begins with player X, so we need to place 3 X's in the same column
  • If we imagine the board as a 3x3 matrix (0-9 positions), the 3 vertical wining options are:
      [0, 3, 6], [1, 4, 7], [2, 5, 8]
  • If the 3 X's are in any of those 3 combinations of positions, the X wins with a vertical line  
  
3 – Player O won with a horizontal line
4 – Player X won with a diagonal line
5 – Game ends with a draw
