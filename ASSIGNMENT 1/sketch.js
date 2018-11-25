let size;
var tracker = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  noStroke();
}

function draw() {
  size = random(800);
  if (tracker == 1) customText();
  else if (tracker == 2) customText2();
  else if (tracker == 3) customShape3();
  else if (tracker == 4) customShape4();
}

function customText() {
  fill(random(255), random(255), random(255));
  strokeWeight(2);
  stroke(10);
  textSize(random(200));
  textFont('Courier New');
  text("find me", random(500), size, size);
  }

  function customText2 () {
    fill(random(255), random(255), random(255));
    strokeWeight(2);
    stroke(10);
    textSize(random(200));
    textFont('Arial Black');
    text("follow me", random(500), size, size);
  }

  function customShape3 () {
    fill(random(255), random(255), random(255));
    strokeWeight(2);
    stroke(10);
    ellipse(width/2, height/2, size, size);
  }

  function customShape4 () {
    stroke(0);
    fill(random(255), random(255), random(255));
    translate(width/2, height/2);
    for (var i = 0; i < 300; i++) {
      rotate(0.5);
      ellipse(i, mouseX, mouseY, 10, 10);
    }
  }

  function keyPressed() {
  if (key == "1") tracker = 1;
  if (key == "2") tracker = 2;
  if (key == "3") tracker = 3;
  if (key == "4") tracker = 4;
}
