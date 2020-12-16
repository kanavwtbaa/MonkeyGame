
var monkey , monkey_running
var bananaImage, stone, stoneImage
var bananaGroup, stoneGroup
var score , banana;
var PLAY = 1
var END =0
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  
}
function setup() {
  
monkey=createSprite(40,340,40,40)
monkey.scale=0.1;
monkey.addAnimation('moving',monkey_running)

ground=createSprite(34,375,400,10)
ground.visible=false

  
  bananaGroup = new Group();
  stoneGroup = new Group();
}
function draw() {
 background('white')
  stroke('white')
  textSize(20)
  fill('white')
  text('score- '+ score ,500,50)
  
   stroke('black')
  textSize(20)
  fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
  text('survival Time:'+survivalTime,100,50)
  

if(gameState=PLAY){
  

  ground.velocityX=2 

monkey.velocityY=monkey.velocityY+2
 if (keyDown('space') ){
    monkey.velocityY=-12 
  } 
 ground.x=ground.width/2  
  monkey.collide(ground);
  spawnBanana();
  spawnStone();
}
if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach()
  
  
}
  if(monkey.isTouching(stoneGroup)){
    
   textSize(18) 
  text('gameover - the Monkey is in the hospital',50,200)
  ground.velocityX=0  
  monkey.velocityX=0
  bananaGroup.velocity=0;
  s
    
  }
  
  
  
  
  
  drawSprites(); 
}

function spawnBanana()
{
  if(frameCount % 60 === 0) {
  banana = createSprite(400,random(170,240));
  banana.addAnimation("flying", bananaImage);
  banana.velocityX=-8.5
  banana.scale = 0.05;
  banana.lifetime = 300;
  bananaGroup.add(banana);

    
  }
}
function spawnStone(){

  if(frameCount % 120 === 0) {
  stone = createSprite(400,random(400,340));

  stone.velocityX=-16
  stone.scale = 0.2;
  stone.lifetime = 300;
  stone.addAnimation('flying', stoneImage)
  stoneGroup.add(stone);
  }
}




