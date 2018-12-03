//http://api.openweathermap.org

//Use a text/string object to assign the city we would like to know the weather of
let getLocation = "Rio de Janeiro";
let getLocation2 = "Plymouth";
let getLocation3 = "Helsinki";
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//This variable will store the JSON weather data
let weather;
let weather2;
let weather3;
let size1;
let size2;
let size3;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation+"&units=metric&appid="+apiKey;
  let url2 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation2+"&units=metric&appid="+apiKey;
  let url3 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation3+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather = loadJSON(url);
  weather2 = loadJSON(url2);
  weather3 = loadJSON(url3);
}

function setup() {
  console.log(weather); //Return all JSON data
  console.log("Location: " + getLocation) //Show the location we are searching
  console.log("Temperature: " + weather.main.temp + "°C"); //Show location's conditions (temperature)
  console.log("Temperature (min): " + weather.main.temp_min + "°C"); //Minimum temperature
  console.log("Temperature (max): " + weather.main.temp_max + "°C"); //Maximum temperature
  console.log("Humidity: " + weather.main.humidity); //Humidity
  console.log("Pressure: " + weather.main.pressure); //Pressure

  //Display temperature information on the screen
  createCanvas(400, 400);
  background(160);
  noLoop();
}

function draw(){
  size1 = map(weather.main.temp, -5, 40,10,100);
  fill(map(weather.main.temp,0,20,0,255),0,0);
  ellipse(50,50, size1, size1);
  fill(0);
  text(getLocation, 100, 70);

  size2 = map(weather2.main.temp, -5, 40,10,100);
  fill(map(weather2.main.temp,0,20,0,255),0,0);
  ellipse(200,200, size2, size2);
  fill(0);
  text(getLocation2, 250, 210);

  size3 = map(weather3.main.temp, -5, 40,10,100);
  fill(map(weather3.main.temp,0,20,0,255),0,0);
  ellipse(300,300, size3, size3);
  fill(0);
  text(getLocation3, 250, 340);
}
