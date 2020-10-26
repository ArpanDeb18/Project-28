class Mango{

    constructor(x,y,r){

        var options = {
            isStatic:true,
            restitution:0
            
        }


        this.x = x;
        this.y = y;
        this.r = 30;

        this.image = loadImage("mango.png");

        this.body = Bodies.circle(this.x , this.y , 15, options); 
        World.add(world, this.body);

        
    }

    display(){

        var mangoPos = this.body.position

        push();
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle)
		fill(255,0,255)
		
		ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, 45, 45);
        //image(this.image, 0,0,this.r*2, this.r*2)
        pop();
    }

}