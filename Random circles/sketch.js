//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 100;
let backImg;
let xPlusOne = 0;
let yPlusOne = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(4);
}

function draw() {
  background(0);

  //Run the nested loop for x, and y
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      ellipses (Math.round(random(4)), Math.round(random(4)));
    }
  }
}

function ellipses(x, y){
  fill(random(255), random(255), random(255));
  ellipse(size * x, size * y, size, size);

  fill(random(255), random(255), random(255));
  ellipse(50+size * x, 50+size * y, size/2, size/2);

  fill(random(255), random(255), random(255));
  ellipse(70+size * x, 70+size * y, size/2, size/2);

  fill(random(255), random(255), random(255));
  ellipse(10+size * x, 10+size * y, size/4, size/4);
}

function keyPressed() {
  if (key == 'd' || key == 'D') xPlusOne++;
  if (key == 'a' || key == 'A') xPlusOne--;
  if (key == 's' || key == 'S') yPlusOne++;
  if (key == 'w' || key == 'W') yPlusOne--;
  console.log("x: " +xPlusOne+ ", y: " +yPlusOne);
}
