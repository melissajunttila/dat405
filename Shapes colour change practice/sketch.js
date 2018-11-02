var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
			 ellipse(240, 240, 100, 100);
			rect(320, 120, 120, 40);
   translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(10, 40, 50, 80);
    rotate(PI/5);
	}
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
