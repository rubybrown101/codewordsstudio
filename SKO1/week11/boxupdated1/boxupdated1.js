let angle = 0; 
let sentence = 'CLAIMING NEW TERRITORY FOR PRACTICE';
let moverA;
let moverB;
let moverC;
let moverD;
let moverE;
let moverF;
let moverG;
let moverH;

function preload () {
  font = loadFont ('data/LetterGothicStd-BoldSlanted.otf');
  font1 = loadFont ('data/AURORA-Regular.ttf');
}


function setup() {
createCanvas (windowWidth, windowHeight);
  moverA = new Mover(10, 10, 500);
  moverB = new Mover(101, 30, 12);
  moverC = new Mover (102, 30, 8.5);
  moverD = new Mover (103, 30, 8);
  moverE = new Mover(104, 10, 10);
  moverF = new Mover(120, 30, 11);
  moverG = new Mover (106, 30, 9);
  moverH = new Mover (107, 30, 13);
  moverI = new Mover(108, 10, 9.2);
  moverJ = new Mover(109, 30, 6.5);
  moverK = new Mover (110, 30, 7.5);
  moverL = new Mover (111, 30, 7);
  moverM = new Mover(112, 10, 9.5);
  moverN = new Mover(113, 30, 10.5);
  moverO = new Mover (114, 30, 11.5);
  moverP = new Mover (115, 30, 12.5);
angleMode(RADIANS);
 
}


function draw() {
background(0);
translate (windowWidth/2, windowWidth/2);
rotate (map (mouseX/150, 0, 60, 0, 60) ); 
fill(165);
rectMode(CENTER);
rect (0, 0, windowWidth/1.5, windowHeight/1.5);
angle = angle+0.1;


let gravity = createVector(0, 1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  moverC.applyForce(gravity);
  moverD.applyForce(gravity);
  moverE.applyForce(gravity);
  moverF.applyForce(gravity);
  moverG.applyForce(gravity);
  moverH.applyForce(gravity);
  moverI.applyForce(gravity);
  moverJ.applyForce(gravity);
  moverK.applyForce(gravity);
  moverL.applyForce(gravity);
  moverM.applyForce(gravity);
  moverN.applyForce(gravity);
  moverO.applyForce(gravity);
  moverP.applyForce(gravity);
  

  if (mouseIsPressed) {
let gravity = createVector(0, -2);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  moverC.applyForce(gravity);
  moverD.applyForce(gravity);
  moverE.applyForce(gravity);
  moverF.applyForce(gravity);
  moverG.applyForce(gravity);
  moverH.applyForce(gravity);
  moverI.applyForce(gravity);
  moverJ.applyForce(gravity);
  moverK.applyForce(gravity);
  moverL.applyForce(gravity);
  moverM.applyForce(gravity);
  moverN.applyForce(gravity);
  moverO.applyForce(gravity);
  moverP.applyForce(gravity);
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
  
  moverD.update();
  moverD.display();
  moverD.checkEdges();
  
  moverE.update();
  moverE.display();
  moverE.checkEdges();

  moverF.update();
  moverF.display();
  moverF.checkEdges();
  
  moverG.update();
  moverG.display();
  moverG.checkEdges();
  
  moverH.update();
  moverH.display();
  moverH.checkEdges();
  
  moverI.update();
  moverI.display();
  moverI.checkEdges();

  moverJ.update();
  moverJ.display();
  moverJ.checkEdges();
  
  moverK.update();
  moverK.display();
  moverK.checkEdges();
  
  moverL.update();
  moverL.display();
  moverL.checkEdges();
  
  moverM.update();
  moverM.display();
  moverM.checkEdges();

  moverN.update();
  moverN.display();
  moverN.checkEdges();
  
  moverO.update();
  moverO.display();
  moverO.checkEdges();
  
  moverP.update();
  moverP.display();
  moverP.checkEdges();
  
  fill(100);
  textFont(font);
  textSize (20);
  text ('PRESS TO CLAIM', -500,-500);

}
