var obj1, obj2;

function setup() {
  createCanvas(800,400);
  
  //create obj1
  obj1=createSprite(100,100,50,50);
  obj1.shapeColor="green";

  //obj1 velocity
  obj1.velocityX=3;
  obj1.velocityY=3;

  //create obj2
  obj2=createSprite(400, 400, 50, 50);
  obj2.shapeColor="green";

  //obj2 velocity
  obj2.velocityX=-3;
  obj2.velocityY=-3;
}

function draw() {
  //create background
  background(255,255,255);

  /*
  control obj1 with mouse
  obj1.x=mouseX;
  obj1.y=mouseY;
  */

  //collision detection algorithm
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x-obj1.x<obj1.width/2+obj2.width/2
    && obj1.y-obj2.y<obj1.height/2+obj2.height/2
    && obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      obj1.shapeColor="red";
      obj2.shapeColor="red";
    }
    
    //bounce off algorithm
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
      && obj2.x-obj1.x<obj1.width/2+obj2.width/2){
        obj1.velocityX=obj1.velocityX*-1;
        obj2.velocityX=obj2.velocityX*-1;
      }

      if(obj1.y-obj2.y<obj1.height/2+obj2.height/2
        && obj2.y-obj1.y<obj1.height/2+obj2.height/2){
          obj1.velocityY=obj1.velocityY*-1;
          obj2.velocityY=obj2.velocityY*-1;
        }

  drawSprites();
}