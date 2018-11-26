function setup() {
  createCanvas(500, 500);
  background(51);
  //noStroke();
}

function draw () {
fill(0,0,255);
ellipse(50, 50, 100, 100); //blue circle
fill(255, 255, 0);
ellipse(450, 450, 100, 100); //yellow circle
fill(0, 255, 0);
ellipse(50, 450, 100, 100); //green circle
fill(255, 0, 0);
ellipse(450, 50, 100, 100); //red circle

strokeWeight(4);
stroke(0, 255, 0);
line(50, 50, 450, 450); //blue to yellow
stroke(0, 255, 255);
line(50, 50, 50, 450); //blue to green
stroke(255, 255, 0);
line(50, 450, 450, 50); //green to red
stroke(179, 255, 179);
line(50, 450, 450, 450); //green to yellow
stroke(255, 92, 51);
line(450, 450, 450, 50); //yellow to red
stroke(255, 0, 255);
line(450, 50, 50, 50); //red to blue
}
