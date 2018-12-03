//http://api.openweathermap.org

let locationArray = ["Rio de Janeiro", "Helsinki", "Plymouth", "Madrid", "Tokyo", "New York"];
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
let weather = [];

function preload() {
  for (let i=0; i<locationArray.length; i++){
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+locationArray[i]+"&units=metric&appid="+apiKey;
  weather[i] = loadJSON(url);
}

function setup() {
  //console.log(weather); //Return all JSON data
  //console.log("Location: " + randomLocation) //Show the location we are searching
  //console.log("Temperature: " + weather.main.temp + "°C"); //Show location's conditions (temperature)
  //console.log("Temperature (min): " + weather.main.temp_min + "°C"); //Minimum temperature
  //console.log("Temperature (max): " + weather.main.temp_max + "°C"); //Maximum temperature
  //console.log("Humidity: " + weather.main.humidity); //Humidity
  //console.log("Pressure: " + weather.main.pressure); //Pressure

  createCanvas(600, 600);
  textSize(18);
  noLoop();
}

function draw(){
  let mapColor;
  //According to the data returned from the JSON object, we use the current temperature of the city
  //to control the background color. The following conditional statements will evaluate only one option (thus, one color)
  if (weather.main.temp<-5) mapColor = color(36, 194, 203);
  if (weather.main.temp>-5 && weather.main.temp<5) mapColor = color(196, 208, 234);
  if (weather.main.temp>5 && weather.main.temp<10) mapColor = color(234, 231, 222);
  if (weather.main.temp>10 && weather.main.temp<20) mapColor = color(234, 208, 155);
  if (weather.main.temp>20) mapColor = color(234, 143, 0);

  background(mapColor);
  fill(0);
  text(randomLocation, width/2, height/2-30);
  text("Temperature: " + weather.main.temp + "°C", width/2, height/2-0);
  text("Humidity: " + weather.main.humidity + "%", width/2, height/2+30);
  }
