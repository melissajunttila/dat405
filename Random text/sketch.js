let size;
var tracker = 1;

function setup() {
  createCanvas(800, 800);
  frameRate(5);
  noStroke();
}

function draw() {
  size = random(800);
  if (tracker == 1) customText();
  else if (tracker == 2) customText2();

}

function customText() {
  fill(random(255), random(255), random(255));
  strokeWeight(2);
  stroke(10);
  textSize(random(500));
  textFont('Courier New');
  text("you", random(500), size, size);
  }

  function customText2 () {
    fill(random(255), random(255), random(255));
    strokeWeight(2);
    stroke(10);
    textSize(random(500));
    textFont('Arial Black');
    text("me", random(500), size, size);
  }

  function keyPressed() {
  if (key == "1") tracker = 1;
  if (key == "2") tracker = 2;

}
