function preload() {
  font = loadFont('data/AdobeHebrew-Bold.otf');
  font2 = loadFont('data/CourierStd.otf');
}
var spin=0
var letterSize=(mouseY,mouseX);

function setup() {
createCanvas(600,600);
background(240);
fill(0);
angleMode(DEGREES);
textAlign (CENTER);
frameRate(15);
}


function draw() {
  fill(0);
  translate(300,300);
  rotate(spin);
 textSize(letterSize);
 textFont (font2);
 text('scally wags', 0,0);
 spin=map(mouseY,0,600,300,90);
 stroke(0);
 fill(150,30); 
 noStroke(2);
 fill(240,43,87);
 pop(2);
 background(150,40);

}
