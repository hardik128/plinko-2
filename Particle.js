class Particle {
    constructor(x, y, r) {
      var options = {
        
        density:0.5,
        restitution: 0.4,
      };
      this.body = Bodies.circle(x, y, 10, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.r = r;
      World.add(world, this.body);
    }
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(0, 0,20,20);
      pop();
    }
}