let ypos = 200;
let xpos = 80;
let xstep = 30;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  fill(50);
  noStroke();

  for (let i = 0; i < 12; i++) {
    ellipse(xpos + (xstep * i), ypos, 20, 20);
    fill(random(255), random(255), random(255));
  }
}
