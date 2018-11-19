function setup() {
  createCanvas(400, 400);
  strokeWeight(8);
  noLoop();
  noFill();
}

function draw() {
  background(50);
  stroke(255);
  noFill();

  for (var i = 0; i < 200; i++) {
  push();
  stroke(random(255), random(255), random(255));
  translate(random(width),random(height));
  scale(random(1.5), random(1.5));
  customShape();
  pop();
  }
}

function customShape () {
  ellipse(0,0,100,100);
  ellipse(30,0,100,100);
  ellipse(0,30,50,50);
  ellipse(30,30,50,50);
}
