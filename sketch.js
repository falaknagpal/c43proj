var backgroundImage, background2Image;
var form, system, code, security;
var score = 0;

function preload(){  
  backgroundImage = loadImage("sprites/aladdin_cave.jpg");
  background2Image = loadImage("sprites/treasure.jpg");
}

function setup(){
  createCanvas(1000,500);
  system = new System();  
  security = new Security();
 
}

function draw(){
  background(backgroundImage);

  clues();
  security.display();
  
  textSize(20);
  fill("white");
  text("Score: " + score,450,50);

  if (score === 3){
    clear();
    background(background2Image);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250,200);
  }

  drawSprites();
}