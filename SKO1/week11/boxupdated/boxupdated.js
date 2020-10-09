let angle = 0; 
let sentence = ('C L A I M I N G N E W T E R R I T O R Y F O R P R A C T I C E');
let letters = sentence.split(' ');
let moverA;
let moverB;
let moverC;

function setup() {
createCanvas (windowWidth, windowHeight);
 moverA = new Mover( 0, 30, 10);
  // A smaller Mover on the right side of the window
  moverB = new Mover(440, 30, 2);
  // a medium Mover in the middle of the window
  moverC = new Mover (windowWidth/2, 30, 5);
angleMode(RADIANS);
 
}


function draw() {
background(0);
translate (windowWidth/2, windowWidth/2);
rotate (map (mouseX/150, 0, 60, 0, 60) ); 
fill(255);
rectMode(CENTER);
rect (0, 0, windowWidth/1.5, windowHeight/1.5);
angle = angle+0.1;
let gravity = createVector(0, 0.5);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  moverC.applyForce(gravity);
  

  if (mouseIsPressed) {
    let wind = createVector(0.4, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
    moverC.applyForce(wind);
  }

  moverA.update();
  moverA.display();
  moverA.checkEdges();

  moverB.update();
  moverB.display();
  moverB.checkEdges();
  
  moverC.update();
  moverC.display();
  moverC.checkEdges();

}
