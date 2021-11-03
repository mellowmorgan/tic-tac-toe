Describe: Game

Test: "New Game object should make 2 players and set current player to player 1 and gameOver should be false."
Code: 
let game1 = new Game();
game1.player1; 
game1.player2;
game1.currentPlayer;
game1.gameOver;
Expected Output: player1, player2, player1, false.

Describe: Player

Test: "New Player object should have name "Player 1" when created and empty marks array."
Code:
let player1 = new Player("Player 1");
player1.name;
Expected Output: "Player 1"

Describe Space
Test: "Space object should have a coordinate and know who marked it and if it's marked."
Code:
let space1 = new Space(0);
space1.coordinate;
space1.isMarked;
space1.markedBy;
Expected Output: 0, false, "none"

Describe Board
Test: "Board object should have empty object spaces to begin with."
Code:
let b = new Board();
b.spaces;
Expected Output: empty object {};

Describe Board.prototype.addSpace(space);

Test: "Should add object to object spaces."
Code:
b.addSpace(space1);
b.spaces;
Expected Output: {1: space object};

Describe: Board.prototype.findSpace()

Test: "Should return Space object in board.spaces by searching by id."
Code: 
b.findSpace(1);
Expected Output: Space object with id 1. 

Describe: checkWinning()

Test: "checkWinning(player1)return "none" because no winner yet."
Code:
checkwinning(player1);
Expected Output: "none"

Describe: checkDraw()
Test: "checkDraw(b) should return false."
Code:
checkDraw(b);
Expected Output: false