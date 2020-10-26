class Tree{

    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.w = 0;
        this.h = 0;
        

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {isStatic :true});
        World.add(world, this.body);

        this.image = loadImage("tree.png");
    }

    display(){

        var treePos = this.body.position

        //rect(this.x, this.y, this.w, this.h);

        push();
        translate(treePos.x, treePos.y + 10);
        imageMode(CENTER);
        image(this.image, 0, 0, 450, 600);
        //image(this.image, 0,-this.h/2,this.w, this.h);
        pop();
    }

}