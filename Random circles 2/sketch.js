let size;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
  noStroke();
}

function draw() {
  size = random(100);
  customShape();

}

function customShape() {
  fill(0,0,0);
  stroke(2)
  ellipse(random(500), random(500), size, size);
  fill(0,0,255)
  stroke(2)
  ellipse(random(500), random(500), size, size);
  fill(255,0,0)
  stroke(2)
  ellipse(random(500), random(500), size, size);
}
