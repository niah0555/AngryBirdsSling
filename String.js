class String {

constructor(a,b){
this.c=Matter.Constraint.create({
bodyA: a, pointB: b, stiffness:0.4, 
length:100



});
World.add(world,this.c);



}
display(){
    if(this.c.bodyA!=null)
line (this.c.bodyA.position.x,this.c.bodyA.position.y,this.c.pointB.x,this.c.pointB.y);

}

Fly(){
    this.c.bodyA=null;
}


}