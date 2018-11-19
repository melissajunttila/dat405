var x = 0;
var velocity = 10;

function setup() {
  createCanvas(600, 400);
  noStroke();
  frameRate(30);
}

function draw() {
  background(44);

  x = x + velocity;
  if (x > width) {
    x = 0;
  }

  fill(200, 40, 255);
  textSize(50);
  textFont('Monotype Corsiva');
  text("yay", x, 100);
  fill(204, 51, 255);
  textSize(65);
  textFont('Impact');
  text("we're", x, 200);
  fill(255, 0, 255);
  textSize(80);
  textFont('Georgia');
  text("moving", x, 300);

}
