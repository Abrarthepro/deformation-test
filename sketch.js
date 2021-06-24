
var speed,weight;
var car1,car2,car3,car4,wall,brick;
var deformation;
var line1,line2,line3;
var cargroup;
function preload(){
brick=loadImage("brick1.jpg");
}
function setup() {
  createCanvas(400,400);
  speed=random(55,150);
  weight=random(400,1500);
 car1=createSprite(40, 50, 50,30);
 car1.shapeColor="blue";
 car2=createSprite(40,150,50,30);
 car2.shapeColor="blue";
 car3=createSprite(40,250,50,30);
 car3.shapeColor="blue";
 car4=createSprite(40,350,50,30);
 car4.shapeColor="blue"; 
 car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
 wall=createSprite(700,200,30,400);
 wall.shapeColor="red";
wall.addImage("br",brick);
 wall.scale=2.4;
line1=createSprite(140,100,400,5);
line1.shapeColor="white";
 line2=createSprite(140,200,400,5);
 line2.shapeColor="white";
 line3=createSprite(140,300,400,5);
 line3.shapeColor="white";
 console.log(deformation);
 cargroup=createGroup();

}

function draw() {
  background("grey"); 
  cargroup.add(car1);
  cargroup.add(car2);
  cargroup.add(car3);
  cargroup.add(car4);
  if(cargroup.isTouching(wall)) {
    cargroup.setVelocityEach(0,0);
    deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car1.shapeColor="red";
    }
    if(deformation>180){
      car2.shapeColor="yellow";
    }
    if(deformation>180){
      car3.shapeColor="green";
    }
    if(deformation>180){
      car4.shapeColor="red";
    }
    if(deformation<180&&deformation>100){
      car1.shapeColor="green";
    }
    if(deformation<180&&deformation>100){
      car2.shapeColor="yellow";
    }
    if(deformation<180&&deformation>100){
      car3.shapeColor="red";
    }
    if(deformation<180&&deformation>100){
      car4.shapeColor="red";
    }
    if(deformation>100){
      car1.shapeColor="green";
    }
    if(deformation>100){
      car2.shapeColor="yellow";
    }
    if(deformation>100){
      car3.shapeColor="green";
    }
    if(deformation>100){
      car4.shapeColor="red";
    }
  }
  drawSprites();
}