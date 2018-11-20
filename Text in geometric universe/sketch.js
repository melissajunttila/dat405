function setup() {
  createCanvas(600, 600);
  strokeWeight(8);
  noLoop();
  noFill();
}

function draw() {
  background(255);
  stroke(255);
  noFill();

  for (var i = 0; i < 100; i++) {
  push();
  stroke(random(255), random(255), random(255));
  translate(random(width),random(height));
  scale(random(1), random(1));
  customText();
  pop();
  }
}

function customText () {
    fill(0, 0, 0);
    textSize(80);
    textFont('Courier New');
    text("lost", 100, 200);
    fill(204, 51, 255);
    text("in", 100, 300);
    fill(255, 0, 255);
    text("space", 100, 400);
}
