var fixedRect, movingRect;
var edges;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  edges=createEdgeSprites();
  fixedRect.bounceOff(edges); 
  movingRect.bounceOff(edges);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
