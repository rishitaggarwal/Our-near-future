var dope = 65

function setup() {
  createCanvas(800,800);
 
}

function draw() {
  background(125);
  fill(225,0,0)
  ellipse(400,450,25,25)
  fill(255,0,0)
  ellipse(400,500,35,35);
  fill(0,0,175)
  ellipse(400,570,45,45);
  fill(255,0,50) ;
  ellipse(400,300,dope,dope);
  dope=dope+1;
  
  drawSprites();
}