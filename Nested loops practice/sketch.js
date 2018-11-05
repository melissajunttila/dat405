let ypos = 140;
let ystep = 30;
let xpos = 80;
let xstep = 30;
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  fill(255,153,204);
  stroke(2);

  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 11; i++) {
      ellipse(xpos+(xstep*i), ypos+(ystep*j), 30, 30);
    }
  }
}
