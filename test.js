var c;
var w;

function setup(){
  createCanvas(960,960);
  background('#ffffff');
  c = prompt('Colour: ');
  w = prompt('Line Weight: ');
}
function draw(){
  
}
function mouseDragged(){
  line(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(w);
  stroke(c);
  return false;
}