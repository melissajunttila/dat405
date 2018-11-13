function setup() {
    createCanvas(400, 400);
    noStroke();
    //fill(0,0,255);
    //var rect2 = rect(100,0,100,100);
    //fill(0,255,0);
    //var rect3 = rect(0,100,100,100);
    //fill(0,0,0);
    //var rect4 = rect(100,100,100,100);
}

function draw() {
  background(0);
  var x = map(mouseX, 0, width, 0, 255);
  var y = map(mouseY, 0, height, 0, 255);
  var z = map(mouseX, 0, width, 255, 0);
  var d = map(mouseY, 0, height, 255, 0);
  var c1 = color(255,0,0,y);
  var c2 = color(0,0,255,x);
  var c3 = color(0,255,0,d);
  var c4 = color(255,255,0,z);
  fill(c1);
  rect(0,0,100,100);
  fill(c2);
  rect(100,0,100,100);
  fill(c3);
  rect(0,100,100,100);
  fill(c4);
  rect(100,100,100,100);
  console.log(x);
}
