class Ground{
constructor(x,y,width,height){
var groundProperty={
    isStatic:true
}   
this.body=Bodies.rectangle(x,y,width,height,groundProperty)
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
var position=this.body.position
rectMode(CENTER)
fill("brown")
rect(position.x,position.y,this.width,this.height)
}
}