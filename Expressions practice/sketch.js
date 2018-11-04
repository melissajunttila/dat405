function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(255);
    fill(255);
    stroke(50);
    strokeWeight(8);
    ellipse(100, 100 + 50, 150, 150);
    ellipse(300 - 25, 100 + 50, 150, 150);
    ellipse(100, 300 - 100, 150 / 3, 150);
    ellipse(270, 300 - 100, 150 / 3, 150);
}
