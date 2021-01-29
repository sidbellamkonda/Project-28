const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
  boy=loadImage("boy.png");
  treeImg= loadImage("tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  treeObj=createSprite(1000,300);
  treeObj.addImage(treeImg)
  treeObj.scale=0.5

	stoneObj=new stone(235,420,30); 

  console.log(stoneObj.body)
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

  

	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wirestonePames: false
    }
  });
	
	Engine.run(engine);
  Render.run(render);
}

function draw() {

  background(230);
  drawSprites();
  //stonePameRate(2)
  Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

 
  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  collision(stoneObj,mango1);
  collision(stoneObj,mango2);
  collision(stoneObj,mango3);
  collision(stoneObj,mango4);
  collision(stoneObj,mango5);
  collision(stoneObj,mango6);
  collision(stoneObj,mango7);
  collision(stoneObj,mango8);
  collision(stoneObj,mango9);
  collision(stoneObj,mango10);
  collision(stoneObj,mango11);
  collision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
   Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	 launcherObject.attach(stoneObj.body);
	}
  }

  function collision(stone,mango)
  {
	
    mangoP=mango.body.position
    stoneP=stone.body.position

    mangoR= mango.body.circleRadius
    stoneR=stone.body.circleRadius

  if(mangoP.x-stoneP.x < mangoR + stoneR &&
     stoneP.x-mangoP.x < mangoR + stoneR &&
     stoneP.y-mangoP.y < mangoR + stoneR &&
     mangoP.y-stoneP.y < mangoR + stoneR)
      {
        Matter.Body.setStatic(mango.body,false);
      }
  }
 