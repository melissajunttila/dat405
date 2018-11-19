function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(150);
  stroke(0);
  fill(153, 0, 153);
  translate(width/2, height/2);
  for (var i = 0; i < 200; i++) {
    rotate(0.4);
    ellipse(i, 0, 10, 10);
  }
}
