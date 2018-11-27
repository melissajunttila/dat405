let size; //Variable for the sizing of the shapes and text in the program
var tracker = 1; //Tracker variable helps setting up the keypressed function

function setup() { //The statements in the setup function execute once when the program begins
  createCanvas(windowWidth, windowHeight); //Creates the base canvas for the program, filling the whole screen.
  frameRate(5); //Sets the speed (frames per second) of things displayed.
}

function draw() { //The statements in the draw function run continously until the program is stopped
  size = random(800); //The size of all of the text and shapes is set as random by the size variable
  if (tracker == 1) customText(); //If tracker is 1, customText1 appears on screen
  else if (tracker == 2) customText2(); //If tracker is 2, customText2 appears on screen
  else if (tracker == 3) customShape3(); //If tracker is 3, customShape3 appears on screen
  else if (tracker == 4) customShape4(); //If tracker is 4, customShape4 appears on screen
}

function customText() { //Function of the first customed text
  fill(random(255), random(255), random(255)); //The text is filled with random colours
  strokeWeight(2); //Sets line drawing weight to 2 so not thick
  stroke(0); //Sets line drawing colour to black
  textSize(random(200)); //Sets text size to random
  textFont('Courier New'); //Sets text font to Courier New
  text("find me", random(500), size, size); //Writes the wanted text, sets the placement of it to random and refers to the size variable
  }

  function customText2 () { //Function of the second customed text
    fill(random(255), random(255), random(255)); //The text is filled with random colours
    strokeWeight(2); //Sets line drawing weight to 2 so not thick
    stroke(0);  //Sets line drawing colour to black
    textSize(random(200)); //Sets text size to random
    textFont('Arial Black'); //Sets text font to Arial Black
    text("keep going", random(500), size, size); //Writes the wanted text, sets the placement of it to random and refers to the size variable
  }

  function customShape3 () { //Function of the third customed shape
    fill(random(255), random(255), random(255)); //The shape is filled with random colours
    strokeWeight(2); //Sets line drawing weight to 2 so not thick
    stroke(0); //Sets line drawing colour to black
    ellipse(width/2, height/2, size, size); //Creates the ellipse shape and sets them to appear in the middle of the screen and the sizing refers to the size variable
  }

  function customShape4 () { //Function of the third customed shape
    stroke(0); //Sets line drawing colour to black
    fill(random(255), random(255), random(255)); //The shape is filled with random colours
    translate(width/2, height/2); //Translate function allows object to be moved to the middle of the screen
    for (var i = 0; i < 300; i++) { //This for loop makes the contents of the loop run <300 times.
    rotate(0.5); //Rotates a shape the amount specified by the angle parameter, in this case 0.5 degrees
    ellipse(i, mouseX, mouseY, 10, 10); //Creates the ellipse shape, refers to the variable i in the for loop, tracks the mouse position in horizontal & vertical coordinates and sets the size of the shape to 10.
    }
  }

  function keyPressed() { //Called once every time a key is pressed
  if (key == "1") tracker = 1; //If key 1 is pressed, the shape referred to tracker 1 appears
  if (key == "2") tracker = 2; //If key 2 is pressed, the shape referred to tracker 2 appears
  if (key == "3") tracker = 3; //If key 3 is pressed, the shape referred to tracker 3 appears
  if (key == "4") tracker = 4; //If key 4 is pressed, the shape referred to tracker 4 appears
}
