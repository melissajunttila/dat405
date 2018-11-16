function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  stroke(255);
  strokeWeight(2);
  noFill();

  if (mouseIsPressed) {
    ellipseMode (CENTER);
    }
    else {
      ellipseMode (CORNER);
    }

  push();
  translate(width/2, height/2);
  rotate((mouseX/width)*(PI/2));
  customShape();
  pop();
}

function customShape() {
  ellipse(0,0,100,100);
  ellipse(30,0,100,100);
  ellipse(0,30,50,50);
  ellipse(30,30,50,50);
}
