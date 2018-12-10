
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "2072a759";
//This variable will store the JSON weather data
let movies;

let movieSelection = "Mandy";

let poster;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "http://www.omdbapi.com/?apikey=2072a759&t="+movieSelection;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  movies = loadJSON(url);

  poster = loadImage(movies.Poster);
}

function setup() {
  console.log(movies); //Return all JSON data

  //Display temperature information on the screen
  createCanvas(400, 400);
  background(160);
  textAlign(CENTER);
  textSize(18);
  //text(movies.Actors, width/2, height/2);

  //image(poster, 0, 0);
  noLoop();
}

function draw(){
}
