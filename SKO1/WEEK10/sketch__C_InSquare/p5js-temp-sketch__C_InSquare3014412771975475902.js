let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let sentence = 'C L A I M I N G N E W T E R R I T O R Y F O R P R A C T I C E';
let letters = sentence.split(' ');

function setup() {
  createCanvas(720, 720);
  noStroke();
  frameRate(30);
  
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = 100;
  ypos = 100;
  
  
}

function draw() {
  background(102);
  fill(255);
  rect(100,100,500,500);
  

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos> 540|| xpos < rad) {
    xdirection *= -1;
  }
  if (xpos< 100 || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > 540  || ypos < rad) {
    ydirection *= -1;
  }
  if (ypos < 100 || ypos < rad) {
    ydirection *= -1;
  }


  // Draw the shape
  fill(30,200,74);
  textSize(40);
  text(letters, xpos, ypos, this.r*2);

}
