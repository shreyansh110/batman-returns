class Human{
constructor(x,y,width,height){

var options={
'restitution':1.0,
'friction':0,
'density':1.2,
isStatic:true


    }

this.body=Bodies.rectangle(x,y,width,height,options);

this.width=width;
this.height=height;

World.add(world,this.body);
}

display(){
var plr=this.body.position
push();
translate(plr.x,plr.y);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();






}






}