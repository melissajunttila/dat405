function setup() {
  createCanvas(600, 600);
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
  scale(random(2), random(2));
  text();
  pop();
  }
}

function text() {
  textFont('Arial');
  text("memes", 100, 200);
  }
