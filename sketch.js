
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	ground2Object= new Ground(340,100,800,50)
	
	paperObject1 = new Paper(340,600,30)

chain1 = new Chain(paperObject1.body,ground2Object.body,-30*1,0)

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)

paperObject1.display();
ground.display();
ground2Object.display();
chain1.display();




  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObject1.body,paperObject1.body.position,{x:-100,y:-100});
	}
	
  }


