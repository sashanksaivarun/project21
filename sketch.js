
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1;
var wall2;
var wall3;

function preload()
{
	
}

function setup() {
	createCanvas(900,350);

	var wall1_options={
		isStatic: true
	};

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(200,50,50);
	World.add(world,ball); 

	wall1 = Bodies.rectangle(450,350,1000,20,wall1_options);
    World.add(world,wall1);

	wall2 = Bodies.rectangle(450,270,10,140,wall1_options);
    World.add(world,wall2);

	wall3 = Bodies.rectangle(750,270,10,140,wall1_options);
	World.add(world,wall3);

	Engine.run(engine);
  
}


function draw() { 
  rectMode(CENTER);
  background(0);


    ellipse(ball.position.x,ball.position.y,50);
	rect(wall1.position.x,wall1.position.y,1000,20);
	rect(wall2.position.x,wall2.position.y,10,140);
	rect(wall3.position.x,wall3.position.y,10,140);


  drawSprites();
 
}



function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:-0.4})
	}
}

