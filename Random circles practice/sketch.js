let size;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  noStroke();
}

function draw() {
  size = random(200);
  fill(random(255), 0, random(255), random(255));
  ellipse(random(500), random(500), size, size);
  }
