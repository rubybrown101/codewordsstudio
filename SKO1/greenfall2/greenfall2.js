const letter = 'C';
const letter1 = 'L';
const letter2 = 'A';
const letter3 = 'I';
const letter4 = 'M';
const letter5 = 'I';
const letter6 = 'N';
const letter7 = 'G';
const letter8 = 'N';
const letter9 = 'E';
const letter10 = 'W';
const letter11 = 'T';
const letter12 = 'E';
const letter13 = 'R';
const letter14 = 'R';
const letter15 = 'I';
const letter16 = 'T';
const letter17 = 'O';
const letter18 = 'R';
const letter19 = 'Y';
const letter20 = 'F';
const letter21 = 'O';
const letter22 = 'R';
const letter23 = 'P';
const letter24 = 'R';
const letter25 = 'A';
const letter26 = 'C';
const letter27 = 'T';
const letter28 = 'I';
const letter29 = 'C';
const letter30 = 'E';

var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  yVal = 0;  
  velocity = 0; 
  mass = 100; 
  
   for (let i = 0; i<width; i++) {
   let r = random();
 }
  
  accel = mass * 0.1; 
}

function draw() {
  createCanvas(mouseX, mouseY);
  background(127,200,89);
  fill(255,0,0);
  textSize(random, 10, 50);
  velocity += accel; 
  yVal += velocity;
  text(letter, width/11,yVal, mass,mass); 
  text(letter1, width/9, yVal, mass, mass);
  text(letter2, width/8.5, yVal, mass, mass);
   text(letter3, width/7.9,yVal, mass,mass); 
  text(letter4, width/7.5, yVal, mass, mass);
  text(letter5, width/7, yVal, mass, mass);
   text(letter6, width/6.8,yVal, mass,mass); 
  text(letter7, width/6.3, yVal, mass, mass);
  text(letter8, width/5.6, yVal, mass, mass);
   text(letter9, width/5.3,yVal, mass,mass); 
  text(letter10, width/5.1, yVal, mass, mass);
  text(letter11, width/4.6, yVal, mass, mass);
   text(letter12, width/4.4,yVal, mass,mass); 
  text(letter13, width/4.2, yVal, mass, mass);
  text(letter14, width/4, yVal, mass, mass);
   text(letter15, width/3.8,yVal, mass,mass); 
  text(letter16, width/3.7, yVal, mass, mass);
  text(letter17, width/3.5, yVal, mass, mass);
    text(letter18, width/3.3, yVal, mass, mass);
   text(letter19, width/3.1,yVal, mass,mass); 
  text(letter20, width/2.8, yVal, mass, mass);
  text(letter21, width/2.6, yVal, mass, mass);
   text(letter22, width/2.5,yVal, mass,mass); 
  text(letter23, width/2.3, yVal, mass, mass);
  text(letter24, width/2.2, yVal, mass, mass);
   text(letter25, width/1.9,yVal, mass,mass); 
     text(letter26, width/1.8, yVal, mass, mass);
   text(letter27, width/1.7,yVal, mass,mass); 
  text(letter28, width/1.6, yVal, mass, mass);
  text(letter29, width/1.5, yVal, mass, mass);
   text(letter30, width/1.4,yVal, mass,mass); 
 
  
  if (yVal > height - mass/2) {
    // A little dampening when hitting the bottom
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}


function mousePressed() {
  yVal = 0;  
  velocity = 0; 
}
