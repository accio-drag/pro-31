var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

function preload(){
bg1 = loadImage("images/bg1.png")



  
}




function setup() {
  createCanvas(displayWidth,displayHeight);
 
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(bg1);  
if (playerCount===2){
  game.update(1)
}

if(gameState === 1){
  clear();
  game.play();
}

}