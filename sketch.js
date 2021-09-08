const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
var snow = [];

var santa,santaImg;
var voice;


function preload(){
  // load the background image
  bg = loadImage("images/bg.jpg");
  santaImg =  loadAnimation("images/santa1.png","images/santa2.png","images/santa3.png","images/santa4.png","images/santa5.png","images/santa6.png","images/santa7.png","images/santa8.png");
  voice = loadSound("sound/SantaVoice.mp3");
}
function setup() {
  //create canvas
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  santa = createSprite(0,250,10,10);
  santa.visible = false;

  for(var i=0; i<80; i++) { 
    snow.push(new Snowfall(random(5,995),random(5,500),15,15));
  }
}

function draw() {
  background(bg); 

  Engine.update(engine);


  for(var i = 0; i < 80; i++){ 
    snow[i].display(); 
  

  if(snow[i].body.position.y>600) { 
    Matter.Body.setPosition(snow[i].body,{x:random(5,995),y:random(5,500)}) 
  }
} 
    

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    voice.play();
    santa.visible = true;
    santa.addAnimation("flying",santaImg);
    santa.scale = 1.8;
    santa.velocityX = 5;
    santa.velocityY = -0.5;
    santa.lifetime = 150;
  }

}