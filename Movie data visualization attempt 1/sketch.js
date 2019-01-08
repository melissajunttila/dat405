let apiKey = "2072a759";
let movies;
let url = "http://www.omdbapi.com/?apikey=2072a759&t=Fight+Club";
let string,wrapString;
let result;

function preload() {
  movies = loadJSON(url);
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(15);
  textFont("Courier New");
  text(movies.Title, 100, 100);
  text(movies.Director, 100, 150);
  text(movies.Year, 100, 200);
  text(movies.Actors, 100, 250);

  string = movies.Plot;
  console.log(string)
  wrapString = stringDivider(string, 50,"\n")
  text(wrapString, 100, 400);
  text(movies.Awards, 100, 500);
  text(movies.imdbRating, 100, 550);
  noLoop();
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
  //ellipse(100,500,50,50);
}
