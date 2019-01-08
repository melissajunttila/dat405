var apiKey = "2072a759";
var movies = [];
var movieName;
var actors = 0;
var string,wrapString;
var result;
var input, button;

function setup() {
  createCanvas(400, 400);
  background(160);
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(199,65);
  button.mousePressed(film);

}

function stringDivider(str, width, spaceReplacer) {
  if (str.length>width) {
    var p=width
    for (;p>0 && str[p]!=' ';p--) {
    }
    if (p>0) {
      var left = str.substring(0, p);
      var right = str.substring(p+1);
      return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}

function draw(){
  console.log(movies.Actors);
  console.log(movies.Title);
  //console.log(movies.Actors);
  //textAlign(CENTER);
  //textSize(10);
  string = actors;
  console.log(string)
  wrapString = stringDivider(string, 50,"\n")
  text(wrapString, 100, 400);
  //text(movies.Year, width/2, height/2);
  //text(movies.Title, width/2, height/2);
  //text(movies.Plot, width/2, height/2);
}
function film(){
  movieName = input.value();
  var url = "http://www.omdbapi.com/?apikey=2072a759&t='" + movieName + "'";
  movies = loadJSON(url);
  console.log(movies);
  input.value('');
  fill(0,0,0);
  actors = movies.Actors;

/* text(movies.Actors, width/2, height/2);
  text(movies.Year, width/2, height/3);
  text(movies.Title, width/2, height/4);
  text(movies.Plot, width/2, height/5); */

}
