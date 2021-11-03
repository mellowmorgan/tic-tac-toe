function Game(){
  let player1 = new Player("Player 1");
  this.player1 = player1;
  let player2 = new Player("Player 2");
  this.player2 = player2;
  this.currentPlayer = this.player1;
  this.gameOver = false;
}

function Player(name){
   this.name = name;
   this.marks = [];
   if (this.name==="Player 1"){
     this.markValue='X';
   }
   else{
     this.markValue="O";
   }
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
playerMarks=[1,2,4,6];

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinning(player){
  let playerMarks = player.marks;
  let hasFirst=false;
  let hasSecond=false;
  let hasThird=false;
  winner="none";
  //could return either none, player.name, player.name
  winningPatterns.forEach(function(pattern){
    const firstEval = pattern[0];
    playerMarks.forEach(function(element){
      if (element===firstEval){
        hasFirst=true;
      }
    });
    const secondEval = pattern[1];
    playerMarks.forEach(function(element){
      if (element===secondEval){
        hasSecond=true;
      }
    });
    const thirdEval = pattern[2];
    playerMarks.forEach(function(element){
      if (element===thirdEval){
        hasThird=true;
      }
    });
    if (hasFirst && hasSecond && hasThird){
      winner=player.name;
      return winner;
    }
    hasFirst=false;
    hasSecond=false;
    hasThird=false;
  });
    return winner;
}

function attachContactListeners(){
  let currentPlayer = game.currentPlayer; 
  $(".box").on("click",function(){
    $("#"+this.id).html(currentPlayer.markValue);
   if (currentPlayer.name === "Player 1"){
     game.currentPlayer = game.player2;
   } else {
      game.currentPlayer = game.player1;
   }
   $("#player-turn").html(game.currentPlayer.name);
  currentPlayer = game.currentPlayer; 
  });

}

let game = new Game();
$(document).ready(function() {
  $("#player-turn").html(game.currentPlayer.name);
  attachContactListeners(); 

});

//BACK FROM LUNCH CHECK FOR WINNER NOW ON CLICK!!!!