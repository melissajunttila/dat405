var x = 0;
var velocity = 10;

function setup() {
  createCanvas(600, 400);
  noStroke();
  frameRate(50);
}

function draw() {
  background(200,0,80);

  x = x + velocity;
  if (x > width) {
    x = 0;
  }

  fill(0);
  ellipse(x,100,80,80);
  fill(255);
  ellipse(x,200,80,80);
  fill(0);
  ellipse(x,300,80,80);

}
