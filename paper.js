class Paper {
    constructor(x,y,radius){

var options={
isStatic:false,
restituition:0.3,
friction:0.5,
density:1.2
}
this.image=loadImage("paper.png");
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(x,y,radius,options);

World.add(world,this.body);
}
display() {
    imageMode(CENTER);
    fill("blue");
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}


