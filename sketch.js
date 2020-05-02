const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,rect3;
var rect4,rect5,rect6,rect7;
var rect8,rect9,rect10,rect11;
var rect12,rect13,rect14;
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(300,400,2800,20);
    box1 = new Box(290,300,50,250);
    box2 =new Box(340,300,50,500);
    rect3 = new Box(390,300,50,350);
    rect4 = new Box(440,300,50,500);
    rect5 = new Box(496,300,50,470);
    rect6 = new Box(550,300,50,400);
    rect7 = new Box(240,300,50,400);
     
  rect8 = new Triangle (290,160,50,20);
   rect9 = new Triangle(340,35,50,20);
   rect10 = new Triangle(390,110,50,20);
    rect11 = new Triangle(440,35,50,20);
    rect12 = new Triangle (496,50,50,20);
   rect13 = new Triangle(550,85,50,20);
    rect14 = new Triangle(240,85,50,20)
   
  
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
  // fill("blue");
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
   // triangle(500,540,600,640,740,700);
    rect12.display();
    rect13.display();
    rect14.display();
    
}

