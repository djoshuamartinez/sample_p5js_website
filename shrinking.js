var radius = 0;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  if(mouseIsPressed)
    radius++;
  else if(radius>0) 
    radius --;
  ellipse(mouseX, mouseY, radius, radius);
}
