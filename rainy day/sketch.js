const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body= Matter.Body;

//var walk=[];
//var walk1;
var batman;
var thunder;
var thunder1,thunder2,thunder3,thunder4;


var raindrops=[];
function preload(){
walk1 = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
thunder1=loadImage("1.png");
thunder2=loadImage("2.png");
thunder3=loadImage("3.png");
thunder4=loadImage("4.png");
}

function setup(){
    var canvas=createCanvas(400,800);

    engine=Engine.create();
    world=engine.world;

batman=new Human(200,480,100,150);

batmansprite=createSprite(200,550,100,100);
batmansprite.addAnimation("b1",walk1);
batmansprite.scale=0.5




batman.x=batmansprite.x
batman.y=batmansprite.y


//raindrop=new Drop(200,100,10);


  //  Engine.run(engine);
}

function draw(){
  //  rectMode(CENTER);
  background(0,0,0)
  Engine.update(engine);


//batman.display();
//raindrop.display();

if(frameCount%60===0){

var randomthunder=Math.round(random(1,4)); 
thunder=createSprite(random(10,380),10,10,10);


switch(randomthunder){
case 1 : thunder.addImage("t1",thunder1);
break;
case 2 : thunder.addImage("t2",thunder2);
break;
case 3 : thunder.addImage("t3",thunder3);
break;
case 4 : thunder.addImage("t4",thunder4);
break;
default:break;
}
thunder.lifetime=15;
}



if(frameCount%5===0){
raindrops.push(new Drop(random(10,290),10,8));
}

for(var j=0;j<raindrops.length;j++){
  raindrops[j].display();

}
drawSprites();
}   

