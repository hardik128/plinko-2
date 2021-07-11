class Plinko {
    constructor(x, y) {
      var options = {
        density:0.5,
        isStatic: true,
      };
      this.body = Bodies.circle(x, y, 10, options);
     
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      fill("white");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 20, 20);
    }
  }