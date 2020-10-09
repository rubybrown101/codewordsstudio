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
    fill(this.position.x, this.position.y, 150);
    text('C', this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (this.position.x > windowWidth) {
      this.position.x = windowWwidth;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > windowHeight) {
      this.velocity.y *= -1;
      this.position.y = windowHeight;
    }
  }

}
