var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1Sprite,side2Sprite,side3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 89, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.4

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.2

	side1Sprite=createSprite(width/2-40,670,200,20);
	side1Sprite.shapeColor="red"; 

	side2Sprite=createSprite(width/2-150,610,20,160)
	side2Sprite.shapeColor="red";

	side2Sprite=createSprite(width/2+70,610,20,160)
	side2Sprite.shapeColor="red";

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
    
  }
}



