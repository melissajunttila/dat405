// Variable will store the JSON weather data
var weather;
// Variables for images used in the program
var img1;
var img2;
var img3;
var size1;
var size2;
var size3;
// The url and API key that give out the weather data needed for the program
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=4e118c79dbf89baed2326161171170bc";
var units = "&units=metric";
//Variable for the input needed in the search box
var input;
//Variables for the different weather datas
var temp, humidity, windspeed;

function preload () {
  img1 = loadImage("images/meter.png"); // Loads the image to be ready for use later in the code
  img2 = loadImage("images/humidity.png");
  img3 = loadImage("images/windspeed.png");

}

function setup () { //The statements in the setup function execute once when the program begins
  createCanvas(500, 300); // Creates the base canvas for the program, 500x200 pixels
  var button = select("#submit"); // This variable links the button created in the index html to the program
  button.mousePressed(weatherSearch); // The mousePressed function makes the button to work
  input = select("#city"); // This input links to the city input id in the html code and
  imageMode(CENTER); // Makes the images start from the center of the canvas
}

function weatherSearch () {
  var url = api + input.value() + apiKey + units; // Variable puts together the url needed for the weather search
  loadJSON(url, gotData); // The url goes to loadJSON and returns the data to the weather variable
}

function gotData(data) { // Function that shows that the linked data works
  weather = data;
  temp = weather.main.temp; // Variable for the temperature weather data
  humidity = weather.main.humidity; // Variable for the humidity weather data
  windspeed = weather.wind.speed; // Variable for the wind speed weather data
}

function draw() { //The statements in the draw function run continously until the program is stopped
  background(200); //Background colour for the created canvas
  if (weather) { // Referring to the weather variable
    fill(0); // Text color set to black
    text("Temperature: " + weather.main.temp + "°C", 60, 30); // Text that shows the current temperature of the chosen city
    size1 = map(weather.main.temp, -5, 35, 50, 150); //Map function links the data into the image and makes it change size depending on the temperature
    image(img1, 125, height/2, size1, size1); // Previously loaded image is now drawn on the screen and linked to the temperature data
    text("Humidity: " + weather.main.humidity + "%", 220, 30); // Text that shows the current humidity of the chosen city
    size2 = map(weather.main.humidity, 0, 100, 50, 150); //Map function links the data into the image and makes it change size depending on the humidity
    image(img2, 250, height/2, size2, size2); // Previously loaded image is now drawn on the screen and linked to the humidity data
    text("Wind Speed: " + weather.wind.speed + "", 350, 30); // Text that shows the current wind speed of the chosen city
    size3 = map(weather.wind.speed, 0, 30, 50, 150); //Map function links the data into the image and makes it change size depending on the wind speed
    image(img3, 375, height/2, size3, size3); // Previously loaded image is now drawn on the screen and linked to the wind speed data
  }
}
