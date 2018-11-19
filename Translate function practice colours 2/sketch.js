function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
  noLoop();
  noFill();
}

function draw() {
  background(255);
  noFill();

  for (var i = 0; i < 600; i++) {
  push();
  stroke(random(255), random(255), random(255));
  translate(random(width),random(height));
  scale(random(1), random(1));
  customShape();
  pop();
  }
}

function customShape () {
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 50);
    rotate(PI/4);
  }

}
