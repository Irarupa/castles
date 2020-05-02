//class Triangle{
    ///constructor(x,y,sides,radius) {
        //var options = {
            //'restitution':0,
            //'friction':0.3,//
            //'density':1.0
      //  }
      //  this.body = Bodies.polygon(x,y,sides,radius, options);
       // this.x = x;
        //this.y = y;
       // this.sides = 3;
       // this.radius = radius;

       // World.add(world, this.body);
    //  }

      //display(){
        //var pos =this.body.position;
        //push();
        //translate(pos.x,pos.y);
        //rotate(this.body.angle);
        //polygonMode(CENTER);
        //fill("red");
        //rect(0, 0, this.sides, this.radius);
        //pop();
      //}
    //}
    
//}


class Triangle {
  constructor(x,y,width,height) {
    var options = {
      isStatic: true

    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
   
    fill("black");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
