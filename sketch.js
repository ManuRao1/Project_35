var BackgroundImg, BalloonImg, BalloonImg2, BalloonImg3;

function preload() {
  Img = loadImage("Hot Air Balloon-01.png");
  BalloonImg = loadImage("Hot Air Balloon-02.png");
  BalloonImg2 = loadImage("Hot Air Balloon-03.png");
 BalloonImg3 = loadImage("Hot Air Balloon-04.png");
}

function setup() {
   database = firebase.database()
   createCanvas(500,500);
  
  
  var balloon;
}

function draw() {
  background(BalloonImg);  
  balloon = createSprite(400, 200, 50, 50);
  balloon = addImage(BalloonImg2);
  
  if(keyDown(LEFT_ARROW)){
    changePosition(-2,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(2,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-2);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+2);
}

  
  drawSprites();
}