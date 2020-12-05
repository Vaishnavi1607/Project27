
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	bob3 = new Bob(350,400,50);
	bob2 = new Bob(300,400,50);
	bob1 = new Bob(250,400,50);
	bob4 = new Bob(400,400,50);
	bob5 = new Bob(450,400,50);
	
	roof1 = new Roof(350,200,260,20)
	  
	rope1 =new Rope(bob1.body,roof1.body,-100,0);
	rope2 =new Rope(bob2.body,roof1.body,-50,0);
	rope3 =new Rope(bob3.body,roof1.body,0,0);
	rope4 =new Rope(bob4.body,roof1.body,50,0);
	rope5 =new Rope(bob5.body,roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-1})
}
}



