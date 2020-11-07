1 - Game Board Creation Phase

    • The board is made up of 3 rows with logic (( | | ) - where the X & O's will be put) + 2 static rows that separate the board (-+-+-)
    • If we imagine the board as a 3x3 matrix, the 9 squares inside the matrix will be empty
    • This Phase includes not only the board creation but also the messages that will show the progress of the creation

2 - Player X wins with a vertical line

  • The game begins with player X, so we need to place 3 X's in the same column
  • If we imagine the board as a 3x3 matrix (0-9 positions), the 3 vertical wining options are:
      [0, 3, 6], [1, 4, 7], [2, 5, 8]
  • If the 3 X's are in any of those 3 combinations of positions, the X wins with a vertical line  
  
3 – Player O wins with a horizontal line
  • The game begins with player O
  • For 'O' to win with an horizontal line, the 3 horizontal wining options are:
      [0, 1, 2], [3, 4, 5], [6, 7, 8]
  • If the 3 O's are in any of those 3 combinations of positions, the O wins with a vertical line 

4 – Player X wins with a diagonal line
  • The game begins with player X
  • For 'X' to win with a diagonal line, the 3 diagonal wining options are:
      [0, 4, 8], [2, 4, 6]
  • If the 3 X's are in any of those 3 combinations of positions, the X wins with a diagonal line

5 – Game ends with a draw
  • The board gets full and no one wins the game 
