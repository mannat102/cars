
var car,ground;
var speed,weight;
var car2,car1,car3
function setup() {
  createCanvas(500, 700);

  rectMode(CENTER);
  
  speed=random(18,10);
weight=random(400,1500);
  
car1=createSprite(50,695,40,10);
  car1.shapeColor=color(11)
  car1.velocityX = speed;
  
  car2=createSprite(50,622,40,10);
  car2.velocityX = speed; 
  
  car=createSprite(50,656,40,10);
  car.shapeColor=color(180)
  car.velocityX = speed;


  car=createSprite(50,590,40,10);
  car.shapeColor=color(180)
  car.velocityX = speed;

  ground=createSprite(width/2, height-125, width,10);
  ground.shapeColor=color(111)
    
 
 ground=createSprite(width/2, height-25, width,10);
 ground.shapeColor=color(111)
   
 car.collide(ground);
   
   ground=createSprite(width/2, height-57, width,10);
   ground.shapeColor=color(90)

   ground=createSprite(width/2, height-90, width,10);
   ground.shapeColor=color(90)



}



function draw() {
  background(80,100,50);  
  drawSprites();







 







}