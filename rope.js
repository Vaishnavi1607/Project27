class Rope{
   constructor(body1,body2,offsetX,offsetY)
   {
    this.offsetX=offsetX
    this.offsetY=offsetY

    var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY},
       //stiffness:0.01
        //length:10 
    }
   
   this.rope = Constraint.create(options);

    World.add(world,this.rope);

   }

   display()
   {
       fill(255)
    var posA = this.rope.bodyA.position
    var posB = this.rope.bodyB.position

    line(posA.x,posA.y,posB.x+this.offsetX,posB.y);
    

   }



}