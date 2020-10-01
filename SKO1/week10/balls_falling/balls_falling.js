let moverA = 'C';
let moverB;
let moverC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // A large Mover on the left side of the window
  moverA = new Mover(200, 30, 10);
  // A smaller Mover on the right side of the window
  moverB = new Mover(440, 30, 2);
  // a medium Mover in the middle of the window
  moverC = new Mover (windowWidth/2, 30, 5);
  createP('Click mouse to apply wind force.');
}

function draw() {
  background(255);

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
