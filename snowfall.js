class Snowfall{
    constructor(x,y,width,height){
        var options = {
            'restitution':0,
            'density':0.001,
            'airFriction': 10
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
        this.height = height;
        this.body.lifetime = 100;
        //this.image = loadImage(Math.round(random("images/4.jpg,images/5.jpg")));
        this.image = loadImage("images/snowflake.png") ;
        World.add(world,this.body);
    }
    
    display(){
        var snowpos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(snowpos.x,snowpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}