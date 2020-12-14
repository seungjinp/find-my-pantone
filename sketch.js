var posX, posY;
var isTransitionScene = false;
var colors = [
  '#ff2a2a',
  '#ff7a2a',
  '#ffc52a',
  '#43ff2a',
  '#2a89ff',
  '#202082',
  '#6b2aff',
  '#e82aff'
];
var circleColor;
var canvas;
var currentTime;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'none');
}

function startTransition() {
  canvas.style('display', 'block');
  posX = random(0, windowWidth);
  posY = random(0, windowHeight);
  circleColor = random(colors);
  isTransitionScene = true;
  currentTime = millis();
}

function draw() {
  if(isTransitionScene){
    noStroke();
    fill(color(circleColor));
    circle(posX, posY, millis() % (windowHeight * 3));
    if ( millis() - currentTime  > windowHeight * 3)
    { 
      isTransitionScene = false;
	  canvas.style('display', 'none');
    }
  }
}