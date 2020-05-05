var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds , cloudImage , rand ,cloudsGroup
var obstacles, obstacleGroup , obstacle1, obstacle2 , obstacle3,obstacle4,obstacle5, obstacle6 , rand1
var count

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage= loadImage("cloud.png");
  
  obstacle1=loadImage("obstacle1.png");
  obstacle2= loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = createGroup();
  obstaclesGroup = createGroup();
  
  count=0;
  
}

function draw() {
  background("white");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  count=Math.round(frameCount/4);
  text("Score:"+ count,400,50);
  
  spawnClouds();
  
  spawnObstacles();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds(){
  if(frameCount%100===0){
    rand=random(80,130);
    clouds = createSprite(500,rand,20,20);
    clouds.velocityX = -2;
    clouds.addImage(cloudImage);
    clouds.scale=0.5;
    clouds.lifetime=250;
    cloudsGroup.add(clouds);
    clouds.depth = 0;
  }
}

function spawnObstacles(){
  if(frameCount%100===0){
   obstacles = createSprite(500,165,20,20);
    obstacles.velocityX=-2;
    rand1 = Math.round (random(1,6));
    switch(rand1){
       case 1: obstacles.addImage(obstacle1);
        break;
        case 2: obstacles.addImage(obstacle2);
        break;
        case 3: obstacles.addImage(obstacle3);
        break;
        case 4: obstacles.addImage(obstacle4);
        break;
        case 5: obstacles.addImage(obstacle5);
        break;
        case 6: obstacles.addImage(obstacle6);
        break;
        default:break;
           }
    obstacles.scale=0.5;
    obstacles.lifetime=250;
     obstaclesGroup.add(obstacles);
  }
}