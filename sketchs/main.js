/**
 * You can find all function that you can use in 
 * p5.js from this site https://p5js.org/reference/
 */
const TEXT_RADIUS = 100;
const TEXT_ORBIT_SPEED = 30;//bigger the slower
const TEXT_SIZE = 25;

/**
 * Called once when the program is started
 */
function setup() 
{
   createCanvas(windowWidth, windowHeight);
}

/**
 * Called every frame
 */
function draw()
{
   // put drawing code here
   //Background (R, G, B)
   background(234, 180, 150);

   var x = TEXT_RADIUS * Math.cos(frameCount / TEXT_ORBIT_SPEED);
   var y = TEXT_RADIUS * Math.sin(frameCount / TEXT_ORBIT_SPEED);

   // Offset, moves it to the center (kinda, I don't acount of length of string)
   x +=  width / 2;
   y += height / 2;

   textSize(TEXT_SIZE);
   text("P5 js boilerplate", x, y);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}