
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,Log1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground(800,660,1600,10)
	paper=new  Paper(100,640,30)
	Log1=new  Dustbin(1300,650,120,10)
	Log2=new  Dustbin(1235,621.5,10,67)
	Log3=new  Dustbin(1355,621.5,10,67)
	
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
   ground.display()
   paper.display()

   Log1.display()
   Log2.display()
   Log3.display()
  drawSprites();
 
}
function keyPressed() {
if (keyCode===UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:56,y:-50});
}
}





