const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world;
var ground;
function setup(){
createCanvas(3000,800);
engine=Engine.create()
world=engine.world

ground=new Ground(600,600,1200,20);
}
function draw(){
ground.display()

}
