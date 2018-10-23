function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(10);

  // Set colors
  fill(130, 101, 192, 127);
  stroke(130, 101, 127);

  // A rectangle
  rect(350, 30, 80, 80);
  // An ellipse
  ellipse(100, 300, 500, 500);
  // A triangle
  //triangle(300, 100, 340, 100, 200, 30);

  // A design for a simple flower
  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 70, 70, 80);
    rotate(PI/5);
  }
}
