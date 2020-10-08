var sentence = 'C L A I M I N G N E W T E R R I T O R Y F O R P R A C T I C E';
var letters = sentence.split(' ');
let angle = 0; 


function setup() {
createCanvas (windowWidth, windowHeight);
angleMode(DEGREES);
}


function draw() {
background(0);
translate (windowWidth/2, windowWidth/2);
rotate(mouseX/8, mouseY/8); 
fill(255);
rectMode(CENTER);
rect (0, 0, windowWidth/2, windowHeight/2);
angle = angle+1;

//letters = 
}
