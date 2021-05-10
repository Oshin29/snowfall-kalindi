class Snow{
    constructor(x,y){
        var option={
            restitution : 0.5,
            friction : 2,
            density : 1,
        };
        this.body=Bodies.circle(x,y,10,option);
        World.add(world,this.body);
        this.image=loadImage("snow4.png")
        this.radius=10;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,2*this.radius,2*this.radius);
        pop();
    }
    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,400)})
        }
    }
}