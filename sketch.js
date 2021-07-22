var backgroundimg,bg;
var ship,ship_running;

function preload() {
backgroundimg=loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-3.png","ship-4.png"); 

}
 
function setup(){
  createCanvas(800,400)
  bg=createSprite(400,200,200,100);
  bg.addImage(backgroundimg);
  bg.scale=0.5;
  bg.x = bg.width /4;
  bg.velocityX = -2;
  ship=createSprite(120,200)
  ship.addAnimation("running", ship_running);
  ship.scale=0.3;
}

function draw() {
  background("blue");
  if (bg.x < 0) {
    bg.x = bg.width / 4;
  }
  
  drawSprites();
}