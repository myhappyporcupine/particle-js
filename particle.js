// Import vector.js

function Particle(x, y) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(0, 0);
  this.acceleration = new Vector(0, 0);
}

Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration = new Vector(0, 0);
}

Particle.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}
