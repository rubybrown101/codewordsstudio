# welcome to code~words
By Ruby Brown
function preload() {
  font = loadFont('data/AdobeHebrew-Bold.otf');
  font2 = loadFont('data/CourierStd.otf');
}

function setup() {
createCanvas(600,600);
background(255, 35,89);
fill(0);
textSize(32);
textFont(font);
textAlign (LEFT);
}


function draw() {
  textFont(font);
  textSize(10);
 text('small word', 100,100);
 textSize(30);
 text('medium word', 100,300);
 textSize(60);
 text('big word', 100,500);
 //textFont(font2);
 //textSize(40);
 //text('woobloodyhoo', 300,400);
}
