class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.6,
          'friction':10.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, height, options);
      this.width = 10;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate (pos.x,pos.y);
      //angleMode(RADIANS);
      rotate (angle);
      rectMode(CENTER);
      fill(0,0,255);
      rect(0,0,this.width, this.height);
      pop();
    }
  };
  