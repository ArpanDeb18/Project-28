
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;



var bgImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var launchForce = 100;

function preload()
{
	bgImg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width, 90);

	tree = new Tree(980, height - 345);

	stone = new Stone(135, 505, 30);

	kid = new Boy(200, 700, 250, 250);

	mango1 = new Mango(980, 200);
	mango2 = new Mango(900, 250);
	mango3 = new Mango(830, 230);
	mango4 = new Mango(910, 130);
	mango5 = new Mango(860, 310);
	mango6 = new Mango(1020, 110);
	mango7 = new Mango(1080, 260);
	mango8 = new Mango(1100, 180);
	mango9 = new Mango(1150, 245);
	mango10 = new Mango(1190, 320);

    slingshot = new SlingShot(stone.body,{x:135, y:505});
    
    var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1300, 
			height: 600, 
			wireframes: false 
		} 
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  kid.display();
  slingshot.display();
  stone.display();
  
  collision(stone, mango1);
  collision(stone, mango2);
  collision(stone, mango3);
  collision(stone, mango4);
  collision(stone, mango5);
  collision(stone, mango6);
  collision(stone, mango7);
  collision(stone, mango8);
  collision(stone, mango9);
  collision(stone, mango10);

  textSize(30);
  fill(0, 115, 230);
  text("Press SPACE for another chance! 😉", 10, 45);
 
  
  //drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 135 , y: 505});
        slingshot.attach(stone.body);
    }
}

function collision(lstone, lmango){

    mangoBodyPos = lmango.body.position;
    stoneBodyPos = lstone.body.position;

    var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y);

    if(distance <= lmango.r + lstone.r){
        Body.setStatic(lmango.body, false);
    }

    //console.log(mangoBodyPos.x);

}
