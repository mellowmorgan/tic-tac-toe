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

