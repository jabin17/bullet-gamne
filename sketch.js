var arrow,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);


 speed=random(55,100);
 weight= random(100,20) ;
 

arrow=createSprite(50,200,90,15);

wall = createSprite(1300,200,60,height/2)
thickness= random(60,90);

}

function draw() {
  background(0,0,0);
  drawSprites();

  arrow.velocityX=speed;

  if(arrow.x-wall.x< (wall.width+arrow.width)/2){
    wall.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>100)
    {
      wall.shapeColor=color("green")
    }
    if(deformation<100 && deformation>180)
    {
      wall.shapeColor=color("yellow");
    }
    if(deformation<180)
    {
      wall.shapeColor=color("red");
    }
  }

 
}