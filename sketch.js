const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,150,450,50);

  bobObject1= new Bob(250,450,75);
	bobObject2= new Bob(325,450,75);
	bobObject3= new Bob(400,450,75);
	bobObject4= new Bob(475,450,75);
	bobObject5= new Bob(550,450,75);



  rope1 = new Rope(bobObject1.body,roof.body,-150,0);
  rope2 = new Rope(bobObject2.body,roof.body,-75,0);
  rope3 = new Rope(bobObject3.body,roof.body, 0,0);
  rope4 = new Rope(bobObject4.body,roof.body, 75,0);
  rope5 = new Rope(bobObject5.body,roof.body, 150,0);
  

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,205,0);
  Engine.update(engine);

  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


 

  drawSprites();
 
}

function keyPressed (){
  if ( keyCode === 38){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-2500,y:-2500});
  
    }
}


