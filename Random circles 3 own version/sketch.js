let size = 100;
let x;
let y;

function setup() {
  createCanvas(500, 500);
  frameRate(5);
  noStroke();
}

function draw() {
  sizeRandom = random(100,300);
  xRandom = random (width);
  yRandom = random (height);
  customShape(xRandom, yRandom, sizeRandom);

}

function customShape(x,y,size) {
  stroke(255);
  strokeWeight(1);
  fill(153, 153, 255);
  ellipse(x, y, size, size);

  strokeWeight(5);
  fill(153, 102, 255)
  ellipse(x, y, size/1.2, size/1.2);

  strokeWeight(1);
  fill(153, 80, 255)
  ellipse(x, y, size/1.4, size/1.4);

  strokeWeight(5);
  fill(153, 0, 255)
  ellipse(x, y, size/2, size/2);

  noStroke();
  fill(255);
  ellipse(x,y,size/4, size/4)

}
