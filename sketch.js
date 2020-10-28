
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var Box1, Box2, Box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new Paper (56,600,70);
ground = new Ground (350,690,900,20);
Box1 = new Bin(670,635,20,90);
Box2 = new Bin(470,635,20,90);
Box3 = new Bin(580,680,200,20);
	Engine.run(engine);
  
}
function keyPressed(){
  if (keyCode === UP_ARROW){
Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}
function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  drawSprites();
 
}



