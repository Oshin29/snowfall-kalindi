const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var snowBg1,kids,kidsImg;
var engine,world; 
var snow=[];
function preload(){
  snowBg1=loadImage("snow1.jpg")
  kidsImg=loadImage("kids.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  if(frameCount % 150 === 0){

    for(var i=0; i<100; i++){
        snow.push(new Snow(random(0,800), random(0,400)));
    }

}
  kids= createSprite(500, 230, 50, 100);
  kids.addImage(kidsImg)
  
  
}

function draw() {
  background(snowBg1); 
  Engine.update(engine);
  for(var i = 0; i<100; i++){
    snow[i].display();
    snow[i].updateY();
    
}
  drawSprites();
  
}