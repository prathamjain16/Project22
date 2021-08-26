
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,340,20,ball_options);
	World.add(world,ball);

	ground = new Display(200,390,1000,17.5);
    leftSide = new Display(650,280,10,200);
    rightSide = new Display(500,280,10,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,70);
  
  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-10});
	}
}