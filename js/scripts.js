function Game(){
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");
  this.currentPlayer = player1;
  this.gameOver = false;
}

function Player(name){
   this.name = name;
   this.marks = {};
}
function Board(){
let space1 = new Space(0);
let space2 = new Space(1);
let space3 = new Space(2);
let space4 = new Space(3);
let space5 = new Space(4);
let space6 = new Space(5);
let space7 = new Space(6);
let space8 = new Space(7);
let space9 = new Space(8);
}

function Space(coordinate){
  this.coordinate = coordinate;
  this.markedBy = "none";
}

()

when a div clicked
trigger is Space.markedBy(currentPlayer)
check something winning
currentPlayer = 
if currentPlayer===player  1
currentplayer=player2
