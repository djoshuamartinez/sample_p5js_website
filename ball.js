var WIDTH = 500;
var HEIGHT = 500;

var DIAMETER = 30;

var pos = [0, 0];
var direction = [1, 1];
var speed = [3, 5];

function setup(){
  createCanvas(WIDTH, HEIGHT);
  background(0);
}
function draw(){
  fill(random(255), random(255), random(255));
  ellipse(pos[0], pos[1], DIAMETER, DIAMETER);
  if(pos[0]<0)
    direction[0] = 1;
  else if(pos[0]>WIDTH)
    direction[0] = -1;
  if(pos[1]<0)
    direction[1] = 1;
  else if(pos[1]>HEIGHT)
    direction[1] = -1;

  pos[0] = pos[0] + direction[0]*speed[0];
  pos[1] = pos[1] + direction[1]*speed[1];
}
