class Particle {
  
    constructor(x, y) {
      var options = {
        'isStatic':false,  
        'restitution':0.3,
          'friction':0.5,
          'density':1.0,

      }
      this.body = Matter.Bodies.circle(x, y, this.radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255))
      this.radius = radius;
      World.add(world, this.body);
      
    } 
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      fill(this.color)
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(this.image, 0, 0, this.radius,this.radius);
      pop();
    
      


      
    }
  };