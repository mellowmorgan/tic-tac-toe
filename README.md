# Tic Tac Toe

By Morgan Waites

A game of tic tac toe.

## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript/JQuery

## Description
A webpage for playign tic tac toe with 2 players sharing one screen.

## Setup/Installation Instructions
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html.

## Known Bugs
* No known bugs.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites.

Describe: Game

Test: "New Game object should make 2 players and set current player to player 1 and gameOver should be false."<br>
Code: <br>
let game1 = new Game();<br>
game1.player1; <br>
game1.player2;<br>
game1.currentPlayer;<br>
game1.gameOver;<br>
Expected Output: player1, player2, player1, false.<br>

Describe: Player<br>

Test: "New Player object should have name "Player 1" when created and empty marks array."<br>
Code:<br>
let player1 = new Player("Player 1");<br>
player1.name;<br>
Expected Output: "Player 1"<br>

## Tests

Describe Space<br>

Test: "Space object should have a coordinate and know who marked it and if it's marked."<br>
Code:<br>
let space1 = new Space(0);<br>
space1.coordinate;<br>
space1.isMarked;<br>
space1.markedBy;<br>
Expected Output: 0, false, "none"<br>

Describe Board<br>

Test: "Board object should have empty object spaces to begin with."<br>
Code:<br>
let b = new Board();<br>
b.spaces;<br>
Expected Output: empty object {};<br>

Describe Board.prototype.addSpace(space);<br>

Test: "Should add object to object spaces."<br>
Code:<br>
b.addSpace(space1);<br>
b.spaces;<br>
Expected Output: {1: space object};<br>

Describe: Board.prototype.findSpace()<br>

Test: "Should return Space object in board.spaces by searching by id."<br>
Code: <br>
b.findSpace(1);<br>
Expected Output: Space object with id 1. <br>

Describe: checkWinning()<br>

Test: "checkWinning(player1)return "none" because no winner yet."<br>
Code:<br>
checkwinning(player1);<br>
Expected Output: "none"<br>

Describe: checkDraw()<br>

Test: "checkDraw(b) should return false."<br>
Code:<br>
checkDraw(b);<br>
Expected Output: false<br>