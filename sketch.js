var player;
var ground;

function setup() {
  createCanvas(800,400);
 player= createSprite(200, 320, 50, 50);
 
 ground=createSprite(200,360,800,20);
 ground.velocityX=-3;

}

function draw() {
  background(0);  

  if(ground.x<0){
    ground.x=400;
  }
  if(keyIsDown(32)){
    player.velocityY=-10;
   
  }
  player.velocityY=player.velocityY+2;
  player.collide(ground);
  console.log(player.y)
  obstacles();
  coin();
  drawSprites();
}
function obstacles(){
  if(frameCount%60===0){
  var obstacle=createSprite(800,320,30,30);
  obstacle.shapeColor="red";
  obstacle.velocityX=-2;
  }
}
function coin(){
  if(frameCount%60===0){
    var coin=createSprite(800,250,15,15);
    coin.velocityX=-2;
    coin.shapeColor="gold";
  }
}