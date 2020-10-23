// work adapted from  Karen Donachie's code
//working with midform text
var myText
function preload() {
 // myText = loadStrings('data/AdobeSongStd-Light.otf');
}
var myText= "One of the ways in which the Conceptual project in art has been most successful is in claiming new territory for practice. It’s a tendency that’s been almost too successful: today it seems that most of the work in the international art system positions itself as Conceptual to some degree, yielding the “Conceptual painter,” the “DJ and Conceptual artist,” or the “Conceptual web artist.” Let’s put aside the question of what makes a work Conceptual, recognizing, with some resignation, that the term can only gesture toward a thirty year-old historical moment." 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textSize (50);
  noStroke();
  textFont('Times');
  textAlign(CENTER);
  fill(0);
}


function draw() {
  background(255,80);
  textLeading(sin(frameCount*0.1)*50);
  //textLeading(mouseY/5);
  text(myText, int(windowWidth/8), windowHeight/2, int(windowWidth/4*3), windowHeight*2);
  
}
