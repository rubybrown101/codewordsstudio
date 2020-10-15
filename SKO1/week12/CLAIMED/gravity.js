class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(0);
    textSize(10);
    if (this.position.y > -windowWidth/2.5) {
      textFont (font);
    }
    else {
      textFont (font1, 20);
    }
    
    if (this.position.y > -windowWidth/2.5) {
      fill(0);
    } else {
      fill (200,250,50);
    }
    text(sentence, this.position.x/2,this.position.y/2,this.mass*55, this.mass*55);
  }

  checkEdges() {
    if (this.position.x > windowWidth) {
      this.position.x = windowWwidth;
      this.velocity.x *= -1;
    } else if (this.position.x < -10) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > windowHeight) {
      this.velocity.y *= -1;
      this.position.y = windowHeight;
    }
  }

}
