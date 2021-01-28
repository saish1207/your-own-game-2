var background1 , background1Img ;
var ray,rayImg,rayJump
var inVisibleGround;
var obstaclesGroup,obstical,obstical1,obstical2,obstical3,obstical4,obstical5;
var jumpSound,dieSound;

function preload(){
  background1Img = loadImage("a6.jpg")
  rayImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png")
  rayJump = loadImage("jump.png")


  obstacle1 = loadImage("a 1.gif");
  obstacle2 = loadImage("a2.gif");
  obstacle3 = loadImage("a3.png");

  
 
  jumpSound = loadSound("jump.wav")
  dieSound = loadSound("die.wav")
  
}

function setup() {
  createCanvas(1400,900);
  background1 = createSprite(0, 0, 1400, 700);
  background1.addImage(background1Img);
  background1.velocityX = -7
  background1.scale = 3;

  ray = createSprite(100,530,10,10);
  ray.addAnimation("running",rayImg);
  ray.scale = 1.5
  inVisibleGround = createSprite(700,770,1200,20);
  inVisibleGround.visible = false ;

  obstaclesGroup = createGroup();

}

function draw() {
  background("black");  

  if(background1.x<0){
    background1.x = background1.x + 700 ;
  }

  

  if (keyDown("space") && ray.collide(inVisibleGround)
  ){
    ray.velocityY = -40;
    ray.addImage(rayJump);
    jumpSound.play();
  }
  ray.velocityY = ray.velocityY + 1.8;


  spawnObstacles()
  ray.collide(inVisibleGround);

  if(obstaclesGroup.isTouching(ray)){
    ray.destroy();
    dieSound.play();
  }
  
  drawSprites();
}
function spawnObstacles(){
if (frameCount % 200 === 0){
  var obstacle = createSprite(1300,700,10,30);
 

  obstacle.velocityX = -20;
  
   //generate random obstacles
   var rand = Math.round(random(1,3));
   switch(rand) {
     case 1: obstacle.addImage(obstacle1);
             break;
     case 2: obstacle.addImage(obstacle2);
             break;
     case 3: obstacle.addImage(obstacle3);
             break;
     default: break;
   }
 obstacle. collide(inVisibleGround);
    obstaclesGroup.add(obstacle);
  
  }
}