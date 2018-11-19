var sizes = [50, 100, 200];

function setup () {
  createCanvas(600, 400);
  noStroke();
  fill(153, 102, 255);
}

function draw() {
  background(0);

  ellipse(50, 50, sizes[0], sizes[0]);
  ellipse(200, 150, sizes[1], sizes[1]);
  ellipse(400, 250, sizes[2], sizes[2]);

}
