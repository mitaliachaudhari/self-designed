var player,playerImage;
var background1,background1Image;
var background2,background2Image;
var obstacle1,obstacleImg1;
var obstacle2,obstacleImg2;
var obstacle3,obstacleImg3;
var diamond,diamondImg;
var obstaclesGroup;
var diamondGroup;
function preload(){
  background1Image = loadImage("bg1.jpg");
  background2Image = loadImage("bg2.jpg");
  obstacleImg1 = loadImage("obstacle1.png");
  obstacleImg2 = loadImage("obstacle2.gif");
  obstacleImg3 = loadImage("obstacle3.jpg");
  diamondImg = loadImage("diamond.jpeg");
  playerImage = loadImage("player.gif");
}
function setup() {
  createCanvas(1000,400);
 
  background1 = createSprite(0,100,1000,400);
  background1.addImage("background1",background1Image)
  background1.scale = 1.9
  background1.velocityX = -4;
  player = createSprite(30, 300, 10, 10);
  player.addImage("player",playerImage)
  player.scale = 0.3;
  obstaclesGroup = new Group()
  diamondGroup = new Group()
}

function draw() {
  background("black");  
  if(background1.x<100){
    background1.x = background1.width/2;
    
  }
  if(keyDown("space")){
    player.velocityY = -10;
  }
  spawnObstacles();
 spawnDiamond()
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(900,290,10,40);
    obstacle.addImage(obstacleImg2)
    obstacle.velocityX = -6
    
    
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 function spawnDiamond(){
   if(frameCount % 100===0){
   var diamond = createSprite(900,200,20,20);
   diamond.y = Math.round(random(150,200))
   diamond.addImage(diamondImg);
   diamond.velocityX = -3
   diamond.scale=0.04;
   diamondGroup.add(diamond)
 }
}