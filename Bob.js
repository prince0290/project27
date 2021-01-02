class Bob{
    constructor(x,y,r){
        var options = {
            isStatic : false ,
            friction : 1 ,
            restitution:1,
            density : 12 
        };

        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);       

        Matter.Bodies.circle(100,670,5,options,4)

    }

    display(){
        var bobpos  = this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        strokeWeight(4);
        fill (255,0,255);
        ellipse(0,0,this.r);
        pop();
    }   
}