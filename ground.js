class Ground{
    constructor(x,y,width,height){
       var options = {
           isStatic: true
       }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = 1400;
        this.height = 20;
        World.add(world,this.body);
        
    }

    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    
}