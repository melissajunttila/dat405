let fillG = 100;
let fillstep = 50;
let xpos = 100;
let ypos = 150;
let xstep = 50;
let ystep = xstep / 2;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  noStroke();

  fill(200, fillG, 200);
  rect(xpos, ypos, 100, 100);

  fill(200, fillG+fillstep, 200);
  rect(xpos+xstep, ypos + ystep, 100, 100);

  fill(200, fillG+(fillstep * 2), 200);
  rect(xpos+(xstep*2), ypos+(ystep*2), 100, 100);

  fill(200, fillG+(fillstep*3), 200);
  rect(xpos+(xstep*3), ypos+(ystep*3), 100, 100);

  fill(200, fillG+(fillstep*4), 200);
  rect(xpos+(xstep*4), ypos+(ystep*4), 100, 100);
}
