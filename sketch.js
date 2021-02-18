var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fixedRect1=createSprite(200,100,50,50);
fixedRect1.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor="indigo";
    fixedRect.shapeColor="indigo";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="indigo";
    fixedRect1.shapeColor="indigo";
  }
  
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect1.shapeColor="green";
  }
  drawSprites();
}


