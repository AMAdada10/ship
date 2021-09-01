var trex, ship_moving, ship_collided;
var ground, invisibleGround, groundImage;

function preload() {
ship_moving = loadAnimation(    "ship-1.png"  , "ship-2.png", "ship-3.png", );
  ship_collided = loadImage("ship-4.png");

  groundImage = loadImage("sea.png")
}

function setup() {
  createCanvas(1600, 1200);


  ship= createSprite(50,160,20,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  invisibleGround=createSprite(200,190,400,20);
  invisibleGround.visible=false
}

function draw() {
  background(220);

  //jump when the space button is pressed




  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  ship.collide(invisibleGround);
  drawSprites();
}