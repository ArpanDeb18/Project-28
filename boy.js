class Boy{

    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 10;

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {isStatic :true});
        World.add(world, this.body);

        this.image = loadImage("boy1.png");
    }

    display(){

        var boyPos = this.body.position

        //rect(this.x, this.y, this.w, this.h);

        /*imageMode(CENTER);
        image(this.image, boyPos.x, boyPos.y, 250, 250);*/

        push();
        translate(boyPos.x, boyPos.y - 150);
        imageMode(CENTER);
        image(this.image, 0, 0, 250, 250);
        pop();
    }

}